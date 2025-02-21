import fetch from 'node-fetch';
import config from './config.js';
import { sleep, processInBatches, writeProjectData } from './common.js';
import path from 'path';

const NPM_API = 'https://registry.npmjs.org';
const { requestsPerHour, delayBetweenRequests } = config.npm.rateLimit;

async function getPackageDetails(packageName) {
    try {
        await sleep(delayBetweenRequests);
        const response = await fetch(`${NPM_API}/${packageName}`);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch package details for ${packageName}`);
        }

        const data = await response.json();
        
        return {
            ...data,
            readme: data.readme || 'No README available'
        };
    } catch (error) {
        console.error(`Error fetching details for ${packageName}:`, error);
        return null;
    }
}

export async function scrapeNpm(options = {}) {
    const {
        limit = config.npm.limit,
        keywords = config.npm.keywords
    } = options;

    const allResults = new Map();
    const keywordStats = new Map();
    let requestCount = 0;
    const requestTimes = [];

    function updateRequestCount() {
        const now = Date.now();
        requestTimes.push(now);
        const oneHourAgo = now - (60 * 60 * 1000);
        while (requestTimes.length && requestTimes[0] < oneHourAgo) {
            requestTimes.shift();
        }
        requestCount = requestTimes.length;
    }

    // Run all keyword searches in parallel
    await Promise.all(keywords.map(async (keyword) => {
        console.log(`Searching npm for keyword "${keyword}"...`);
        try {
            updateRequestCount();
            if (requestCount >= requestsPerHour) {
                console.log('Approaching rate limit, waiting...');
                await sleep(60 * 60 * 1000);
                requestCount = 0;
                requestTimes.length = 0;
            }

            await sleep(delayBetweenRequests);
            const searchUrl = `${NPM_API}/-/v1/search?text=${encodeURIComponent(keyword)}&size=250`;
            const response = await fetch(searchUrl);
            if (!response.ok) {
                throw new Error(`NPM API error: ${response.statusText}`);
            }

            const data = await response.json();
            const newPackages = [];
            
            for (const pkg of data.objects) {
                if (!allResults.has(pkg.package.name)) {
                    allResults.set(pkg.package.name, {
                        name: pkg.package.name,
                        description: pkg.package.description,
                        version: pkg.package.version,
                        url: `https://www.npmjs.com/package/${pkg.package.name}`,
                        repository: pkg.package.links.repository,
                        homepage: pkg.package.links.homepage,
                        keywords: pkg.package.keywords || [],
                        author: pkg.package.author?.name,
                        publisher: pkg.package.publisher?.username,
                        maintainers: pkg.package.maintainers?.map(m => m.username),
                        last_updated: pkg.package.date,
                        score: pkg.score.final,
                        popularity: pkg.score.detail.popularity,
                        quality: pkg.score.detail.quality,
                        maintenance: pkg.score.detail.maintenance
                    });
                    newPackages.push(pkg.package.name);
                }
            }

            keywordStats.set(keyword, {
                total: data.objects.length,
                new: newPackages.length,
                packages: newPackages
            });
            
            console.log(`Found ${data.objects.length} packages for "${keyword}" (${newPackages.length} new)`);
        } catch (error) {
            console.error(`Error searching for keyword ${keyword}:`, error);
        }
    }));

    // Print summary of results
    console.log('\nSearch Results Summary:');
    for (const [keyword, stats] of keywordStats) {
        console.log(`- ${keyword}: ${stats.total} total (${stats.new} unique)`);
    }
    console.log(`\nTotal unique packages: ${allResults.size}`);

    // Get details for each package
    const packages = Array.from(allResults.values())
        .sort((a, b) => b.score - a.score)
        .slice(0, limit);

    let processed = 0;
    const outputDir = path.join(process.cwd(), config.output.npm);

    const packagesWithDetails = await processInBatches(packages, config.batch.size, async (pkg) => {
        console.log(`\nFetching details for ${pkg.name} (${++processed} / ${packages.length})...`);
        const details = await getPackageDetails(pkg.name);
        if (details) {
            const packageWithDetails = { ...pkg, readme: details.readme };
            await writeProjectData(packageWithDetails, outputDir, 'npm');
            return packageWithDetails;
        }
    });

    return packagesWithDetails.filter(Boolean);
}

export async function scrapeNpmWithConfig(options) {
    // Merge config with provided options
    const scrapeOptions = {
        keywords: options.keywords || config.npm.keywords,
        limit: options.limit || config.npm.limit
    };

    // Update rate limiting if specified
    if (options.batch) config.batch.size = options.batch;
    if (options.delay) config.npm.rateLimit.delayBetweenRequests = options.delay;
    if (options.rph) config.npm.rateLimit.requestsPerHour = options.rph;

    return await scrapeNpm(scrapeOptions);
} 
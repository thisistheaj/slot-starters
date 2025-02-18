import fetch from 'node-fetch';
import path from 'path';
import config from './config.js';
import { sleep, processInBatches, writeProjectData } from './common.js';

const BASE_URL = 'https://api.github.com';
const { requestsPerHour, delayBetweenRequests } = config.github.rateLimit;

function getHeaders(token) {
    return {
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Starter-Project-Scraper'
    };
}

async function getRepositoryDetails(token, fullName) {
    const headers = getHeaders(token);

    try {
        const [repoResponse, readmeResponse] = await Promise.all([
            fetch(`${BASE_URL}/repos/${fullName}`, { headers }),
            fetch(`${BASE_URL}/repos/${fullName}/readme`, { headers })
        ]);

        const [repoData, readmeData] = await Promise.all([
            repoResponse.json(),
            readmeResponse.json()
        ]);

        if (!repoResponse.ok || !readmeResponse.ok) {
            throw new Error('Failed to fetch repository details');
        }

        return {
            ...repoData,
            readme: Buffer.from(readmeData.content, 'base64').toString('utf-8')
        };
    } catch (error) {
        console.error(`Error fetching details for ${fullName}:`, error);
        return null;
    }
}

export async function scrapeGithub(token, options = {}) {
    const {
        languages = config.github.languages,
        minStars = config.github.minStars,
        limit = config.github.limit,
        topics = config.github.topics
    } = options;

    const headers = getHeaders(token);
    const allResults = new Map();
    const topicStats = new Map();
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

    // Search for each language and topic combination
    for (const language of languages) {
        console.log(`\nSearching repositories in ${language}...`);
        
        const baseQuery = [
            `language:${language}`,
            `stars:>=${minStars}`
        ];

        for (const topic of topics) {
            let page = 1;
            const newRepos = [];
            let totalForTopic = 0;

            const query = [...baseQuery, `topic:${topic}`].join(' ');
            console.log(`\nSearching for topic "${topic}" with query:`, query);

            while (true) {
                updateRequestCount();
                if (requestCount >= requestsPerHour) {
                    console.log('Approaching rate limit, waiting...');
                    await sleep(60 * 60 * 1000);
                    requestCount = 0;
                    requestTimes.length = 0;
                }

                await sleep(delayBetweenRequests);

                const searchUrl = `${BASE_URL}/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc&page=${page}&per_page=100`;
                
                try {
                    const response = await fetch(searchUrl, { headers });
                    if (!response.ok) {
                        const error = await response.json();
                        throw new Error(`GitHub API error: ${error.message}`);
                    }

                    const data = await response.json();
                    if (data.items.length === 0) break;

                    totalForTopic += data.items.length;

                    for (const repo of data.items) {
                        if (!allResults.has(repo.full_name)) {
                            allResults.set(repo.full_name, {
                                name: repo.name,
                                full_name: repo.full_name,
                                description: repo.description,
                                url: repo.html_url,
                                stars: repo.stargazers_count,
                                forks: repo.forks_count,
                                language: repo.language,
                                topics: repo.topics,
                                last_updated: repo.updated_at,
                                license: repo.license?.name || 'No license',
                                is_template: repo.is_template
                            });
                            newRepos.push(repo.full_name);
                        }
                    }

                    console.log(`Page ${page}: Found ${data.items.length} repositories (${newRepos.length} new)`);
                    page++;
                    if (allResults.size >= limit) break;

                } catch (error) {
                    console.error('Error fetching repositories:', error);
                    break;
                }
            }

            topicStats.set(`${language}:${topic}`, {
                total: totalForTopic,
                new: newRepos.length,
                repositories: newRepos
            });

            console.log(`\nCompleted "${topic}" in ${language}: ${totalForTopic} total (${newRepos.length} unique)`);
        }
    }

    // Enhanced summary showing results by language
    console.log('\nSearch Results Summary:');
    const languageStats = new Map();

    for (const [key, stats] of topicStats) {
        const [language, topic] = key.split(':');
        if (!languageStats.has(language)) {
            languageStats.set(language, { total: 0, new: 0 });
        }
        const langStats = languageStats.get(language);
        langStats.total += stats.total;
        langStats.new += stats.new;
        
        console.log(`- ${language}/${topic}: ${stats.total} total (${stats.new} unique)`);
    }

    console.log('\nBy Language:');
    for (const [language, stats] of languageStats) {
        console.log(`- ${language}: ${stats.total} total (${stats.new} unique)`);
    }
    console.log(`\nTotal unique repositories: ${allResults.size}`);

    // Get details for each repository
    const repositories = Array.from(allResults.values())
        .sort((a, b) => b.stars - a.stars)
        .slice(0, limit);

    let processed = 0;
    const outputDir = path.join(process.cwd(), config.output.github);

    const projectsWithDetails = await processInBatches(repositories, config.batch.size, async (project) => {
        console.log(`\nFetching details for ${project.full_name} (${++processed} / ${repositories.length})...`);
        const details = await getRepositoryDetails(token, project.full_name);
        if (details) {
            const projectWithDetails = { ...project, readme: details.readme };
            await writeProjectData(projectWithDetails, outputDir, 'github');
            return projectWithDetails;
        }
    });

    return projectsWithDetails.filter(Boolean);
} 
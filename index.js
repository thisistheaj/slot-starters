#!/usr/bin/env node
import { Command } from 'commander';
import path from 'path';
import config from './lib/config.js';
import { formatDuration } from './lib/common.js';
import { scrapeGithub } from './lib/github.js';
import { scrapeNpm } from './lib/npm.js';

const program = new Command();

// Common options for both scrapers
const addCommonOptions = (command) => {
    return command
        .option('-b, --batch <size>', 'batch size for parallel processing', parseInt)
        .option('-d, --delay <ms>', 'delay between requests in milliseconds', parseInt)
        .option('-r, --rph <limit>', 'requests per hour limit', parseInt)
        .option('-l, --limit <number>', 'maximum number of results to fetch', parseInt);
};

program
    .name('slot')
    .description('CLI tool for scraping starter templates')
    .version('1.0.0');

const scrape = program
    .command('scrape')
    .description('scrape starter templates from different sources');

// GitHub scraper
addCommonOptions(
    scrape.command('github')
        .description('scrape GitHub starter templates')
        .argument('<token>', 'GitHub API token')
        .option('-s, --stars <number>', 'minimum stars', parseInt)
        .option('-t, --topics <items>', 'topics to search for', commaSeparatedList)
        .option('-L, --languages <items>', 'languages to search for', commaSeparatedList)
)
.action(async (token, options) => {
    try {
        const startTime = Date.now();
        const outputDir = path.join(process.cwd(), config.output.github);

        // Merge config with command line options
        const scrapeOptions = {
            languages: options.languages || config.github.languages,
            minStars: options.stars || config.github.minStars,
            limit: options.limit || config.github.limit,
            topics: options.topics || config.github.topics
        };

        // Update rate limiting if specified
        if (options.batch) config.batch.size = options.batch;
        if (options.delay) config.github.rateLimit.delayBetweenRequests = options.delay;
        if (options.rph) config.github.rateLimit.requestsPerHour = options.rph;

        const results = await scrapeGithub(token, scrapeOptions);
        const duration = Date.now() - startTime;
        console.log(`\nDone! Crawled ${results.length} repositories in ${formatDuration(duration)}`);
        console.log(`Data written to ${outputDir}`);
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
});

// NPM scraper
addCommonOptions(
    scrape.command('npm')
        .description('scrape NPM starter packages')
        .option('-k, --keywords <items>', 'keywords to search for', commaSeparatedList)
)
.action(async (options) => {
    try {
        const startTime = Date.now();
        const outputDir = path.join(process.cwd(), config.output.npm);

        // Merge config with command line options
        const scrapeOptions = {
            keywords: options.keywords || config.npm.keywords,
            limit: options.limit || config.npm.limit
        };

        // Update rate limiting if specified
        if (options.batch) config.batch.size = options.batch;
        if (options.delay) config.npm.rateLimit.delayBetweenRequests = options.delay;
        if (options.rph) config.npm.rateLimit.requestsPerHour = options.rph;

        const results = await scrapeNpm(scrapeOptions);
        const duration = Date.now() - startTime;
        console.log(`\nDone! Crawled ${results.length} packages in ${formatDuration(duration)}`);
        console.log(`Data written to ${outputDir}`);
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
});

// Helper for parsing comma-separated lists
function commaSeparatedList(value) {
    return value.split(',').map(item => item.trim());
}

program.parse(); 
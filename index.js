#!/usr/bin/env node
import { Command } from 'commander';
import path from 'path';
import config from './lib/config.js';
import { formatDuration } from './lib/common.js';
import { scrapeGithubWithConfig } from './lib/github.js';
import { scrapeNpmWithConfig } from './lib/npm.js';
import { analyzeStarters } from './lib/analyze.js';
import { formatSearchResults } from './scripts/search.js';

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

        const results = await scrapeGithubWithConfig(token, options);
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

        const results = await scrapeNpmWithConfig(options);
        const duration = Date.now() - startTime;
        console.log(`\nDone! Crawled ${results.length} packages in ${formatDuration(duration)}`);
        console.log(`Data written to ${outputDir}`);
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
});

// Add analyze command
program
  .command('analyze')
  .description('analyze starter templates with LLM')
  .option('-f, --force', 'force reanalysis of all templates', false)
  .action(async (options) => {
    try {
      await analyzeStarters(options);
    } catch (error) {
      console.error('Error:', error.message);
      process.exit(1);
    }
  });

// Search command
program
  .command('search')
  .description('Search starter templates')
  .option('-t, --technologies <items>', 'Technologies to search for (comma-separated)', commaSeparatedList)
  .option('-p, --purposes <items>', 'Purposes to search for (comma-separated key:value pairs)', commaSeparatedList)
  .option('-f, --features <items>', 'Features to search for (comma-separated paths)', commaSeparatedList)
  .option('-l, --limit <number>', 'Maximum number of results', parseInt, 10)
  .action(async (options) => {
    try {
      const results = await formatSearchResults(options);

      console.log('\nSearch Results:');
      for (const result of results) {
        console.log(`\n${result.metadata.name}`);
        console.log(`Matches: ${result._matchedCount} (Quality Score: ${result._score.toFixed(2)})`);
        console.log(`URL: ${result.metadata.url}`);
        console.log(`Technologies: ${result.technologies.join(', ')}`);
        console.log('Purposes:');
        for (const [key, value] of Object.entries(result.purposes)) {
          console.log(`  ${key}: ${value}`);
        }
      }
    } catch (err) {
      console.error('Search failed:', err);
      process.exit(1);
    }
  });

// Helper for parsing comma-separated lists
function commaSeparatedList(value) {
    return value.split(',').map(item => item.trim());
}

program.parse(); 
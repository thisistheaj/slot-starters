#!/usr/bin/env node
import path from 'path';
import config from './lib/config.js';
import { formatDuration } from './lib/common.js';
import { scrapeGithub } from './lib/github.js';
import { scrapeNpm } from './lib/npm.js';

const commands = {
    async github(token) {
        if (!token) {
            console.error('GitHub token is required');
            process.exit(1);
        }
        const startTime = Date.now();
        const outputDir = path.join(process.cwd(), config.output.github);
        const results = await scrapeGithub(token);
        const duration = Date.now() - startTime;
        console.log(`\nDone! Crawled ${results.length} repositories in ${formatDuration(duration)}`);
        console.log(`Data written to ${outputDir}`);
    },

    async npm() {
        const startTime = Date.now();
        const outputDir = path.join(process.cwd(), config.output.npm);
        const results = await scrapeNpm();
        const duration = Date.now() - startTime;
        console.log(`\nDone! Crawled ${results.length} packages in ${formatDuration(duration)}`);
        console.log(`Data written to ${outputDir}`);
    }
};

async function main() {
    const [,, cmd, ...args] = process.argv;
    
    if (!cmd || !commands[cmd]) {
        console.log('Usage: slot <command> [args]');
        console.log('\nCommands:');
        console.log('  github <token>  Scrape GitHub starter projects');
        console.log('  npm            Scrape NPM starter packages');
        process.exit(1);
    }

    await commands[cmd](...args);
}

main().catch(error => {
    console.error('Error:', error.message);
    process.exit(1);
}); 
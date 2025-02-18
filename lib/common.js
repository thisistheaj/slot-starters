import fs from 'fs/promises';
import path from 'path';
import config from './config.js';

// Shared constants from config
export const DELAY_BETWEEN_REQUESTS = config.github.rateLimit.delayBetweenRequests;
export const BATCH_SIZE = config.batch.size;
export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const formatDuration = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    return minutes > 0 ? 
        `${minutes}m ${seconds % 60}s` : 
        `${seconds}s`;
};

// Shared batch processor
export async function processInBatches(items, batchSize, processor) {
    const results = [];
    for (let i = 0; i < items.length; i += batchSize) {
        const batch = items.slice(i, i + batchSize);
        const batchResults = await Promise.all(batch.map(processor));
        results.push(...batchResults.filter(Boolean));
        console.log(`Processed ${i + batch.length} / ${items.length} items`);
        await sleep(DELAY_BETWEEN_REQUESTS);
    }
    return results;
}

// Shared file writing
export async function writeProjectData(project, outputDir, type = 'npm') {
    await fs.mkdir(outputDir, { recursive: true });
    
    const detailsDir = path.join(outputDir, 'details');
    await fs.mkdir(detailsDir, { recursive: true });
    
    // Handle different naming conventions for npm vs github
    const projectPath = type === 'npm' ? 
        project.name : 
        project.full_name.replace('/', '__');
    
    const projectDir = path.join(detailsDir, projectPath);
    await fs.mkdir(projectDir, { recursive: true });
    
    await fs.writeFile(
        path.join(projectDir, 'metadata.json'),
        JSON.stringify(project, null, 2)
    );
    
    if (project.readme) {
        await fs.writeFile(
            path.join(projectDir, 'README.md'),
            project.readme
        );
    }

    return project;
} 
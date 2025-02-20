import fs from 'fs/promises';
import path from 'path';
import config from '../lib/config.js';

async function getRandomItems(array, n) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

async function readProjectData(projectDir) {
    try {
        const metadata = JSON.parse(
            await fs.readFile(path.join(projectDir, 'metadata.json'), 'utf8')
        );
        const readme = await fs.readFile(path.join(projectDir, 'README.md'), 'utf8');
        
        // Strip readme from metadata if it exists
        const { readme: _, ...metadataWithoutReadme } = metadata;
        
        return { 
            metadata: metadataWithoutReadme, 
            readme 
        };
    } catch (error) {
        console.error(`Error reading project data from ${projectDir}:`, error.message);
        return null;
    }
}

async function createSample() {
    try {
        const sampleSize = 10;
        let sampleContent = '# Starter Template Samples\n\n';

        // Process GitHub projects
        const githubDir = path.join(process.cwd(), config.output.github, 'details');
        const githubProjects = await fs.readdir(githubDir);
        const selectedGithub = await getRandomItems(githubProjects, sampleSize);

        sampleContent += '## GitHub Templates\n\n';
        for (const project of selectedGithub) {
            const projectDir = path.join(githubDir, project);
            const data = await readProjectData(projectDir);
            if (data) {
                sampleContent += `### ${data.metadata.name}\n\n`;
                sampleContent += '#### Metadata\n```json\n';
                sampleContent += JSON.stringify(data.metadata, null, 2);
                sampleContent += '\n```\n\n';
                sampleContent += '#### README\n';
                sampleContent += data.readme;
                sampleContent += '\n\n---\n\n';
            }
        }

        // Process NPM projects
        const npmDir = path.join(process.cwd(), config.output.npm, 'details');
        const npmProjects = await fs.readdir(npmDir);
        const selectedNpm = await getRandomItems(npmProjects, sampleSize);

        sampleContent += '## NPM Packages\n\n';
        for (const project of selectedNpm) {
            const projectDir = path.join(npmDir, project);
            const data = await readProjectData(projectDir);
            if (data) {
                sampleContent += `### ${data.metadata.name}\n\n`;
                sampleContent += '#### Metadata\n```json\n';
                sampleContent += JSON.stringify(data.metadata, null, 2);
                sampleContent += '\n```\n\n';
                sampleContent += '#### README\n';
                sampleContent += data.readme;
                sampleContent += '\n\n---\n\n';
            }
        }

        // Write the sample file
        await fs.writeFile('sample.md', sampleContent);
        console.log('Sample file created successfully!');
        
        // Log selected projects for reference
        console.log('\nSelected GitHub projects:', selectedGithub);
        console.log('Selected NPM packages:', selectedNpm);

    } catch (error) {
        console.error('Error creating sample:', error.message);
    }
}

createSample(); 
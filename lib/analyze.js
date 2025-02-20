import fs from 'fs/promises';
import path from 'path';
import OpenAI from 'openai';
import config from './config.js';
import dotenv from 'dotenv';
import { formatDuration } from './common.js';

// Load environment variables
dotenv.config();

// Initialize OpenAI
const openai = new OpenAI(process.env.OPENAI_API_KEY);

async function loadOntology() {
  const ontologyPath = path.join(process.cwd(), 'research', 'ontology.json');
  return JSON.parse(await fs.readFile(ontologyPath, 'utf8'));
}

async function analyzeWithLLM(data) {
  const prompt = `
Analyze this starter template and extract information according to the ontology structure below.
Focus on objective, detectable features and characteristics.
You must respond with valid JSON matching the ontology structure exactly.
Do not include markdown code blocks or any other formatting - just pure JSON.

Template Data:
${JSON.stringify(data, null, 2)}

Ontology Structure:
${JSON.stringify(await loadOntology(), null, 2)}
`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: [{
        role: "system",
        content: "You are an expert at analyzing software starter templates and extracting structured information. You must respond with valid JSON matching the provided ontology structure exactly. Do not include markdown code blocks or any other formatting."
      }, {
        role: "user",
        content: prompt
      }]
    });

    const response = completion.choices[0].message.content;
    try {
      const parsed = JSON.parse(response);
      return parsed;
    } catch (parseError) {
      console.error('JSON Parse Error:', parseError.message);
      await logFailure(analysisDir, source, project, `JSON Parse Error: ${parseError.message}`);
      return null;
    }
  } catch (error) {
    console.error(`LLM API Error for ${data.name}:`, error.message);
    return null;
  }
}

async function buildSearchIndex(analyses) {
  const index = {
    projects: [],
    techRelationships: {} // We could build this separately with another LLM pass
  };

  for (const analysis of analyses) {
    if (!analysis) continue;

    index.projects.push({
      id: `${analysis.metadata.source}/${analysis.metadata.name}`,
      technologies: analysis.technologies,
      features: analysis.features,
      qualityScore: calculateQualityScore(analysis.quality),
      lastUpdate: analysis.metadata.lastUpdate,
      stars: analysis.metadata.stars
    });
  }

  return index;
}

function calculateQualityScore(quality) {
  const maintenance = (quality.maintenance.commitFrequency + quality.maintenance.issueResponseTime) / 2;
  const docs = (quality.documentation.readmeCompleteness + 
                quality.documentation.setupInstructions + 
                quality.documentation.exampleCoverage) / 3;
  return (maintenance + docs) / 2;
}

async function logFailure(analysisDir, source, project, error) {
  const failuresPath = path.join(analysisDir, 'failures.log');
  const entry = `${source}/${project}: ${error}\n`;
  await fs.appendFile(failuresPath, entry);
}

async function processBatch(projects, source, analysisDir, sourceDir, force, startIndex, total) {
  const analyses = await Promise.all(projects.map(async (project, batchIndex) => {
    const projectDir = path.join(sourceDir, project);
    const analysisPath = path.join(analysisDir, source, project, 'analysis.json');
    const globalIndex = startIndex + batchIndex + 1;
    
    try {
      if (!force && await fs.access(analysisPath).then(() => true).catch(() => false)) {
        console.log(`[${source} ${globalIndex}/${total}] Using existing analysis for ${project}`);
        return JSON.parse(await fs.readFile(analysisPath, 'utf8'));
      }

      const metadata = JSON.parse(await fs.readFile(path.join(projectDir, 'metadata.json'), 'utf8'));
      const readme = await fs.readFile(path.join(projectDir, 'README.md'), 'utf8');
      
      const analysis = await analyzeWithLLM({ ...metadata, readme });
      if (analysis) {
        await fs.mkdir(path.dirname(analysisPath), { recursive: true });
        await fs.writeFile(analysisPath, JSON.stringify(analysis, null, 2));
        console.log(`[${source} ${globalIndex}/${total}] Analysis saved for ${project}`);
        return analysis;
      } else {
        console.error(`[${source} ${globalIndex}/${total}] Analysis failed for ${project}`);
        await logFailure(analysisDir, source, project, 'LLM analysis returned null');
        return null;
      }
    } catch (error) {
      console.error(`[${source} ${globalIndex}/${total}] Analysis error for ${project}:`, error.message);
      await logFailure(analysisDir, source, project, error.message);
      return null;
    }
  }));

  return analyses.filter(Boolean);
}

export async function analyzeStarters(options = {}) {
  const { 
    force = false, 
    batchSize = config.analysis?.batchSize || 5  // Use config or default to 5
  } = options;
  const startTime = Date.now();
  
  try {
    const analysisDir = path.join(process.cwd(), 'analyzed-starters');
    await fs.mkdir(analysisDir, { recursive: true });
    
    if (force) {
      await fs.writeFile(path.join(analysisDir, 'failures.log'), '');
    }

    // Process GitHub starters
    const githubDir = path.join(process.cwd(), config.output.github, 'details');
    const githubProjects = await fs.readdir(githubDir);
    console.log(`\nAnalyzing ${githubProjects.length} GitHub starters...`);

    const githubAnalyses = [];
    for (let i = 0; i < githubProjects.length; i += batchSize) {
      const batch = githubProjects.slice(i, i + batchSize);
      const batchResults = await processBatch(batch, 'github', analysisDir, githubDir, force, i, githubProjects.length);
      githubAnalyses.push(...batchResults);
    }

    // Process NPM starters
    const npmDir = path.join(process.cwd(), config.output.npm, 'details');
    const npmProjects = await fs.readdir(npmDir);
    console.log(`\nAnalyzing ${npmProjects.length} NPM starters...`);

    const npmAnalyses = [];
    for (let i = 0; i < npmProjects.length; i += batchSize) {
      const batch = npmProjects.slice(i, i + batchSize);
      const batchResults = await processBatch(batch, 'npm', analysisDir, npmDir, force, i, npmProjects.length);
      npmAnalyses.push(...batchResults);
    }

    // Build and save search index
    const allAnalyses = [...githubAnalyses, ...npmAnalyses];
    const searchIndex = await buildSearchIndex(allAnalyses);
    await fs.writeFile(
      path.join(analysisDir, 'index.json'),
      JSON.stringify(searchIndex, null, 2)
    );

    const duration = Date.now() - startTime;
    console.log('\nAnalysis complete!');
    console.log(`Time taken: ${formatDuration(duration)}`);
    console.log(`Processed ${allAnalyses.length} starters (${githubAnalyses.length} GitHub, ${npmAnalyses.length} NPM)`);
    console.log(`Search index created with ${searchIndex.projects.length} entries`);
    console.log(`Average time per starter: ${formatDuration(duration / allAnalyses.length)}`);

  } catch (error) {
    const duration = Date.now() - startTime;
    console.error(`\nAnalysis failed after ${formatDuration(duration)}:`, error);
    process.exit(1);
  }
} 
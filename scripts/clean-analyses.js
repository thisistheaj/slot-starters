import fs from 'fs/promises';
import path from 'path';

function cleanAnalysis(analysis) {
  return {
    metadata: {
      name: analysis.metadata?.name,
      source: analysis.metadata?.source?.type || analysis.metadata?.source,
      url: analysis.metadata?.url,
      stars: analysis.metadata?.stars,
      forks: analysis.metadata?.forks,
      lastUpdate: analysis.metadata?.lastUpdate
    },
    
    // Only keep string values in technologies
    technologies: Array.isArray(analysis.technologies) 
      ? analysis.technologies.filter(t => typeof t === 'string')
      : [],
    
    // Only keep string values in purposes
    purposes: Object.entries(analysis.purposes || {})
      .filter(([_, value]) => typeof value === 'string')
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {}),
    
    // Keep features as is
    features: analysis.features,
    
    // Clean quality metrics
    quality: {
      maintenance: {
        commitFrequency: cleanQualityMetric(analysis.quality?.maintenance?.commitFrequency),
        issueResponseTime: cleanQualityMetric(analysis.quality?.maintenance?.issueResponseTime)
      },
      documentation: {
        readmeCompleteness: cleanQualityMetric(analysis.quality?.documentation?.readmeCompleteness),
        setupInstructions: cleanQualityMetric(analysis.quality?.documentation?.setupInstructions),
        exampleCoverage: cleanQualityMetric(analysis.quality?.documentation?.exampleCoverage)
      }
    },
    
    // Keep other as is
    other: analysis.other
  };
}

function cleanQualityMetric(metric) {
  if (!metric || typeof metric !== 'object') return metric;
  
  // If we have value, scale, or assessment, use that
  if (metric.value !== undefined) return metric.value;
  if (metric.scale !== undefined) return metric.scale;
  if (metric.assessment !== undefined) return metric.assessment;
  
  // Handle range in different formats
  if (metric.type && metric.range) {
    // If range is already a number, use it
    if (typeof metric.range === 'number') {
      return metric.range;
    }
    
    // If range is an array, use max
    if (Array.isArray(metric.range)) {
      return Math.max(...metric.range);
    }
    
    // If range is a string, try to split it
    if (typeof metric.range === 'string') {
      const parts = metric.range.split('-');
      return Math.max(...parts.map(n => parseInt(n, 10)));
    }
  }
  
  return metric;
}

async function main() {
  const analysisDir = path.join(process.cwd(), 'analyzed-starters');
  const cleanedDir = path.join(process.cwd(), 'cleaned-starters');
  const sources = ['github', 'npm'];
  const ignoreList = ['.DS_Store', 'bad_gens'];

  await fs.mkdir(cleanedDir, { recursive: true });

  for (const source of sources) {
    const sourceDir = path.join(analysisDir, source);
    
    const entries = await fs.readdir(sourceDir, { withFileTypes: true });
    const projects = entries
      .filter(entry => entry.isDirectory() && !ignoreList.includes(entry.name))
      .map(entry => entry.name);
    
    for (const project of projects) {
      try {
        const analysisPath = path.join(sourceDir, project, 'analysis.json');
        
        try {
          await fs.access(analysisPath);
        } catch {
          console.log(`Skipping ${project}: No analysis file found`);
          continue;
        }

        const analysis = JSON.parse(await fs.readFile(analysisPath, 'utf8'));
        const cleanedAnalysis = cleanAnalysis(analysis);
        
        // Save directly to cleaned directory
        const outputPath = path.join(cleanedDir, `${project}.json`);
        await fs.writeFile(outputPath, JSON.stringify(cleanedAnalysis, null, 2));
      } catch (err) {
        console.error(`Error processing ${project}: ${err.message}`);
        continue;
      }
    }
  }

  console.log('Cleaning complete!');
}

main(); 
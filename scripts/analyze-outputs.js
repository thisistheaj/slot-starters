import fs from 'fs/promises';
import path from 'path';

function addToStructure(structure, pathParts, count) {
  let current = structure;
  
  // Add count to the current level
  const key = pathParts[0];
  if (!current[key]) current[key] = count;
  
  // Create nested structure
  if (pathParts.length > 1) {
    if (!current[key] || typeof current[key] !== 'object') {
      current[key] = { _count: current[key] };
    }
    current = current[key];
    addToStructure(current, pathParts.slice(1), count);
  }
}

async function analyzeStructure(obj, counts = {}, prefix = '') {
  if (!obj || typeof obj !== 'object') return counts;

  // Handle arrays
  if (Array.isArray(obj)) {
    obj.forEach(item => analyzeStructure(item, counts, prefix));
    return counts;
  }

  // Count each property with its full path
  for (const [key, value] of Object.entries(obj)) {
    const fullPath = prefix ? `${prefix}.${key}` : key;
    if (!counts[fullPath]) counts[fullPath] = 0;
    counts[fullPath]++;

    // Recurse into objects
    if (value && typeof value === 'object') {
      analyzeStructure(value, counts, fullPath);
    }
  }

  return counts;
}

async function main() {
  const analysisDir = path.join(process.cwd(), 'analyzed-starters');
  const sources = ['github', 'npm'];
  const counts = {};

  for (const source of sources) {
    const sourceDir = path.join(analysisDir, source);
    const projects = await fs.readdir(sourceDir);

    for (const project of projects) {
      try {
        const analysisPath = path.join(sourceDir, project, 'analysis.json');
        const analysis = JSON.parse(await fs.readFile(analysisPath, 'utf8'));
        analyzeStructure(analysis, counts);
      } catch (err) {
        // Skip files that can't be read/parsed
        continue;
      }
    }
  }

  // Convert flat paths to nested structure
  const structure = {};
  for (const [path, count] of Object.entries(counts)) {
    addToStructure(structure, path.split('.'), count);
  }

  console.log(JSON.stringify(structure, null, 2));
}

main(); 
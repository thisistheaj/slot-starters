import fs from 'fs/promises';
import path from 'path';

function calculateScore(analysis) {
  if (!analysis.quality) return 0;
  
  const maintenance = (
    (analysis.quality.maintenance?.commitFrequency || 0) + 
    (analysis.quality.maintenance?.issueResponseTime || 0)
  ) / 2;
  
  const docs = (
    (analysis.quality.documentation?.readmeCompleteness || 0) + 
    (analysis.quality.documentation?.setupInstructions || 0) + 
    (analysis.quality.documentation?.exampleCoverage || 0)
  ) / 3;
  
  return (maintenance + docs) / 2;
}

function countMatches(analysis, query) {
  const { technologies, purposes, features } = query;
  let matches = 0;
  let total = 0;

  // Count technology matches
  if (technologies?.length > 0) {
    total += technologies.length;
    technologies.forEach(searchTech => {
      if (analysis.technologies.some(tech => 
        tech.toLowerCase().includes(searchTech.toLowerCase())
      )) {
        matches++;
      }
    });
  }

  // Count purpose matches
  if (purposes?.length > 0) {
    total += purposes.length;
    purposes.forEach(purposePair => {
      const [searchKey, searchValue] = purposePair.split(':');
      if (Object.entries(analysis.purposes).some(([key, value]) => {
        const keyMatches = key.toLowerCase().includes(searchKey.toLowerCase());
        const valueMatches = value.toLowerCase().includes(searchValue.toLowerCase());
        return keyMatches && valueMatches;
      })) {
        matches++;
      }
    });
  }

  // Count feature matches
  if (features?.length > 0) {
    total += features.length;
    features.forEach(feature => {
      const parts = feature.split('.');
      let current = analysis.features;
      for (const part of parts) {
        if (!current || !current[part]) return;
        current = current[part];
      }
      if (current === true) matches++;
    });
  }

  return {
    matches,
    total,
    score: total > 0 ? matches / total : 0
  };
}

async function searchStarters(query = {}, limit = 10) {
  const cleanedDir = path.join(process.cwd(), 'cleaned-starters');
  const files = await fs.readdir(cleanedDir);

  const results = [];
  
  for (const file of files) {
    if (!file.endsWith('.json')) continue;
    
    try {
      const analysis = JSON.parse(
        await fs.readFile(path.join(cleanedDir, file), 'utf8')
      );
      
      const matchInfo = countMatches(analysis, query);
      if (matchInfo.matches > 0) {
        results.push({
          ...analysis,
          _matches: matchInfo.matches,
          _total: matchInfo.total,
          _matchScore: matchInfo.score,
          _qualityScore: calculateScore(analysis)
        });
      }
    } catch (err) {
      console.error(`Error processing ${file}: ${err.message}`);
    }
  }

  // Group by number of matches
  const grouped = results.reduce((acc, result) => {
    const matches = result._matches;
    if (!acc[matches]) acc[matches] = [];
    acc[matches].push(result);
    return acc;
  }, {});

  // Sort each group by quality score
  Object.values(grouped).forEach(group => {
    group.sort((a, b) => b._qualityScore - a._qualityScore);
  });

  // Take results in order of matches, then quality
  const ordered = Object.entries(grouped)
    .sort(([matchesA], [matchesB]) => Number(matchesB) - Number(matchesA))
    .flatMap(([_, group]) => group);

  return ordered.slice(0, limit).map(result => ({
    ...result,
    _score: result._qualityScore,
    _matchedCount: `${result._matches}/${result._total}`
  }));
}

export { searchStarters }; 
import fs from 'fs/promises';
import path from 'path';

async function countEmptyTech(source) {
  const analysisDir = path.join(process.cwd(), 'analyzed-starters', source);
  const projects = await fs.readdir(analysisDir);
  
  let emptyCount = 0;
  let totalCount = 0;
  let firstEmpty = null;

  for (const project of projects) {
    try {
      const analysisPath = path.join(analysisDir, project, 'analysis.json');
      const analysis = JSON.parse(await fs.readFile(analysisPath, 'utf8'));
      
      totalCount++;
      
      const tech = analysis.technologies;
      if (!tech || (Array.isArray(tech) && tech.length === 0) || 
          (typeof tech === 'object' && Object.keys(tech).length === 0)) {
        emptyCount++;
        if (!firstEmpty) {
          firstEmpty = project;
        }
      }
    } catch (err) {
      console.error(`[${source}] Error reading ${project}: ${err.message}`);
    }
  }

  console.log(`\n${source} Results:`);
  console.log(`Total projects: ${totalCount}`);
  console.log(`Empty technologies: ${emptyCount}`);
  console.log(`Percentage empty: ${((emptyCount/totalCount) * 100).toFixed(1)}%`);
  console.log(`First empty: ${firstEmpty}`);
  return { total: totalCount, empty: emptyCount };
}

async function main() {
  const github = await countEmptyTech('github');
  console.log('\n-------------------\n');
  const npm = await countEmptyTech('npm');
  
  console.log('\nOverall:');
  const total = github.total + npm.total;
  const empty = github.empty + npm.empty;
  console.log(`Total projects: ${total}`);
  console.log(`Empty technologies: ${empty}`);
  console.log(`Percentage empty: ${((empty/total) * 100).toFixed(1)}%`);
}

main(); 
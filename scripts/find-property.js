import fs from 'fs/promises';
import path from 'path';

async function findDocumentWithProperty(propertyPath) {
  const analysisDir = path.join(process.cwd(), 'analyzed-starters');
  const sources = ['github', 'npm'];

  for (const source of sources) {
    const sourceDir = path.join(analysisDir, source);
    const projects = await fs.readdir(sourceDir);

    for (const project of projects) {
      try {
        const analysisPath = path.join(sourceDir, project, 'analysis.json');
        const analysis = JSON.parse(await fs.readFile(analysisPath, 'utf8'));
        
        // Check if property exists by traversing the path
        let current = analysis;
        const parts = propertyPath.split('.');
        for (const part of parts) {
          if (!current || !current[part]) {
            current = null;
            break;
          }
          current = current[part];
        }

        if (current !== null) {
          console.log(`Found in ${source}/${project}`);
          console.log('Full document:');
          console.log(JSON.stringify(analysis, null, 2));
          // return;
        }
      } catch (err) {
        continue;
      }
    }
  }
  
  console.log('No document found with that property');
}

findDocumentWithProperty('metadata.source.values'); 
// findDocumentWithProperty('quality.documentation.readmeCompleteness.scale'); 
// findDocumentWithProperty('quality.maintenance.commitFrequency.scale'); 
// findDocumentWithProperty('quality.maintenance.commitFrequency.assessment'); 
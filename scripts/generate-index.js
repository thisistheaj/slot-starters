import fs from 'fs';
import path from 'path';

const targetDir = './importable-starters';
const indexPath = path.join(targetDir, 'index.js');

// Read all files from target directory
const files = fs.readdirSync(targetDir);

// Track used names to avoid duplicates
const usedNames = new Set();

// Generate export statements with deduplication
const exports = files
  .filter(file => file.endsWith('.js') && file !== 'index.js')
  .map(file => {
    let baseName = path.basename(file, '.js')
      .replace(/[^a-zA-Z0-9]/g, '_') // Replace non-alphanumeric chars with underscore
      .replace(/^(\d)/, '_$1'); // Prefix with underscore if starts with number

    // Handle duplicates by appending a number
    let uniqueName = baseName;
    let counter = 1;
    while (usedNames.has(uniqueName)) {
      uniqueName = `${baseName}_${counter}`;
      counter++;
    }
    usedNames.add(uniqueName);

    return {
      name: uniqueName,
      file: file,
      export: `export { default as ${uniqueName} } from './${file}';`
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically

// Write index.js with sorted, unique exports
const exportContent = exports.map(e => e.export).join('\n');
fs.writeFileSync(indexPath, exportContent + '\n');

// Log summary
console.log(`Generated index.js with ${exports.length} unique exports`);
if (exports.length !== files.length - 1) { // -1 for index.js
  console.log('Deduplication occurred:');
  const duplicateCount = files.length - 1 - exports.length;
  console.log(`- Handled ${duplicateCount} duplicate name(s)`);
} 
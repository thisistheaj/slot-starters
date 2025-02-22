import fs from 'fs';
import path from 'path';

const sourceDir = './cleaned-starters';
const targetDir = './importable-starters';

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// Read all files from source directory
const files = fs.readdirSync(sourceDir);

for (const file of files) {
    if (file.endsWith('.json')) {
        const sourcePath = path.join(sourceDir, file);
        const targetPath = path.join(targetDir, file.replace('.json', '.js'));
        
        // Read JSON content
        const jsonContent = fs.readFileSync(sourcePath, 'utf8');
        
        // Create JS module content
        const jsContent = `export default ${jsonContent};`;
        
        // Write JS file
        fs.writeFileSync(targetPath, jsContent);
        
        console.log(`Converted ${file} to ${path.basename(targetPath)}`);
    }
}

console.log('\nConversion complete!'); 
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const configPath = join(__dirname, '..', 'slot.config.json');
const config = JSON.parse(readFileSync(configPath, 'utf8'));

export default config; 
import { formatSearchResults } from '../scripts/search.js';

export const tools = {
  search_starters: {
    description: 'Search analyzed starter templates',
    handler: async ({ technologies, purposes, features, limit }) => {
      const results = await formatSearchResults({
        technologies,
        purposes,
        features,
        limit
      });
      const output = results.map(result => {
        const purposeLines = Object.entries(result.purposes)
          .map(([key, value]) => `  ${key}: ${value}`)
          .join('\n');

        return `
${result.metadata.name}
Matches: ${result._matchedCount} (Quality Score: ${result._score.toFixed(2)})
URL: ${result.metadata.url}
Technologies: ${result.technologies.join(', ')}
Purposes:
${purposeLines}`;
      }).join('\n');
      return `Search Results:\n\n${output}`
    },
    schema: {
      type: 'object',
      properties: {
        technologies: { type: 'array', items: { type: 'string' } },
        purposes: { type: 'array', items: { type: 'string' } },
        features: { type: 'array', items: { type: 'string' } },
        limit: { type: 'integer', description: 'Maximum results' }
      }
    }
  }
}; 
import { scrapeGithubWithConfig } from '../lib/github.js';
import { scrapeNpmWithConfig } from '../lib/npm.js';
import { analyzeStarters } from '../lib/analyze.js';
import { formatSearchResults } from '../scripts/search.js';

export const tools = {
  scrape_github: {
    description: 'Scrape GitHub starter templates with configurable filters',
    handler: async ({ token, stars, topics, languages, batch, delay, rph, limit }) => {
      const results = await scrapeGithubWithConfig(token, {
        stars,
        topics,
        languages,
        batch,
        delay,
        rph,
        limit
      });
      return { results };
    },
    schema: {
      type: 'object',
      properties: {
        token: { type: 'string', description: 'GitHub API token' },
        stars: { type: 'integer', description: 'Minimum stars' },
        topics: { type: 'array', items: { type: 'string' } },
        languages: { type: 'array', items: { type: 'string' } },
        batch: { type: 'integer', description: 'Batch size' },
        delay: { type: 'integer', description: 'Delay between requests' },
        rph: { type: 'integer', description: 'Requests per hour limit' },
        limit: { type: 'integer', description: 'Maximum results' }
      },
      required: ['token']
    }
  },
  
  scrape_npm: {
    description: 'Scrape NPM starter packages with configurable filters',
    handler: async ({ keywords, batch, delay, rph, limit }) => {
      const results = await scrapeNpmWithConfig({
        keywords,
        batch,
        delay,
        rph,
        limit
      });
      return { results };
    },
    schema: {
      type: 'object',
      properties: {
        keywords: { type: 'array', items: { type: 'string' } },
        batch: { type: 'integer', description: 'Batch size' },
        delay: { type: 'integer', description: 'Delay between requests' },
        rph: { type: 'integer', description: 'Requests per hour limit' },
        limit: { type: 'integer', description: 'Maximum results' }
      }
    }
  },

  analyze: {
    description: 'Analyze starter templates using LLM',
    handler: async ({ force }) => {
      const results = await analyzeStarters({ force });
      return { results };
    },
    schema: {
      type: 'object',
      properties: {
        force: { type: 'boolean', description: 'Force reanalysis of all templates' }
      }
    }
  },

  search_starters: {
    description: 'Search analyzed starter templates',
    handler: async ({ technologies, purposes, features, limit }) => {
      const results = await formatSearchResults({
        technologies,
        purposes,
        features,
        limit
      });
      return { results };
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
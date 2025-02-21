# MCP Server Implementation Plan

## 1. Server Setup

### Basic Structure
```javascript
// server.js
import { MCP } from 'mcp-js-server';
import { tools } from './mcp/tools.js';
import { prompts } from './mcp/prompts.js';
import { resources } from './mcp/resources.js';

const infos = {
    name: 'slot-starters-mcp',
    version: '1.0.0'
};

const server = new MCP(infos, prompts, resources, tools);
```

### Tool Definitions
```javascript
// mcp/tools.js
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

  search: {
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
```

### Prompt Definitions
```javascript
// mcp/prompts.js
export const prompts = {
  suggest_template: {
    description: "Get personalized starter template suggestions",
    arguments: ["requirements", "experience_level", "project_type"],
    messages: [
      {
        role: "system",
        content: {
          type: "text",
          text: "You are a helpful assistant that suggests starter templates based on user requirements."
        }
      },
      {
        role: "user",
        content: {
          type: "text",
          text: "I need a template for {{project_type}}. I'm a {{experience_level}} developer. Requirements: {{requirements}}"
        }
      }
    ]
  },
  
  compare_templates: {
    description: "Compare multiple starter templates",
    arguments: ["template_ids"],
    messages: [
      {
        role: "system",
        content: {
          type: "text",
          text: "You will compare the following starter templates and highlight their differences."
        }
      }
    ]
  }
};
```

## 2. Implementation Tasks

### Phase 1: Core Implementation
- [ ] Initialize MCP server project structure
- [ ] Set up server.js with basic configuration
- [ ] Port GitHub scraper to MCP tool format
- [ ] Port NPM scraper to MCP tool format
- [ ] Port analyzer to MCP tool format
- [ ] Port search functionality to MCP tool format
- [ ] Add basic error handling and validation
- [ ] Implement rate limiting at tool level

### Phase 2: Prompt Implementation
- [ ] Implement template suggestion prompt
- [ ] Implement template comparison prompt
- [ ] Add context management
- [ ] Add template filtering

## 3. Design Decisions

### Tool Design
- Each CLI command becomes an MCP tool with handler function
- Tools maintain same parameter structure as CLI
- Tools return structured JSON responses
- Progress reporting via streaming responses
- Rate limiting handled at tool level

### Prompt Design
- Focus on template selection assistance
- Support for comparison workflows
- Context-aware suggestions
- Customizable for different use cases

### Error Handling
- Detailed error messages
- Graceful degradation
- Rate limit awareness
- Retry mechanisms for transient failures

### Security
- Token validation
- Rate limiting per client
- Input sanitization
- Secure error messages

### Improvements
- [ ] Caching layer
- [ ] Better progress reporting
- [ ] Enhanced error handling
- [ ] Performance optimizations

## 4. Future Enhancements

### Additional Tools
- [ ] Template validation tool
- [ ] Dependency analysis tool
- [ ] Template generation tool
- [ ] Custom template creation

### Additional Prompts
- [ ] Setup guide generator
- [ ] Migration assistant
- [ ] Best practices advisor
- [ ] Integration helper

### Improvements
- [ ] Caching layer
- [ ] Better progress reporting
- [ ] Enhanced error handling
- [ ] Performance optimizations
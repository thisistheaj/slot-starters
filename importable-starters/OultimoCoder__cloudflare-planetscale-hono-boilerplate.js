export default {
  "metadata": {
    "name": "cloudflare-planetscale-hono-boilerplate",
    "source": "github",
    "url": "https://github.com/OultimoCoder/cloudflare-planetscale-hono-boilerplate",
    "stars": 195,
    "forks": 23,
    "lastUpdate": "2025-02-17"
  },
  "technologies": [
    "TypeScript",
    "PlanetScale",
    "Hono",
    "Cloudflare",
    "JWT",
    "OAuth2",
    "Amazon SES",
    "Kysely",
    "Zod",
    "Sentry",
    "Vitest",
    "Husky",
    "ESLint",
    "Prettier"
  ],
  "purposes": {
    "orm": "Kysely",
    "database": "PlanetScale",
    "framework": "Hono",
    "deployment": "Cloudflare",
    "authentication": "JWT",
    "validation": "Zod",
    "errorHandling": "Hono",
    "email": "Amazon SES",
    "logging": "Sentry",
    "testing": "Vitest",
    "linting": "ESLint",
    "formatting": "Prettier"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": true,
      "formatting": true
    },
    "testing": {
      "unitTests": true,
      "integrationTests": true,
      "e2eTests": false,
      "cicd": false
    },
    "deployment": {
      "envConfig": false,
      "dockerfile": false,
      "infraAsCode": false,
      "productionOptimized": true
    },
    "security": {
      "dependencyScanning": false,
      "secretManagement": false,
      "authentication": true
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 5,
      "issueResponseTime": 5
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 5
    }
  },
  "other": {}
};
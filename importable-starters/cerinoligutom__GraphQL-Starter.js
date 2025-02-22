export default {
  "metadata": {
    "name": "GraphQL-Starter",
    "source": "github",
    "url": "https://github.com/cerinoligutom/GraphQL-Starter",
    "stars": 105,
    "forks": 24,
    "lastUpdate": "2025-02-06"
  },
  "technologies": [
    "TypeScript",
    "Node Express",
    "Apollo GraphQL",
    "Docker",
    "ESM",
    "SuperTokens",
    "PostgreSQL",
    "pgAdmin",
    "Redis",
    "RedisCommander",
    "Husky",
    "Lint-Staged",
    "Prettier",
    "Zod",
    "Kysely",
    "Prisma",
    "Facebook Dataloader"
  ],
  "purposes": {
    "api": "Node Express + Apollo GraphQL",
    "authentication": "SuperTokens",
    "database": "PostgreSQL",
    "query_building": "Kysely",
    "orm": "Prisma",
    "schema_validation": "Zod",
    "caching": "Redis",
    "code_formatting": "Prettier",
    "pre_commit_hooks": "Husky, Lint-Staged"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": true,
      "formatting": true
    },
    "testing": {
      "unitTests": false,
      "integrationTests": false,
      "e2eTests": false,
      "cicd": false
    },
    "deployment": {
      "envConfig": true,
      "dockerfile": true,
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
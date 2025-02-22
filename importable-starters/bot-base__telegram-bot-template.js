export default {
  "metadata": {
    "name": "telegram-bot-template",
    "source": "github",
    "url": "https://github.com/bot-base/telegram-bot-template",
    "stars": 353,
    "forks": 53,
    "lastUpdate": "2025-02-12"
  },
  "technologies": [
    "TypeScript",
    "grammY",
    "pino",
    "hono",
    "docker",
    "docker-compose",
    "prisma",
    "vercel",
    "bun"
  ],
  "purposes": {
    "botFramework": "grammY",
    "logging": "pino",
    "server": "hono",
    "orm": "prisma",
    "runtime": "bun"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": true,
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
      "authentication": false
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
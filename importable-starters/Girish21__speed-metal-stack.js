export default {
  "metadata": {
    "name": "speed-metal-stack",
    "source": "github",
    "url": "https://github.com/Girish21/speed-metal-stack",
    "stars": 166,
    "forks": 16,
    "lastUpdate": "2025-02-12"
  },
  "technologies": [
    "Remix",
    "MDX",
    "SQLite",
    "TypeScript",
    "Tailwind",
    "ESLint",
    "Prettier",
    "Cypress",
    "Jest",
    "Prisma"
  ],
  "purposes": {
    "framework": "Remix",
    "styling": "Tailwind",
    "database": "SQLite",
    "orm": "Prisma",
    "testing": "Jest, Cypress",
    "linting": "ESLint",
    "formatting": "Prettier",
    "typeChecking": "TypeScript"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": true,
      "debugConfig": true,
      "devContainer": false,
      "typeChecking": true,
      "linting": true,
      "formatting": true
    },
    "testing": {
      "unitTests": true,
      "integrationTests": false,
      "e2eTests": true,
      "cicd": true
    },
    "deployment": {
      "envConfig": true,
      "dockerfile": false,
      "infraAsCode": true,
      "productionOptimized": false
    },
    "security": {
      "dependencyScanning": false,
      "secretManagement": true,
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
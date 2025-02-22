export default {
  "metadata": {
    "name": "blues-stack",
    "source": "enum",
    "url": "https://github.com/remix-run/blues-stack",
    "stars": 978,
    "forks": 234,
    "lastUpdate": "2025-02-05T21:40:32Z"
  },
  "technologies": [
    "typescript",
    "docker",
    "postgres",
    "prisma",
    "tailwind",
    "cypress",
    "vitest",
    "eslint",
    "prettier",
    "remix"
  ],
  "purposes": {
    "ui": "remix",
    "styling": "tailwind",
    "database": "postgres",
    "orm": "prisma",
    "testing": "cypress",
    "linting": "eslint",
    "formatting": "prettier",
    "staticTypes": "typescript",
    "automation": "github actions"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": true,
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
      "dockerfile": true,
      "infraAsCode": true,
      "productionOptimized": true
    },
    "security": {
      "dependencyScanning": false,
      "secretManagement": true,
      "authentication": true
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 4,
      "issueResponseTime": 3
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 4
    }
  },
  "other": {}
};
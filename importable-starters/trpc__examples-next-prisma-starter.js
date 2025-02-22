export default {
  "metadata": {
    "name": "examples-next-prisma-starter",
    "source": "enum",
    "url": "https://github.com/trpc/examples-next-prisma-starter",
    "stars": 736,
    "forks": 104,
    "lastUpdate": "2025-02-18T14:35:42Z"
  },
  "technologies": [
    "typescript",
    "nextjs",
    "prisma",
    "trpc",
    "vscode",
    "eslint",
    "prettier",
    "playwright",
    "postgres"
  ],
  "purposes": {
    "ui": "react",
    "database": "postgres",
    "orm": "prisma",
    "api": "trpc",
    "testing": "playwright",
    "linting": "eslint",
    "formatting": "prettier"
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
      "secretManagement": false,
      "authentication": false
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 3,
      "issueResponseTime": 3
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 5
    }
  },
  "other": {}
};
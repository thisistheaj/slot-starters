export default {
  "metadata": {
    "name": "clean-architecture-api-boilerplate",
    "source": "github",
    "url": "https://github.com/luizomf/clean-architecture-api-boilerplate",
    "stars": 234,
    "forks": 48,
    "lastUpdate": "2025-02-06T11:43:42Z"
  },
  "technologies": [
    "typescript",
    "express",
    "jest",
    "knex"
  ],
  "purposes": {
    "routing": "express",
    "testing": "jest",
    "database": "knex"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": true,
      "formatting": false
    },
    "testing": {
      "unitTests": true,
      "integrationTests": false,
      "e2eTests": false,
      "cicd": false
    },
    "deployment": {
      "envConfig": false,
      "dockerfile": false,
      "infraAsCode": false,
      "productionOptimized": false
    },
    "security": {
      "dependencyScanning": false,
      "secretManagement": false,
      "authentication": true
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 3,
      "issueResponseTime": 4
    },
    "documentation": {
      "readmeCompleteness": 4,
      "setupInstructions": 3,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
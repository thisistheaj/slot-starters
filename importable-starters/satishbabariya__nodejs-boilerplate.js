export default {
  "metadata": {
    "name": "nodejs-boilerplate",
    "source": "github",
    "url": "https://github.com/satishbabariya/nodejs-boilerplate",
    "stars": 397,
    "forks": 60,
    "lastUpdate": "2025-02-07T13:32:35Z"
  },
  "technologies": [
    "typescript",
    "express",
    "typeorm",
    "typedi",
    "mongodb",
    "mysql",
    "postgresql",
    "nodejs"
  ],
  "purposes": {
    "orm": "typeorm",
    "framework": "express",
    "dependencyInjection": "typedi",
    "database": "mongodb, mysql, postgresql"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": false,
      "formatting": false
    },
    "testing": {
      "unitTests": false,
      "integrationTests": false,
      "e2eTests": false,
      "cicd": false
    },
    "deployment": {
      "envConfig": true,
      "dockerfile": false,
      "infraAsCode": false,
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
      "readmeCompleteness": 4,
      "setupInstructions": 4,
      "exampleCoverage": 2
    }
  },
  "other": {}
};
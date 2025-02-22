export default {
  "metadata": {
    "name": "bulletproof-nodejs",
    "source": "github",
    "url": "https://github.com/santiq/bulletproof-nodejs",
    "stars": 5552,
    "forks": 1154,
    "lastUpdate": "2025-02-16T20:17:11Z"
  },
  "technologies": [
    "typescript",
    "express",
    "mongodb",
    "mongoose",
    "agendajs",
    "typedi"
  ],
  "purposes": {
    "database": "mongodb",
    "orm": "mongoose",
    "server": "express"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": true,
      "typeChecking": true,
      "linting": false,
      "formatting": false
    },
    "testing": {
      "unitTests": false,
      "integrationTests": false,
      "e2eTests": false,
      "cicd": true
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
      "authentication": true
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 4,
      "issueResponseTime": 4
    },
    "documentation": {
      "readmeCompleteness": 4,
      "setupInstructions": 4,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
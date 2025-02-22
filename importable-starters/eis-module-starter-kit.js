export default {
  "metadata": {
    "name": "eis-module-starter-kit",
    "source": "npm",
    "url": "https://www.npmjs.com/package/eis-module-starter-kit",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2021-11-18"
  },
  "technologies": [
    "mongodb",
    "yarn"
  ],
  "purposes": {
    "database": "mongodb",
    "packageManager": "yarn"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": false,
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
      "commitFrequency": 1,
      "issueResponseTime": 1
    },
    "documentation": {
      "readmeCompleteness": 3,
      "setupInstructions": 3,
      "exampleCoverage": 2
    }
  }
};
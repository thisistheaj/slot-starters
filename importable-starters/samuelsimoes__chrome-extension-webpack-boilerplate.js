export default {
  "metadata": {
    "name": "chrome-extension-webpack-boilerplate",
    "source": "enum",
    "url": "https://github.com/samuelsimoes/chrome-extension-webpack-boilerplate",
    "stars": 1709,
    "forks": 347,
    "lastUpdate": "2025-02-17T05:28:17Z"
  },
  "technologies": [
    "javascript",
    "webpack"
  ],
  "purposes": {
    "bundling": "webpack"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": true,
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
      "productionOptimized": true
    },
    "security": {
      "dependencyScanning": false,
      "secretManagement": true,
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
      "exampleCoverage": 3
    }
  },
  "other": {}
};
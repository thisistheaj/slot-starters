export default {
  "metadata": {
    "name": "lsk-build",
    "source": "npm",
    "url": "https://www.npmjs.com/package/lsk-build",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2018-05-22"
  },
  "technologies": [
    "webpack",
    "javascript"
  ],
  "purposes": {
    "bundling": "webpack"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": true,
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
      "envConfig": false,
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
      "readmeCompleteness": 2,
      "setupInstructions": 2,
      "exampleCoverage": 1
    }
  },
  "other": {}
};
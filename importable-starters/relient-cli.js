export default {
  "metadata": {
    "name": "relient-cli",
    "source": "npm",
    "url": "https://www.npmjs.com/package/relient-cli",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2022-05-02"
  },
  "technologies": [
    "react",
    "webpack",
    "express"
  ],
  "purposes": {
    "ui": "react",
    "bundling": "webpack",
    "mocking": "express"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": true,
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
      "secretManagement": false,
      "authentication": false
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 2,
      "issueResponseTime": 2
    },
    "documentation": {
      "readmeCompleteness": 4,
      "setupInstructions": 4,
      "exampleCoverage": 4
    }
  },
  "other": {}
};
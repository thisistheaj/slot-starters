export default {
  "metadata": {
    "name": "FrontBook",
    "source": "enum",
    "url": "https://github.com/morkro/FrontBook",
    "stars": 100,
    "forks": 6,
    "lastUpdate": "2025-02-06T00:40:45Z"
  },
  "technologies": [
    "javascript",
    "eslint",
    "browserify",
    "babel",
    "sass"
  ],
  "purposes": {
    "bundling": "browserify",
    "linting": "eslint",
    "styling": "sass"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": false,
      "linting": true,
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
      "commitFrequency": 3,
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
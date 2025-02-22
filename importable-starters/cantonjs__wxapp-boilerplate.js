export default {
  "metadata": {
    "name": "wxapp-boilerplate",
    "source": "github",
    "url": "https://github.com/cantonjs/wxapp-boilerplate",
    "stars": 377,
    "forks": 60,
    "lastUpdate": "2025-01-10"
  },
  "technologies": [
    "webpack",
    "babel",
    "scss",
    "node_modules",
    "ES6",
    "promise",
    "lodash"
  ],
  "purposes": {
    "bundling": "webpack",
    "transpiling": "babel",
    "styling": "scss",
    "moduleManagement": "node_modules",
    "ES6Polyfills": "promise",
    "utilityLibrary": "lodash"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": false,
      "linting": true,
      "formatting": true
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
      "commitFrequency": 5,
      "issueResponseTime": 5
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 5
    }
  },
  "other": {}
};
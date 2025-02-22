export default {
  "metadata": {
    "name": "webpack-boilerplate",
    "source": "github",
    "url": "https://github.com/cvgellhorn/webpack-boilerplate",
    "stars": 444,
    "forks": 106,
    "lastUpdate": "2025-02-18"
  },
  "technologies": [
    "webpack",
    "Babel",
    "SASS",
    "lodash",
    "npm"
  ],
  "purposes": {
    "bundling": "webpack",
    "transpilation": "Babel",
    "styling": "SASS",
    "utility": "lodash"
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
export default {
  "metadata": {
    "name": "chrome-extension-webpack",
    "source": "enum",
    "url": "https://github.com/sszczep/chrome-extension-webpack",
    "stars": 294,
    "forks": 46,
    "lastUpdate": "2025-02-18T16:13:44Z"
  },
  "technologies": [
    "webpack",
    "typescript",
    "sass",
    "babel",
    "eslint",
    "prettier",
    "mocha"
  ],
  "purposes": {
    "bundling": "webpack",
    "typeChecking": "typescript",
    "styling": "sass",
    "linting": "eslint",
    "formatting": "prettier",
    "testing": "mocha"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": true,
      "formatting": true
    },
    "testing": {
      "unitTests": true,
      "integrationTests": false,
      "e2eTests": false,
      "cicd": true
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
      "commitFrequency": 4,
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
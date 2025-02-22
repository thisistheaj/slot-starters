export default {
  "metadata": {
    "name": "grumbler",
    "source": "github",
    "url": "https://github.com/krakenjs/grumbler",
    "stars": 292,
    "forks": 36,
    "lastUpdate": "2025-01-31"
  },
  "technologies": [
    "babel",
    "eslint",
    "flowtype",
    "flow-runtime",
    "karma",
    "phantomjs",
    "chrome headless",
    "mocha",
    "istanbul",
    "webpack",
    "npm",
    "travis"
  ],
  "purposes": {
    "linter": "eslint",
    "type checking": "flowtype, flow-runtime",
    "testing": "karma, mocha, phantomjs, chrome headless",
    "code coverage": "istanbul",
    "bundling": "webpack",
    "task runner": "npm",
    "ci": "travis"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": true,
      "formatting": false
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
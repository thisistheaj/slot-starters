export default {
  "metadata": {
    "name": "javascript-boilerplate",
    "source": "github",
    "url": "https://github.com/marmelab/javascript-boilerplate",
    "stars": 251,
    "forks": 54,
    "lastUpdate": "2024-04-02T09:51:50Z"
  },
  "technologies": [
    "node",
    "koa",
    "postgresql",
    "react",
    "redux",
    "webpack",
    "mocha",
    "babel",
    "pm2",
    "eslint",
    "sass"
  ],
  "purposes": {
    "ui": "react",
    "database": "postgresql",
    "testing": "mocha",
    "bundling": "webpack",
    "stateManagement": "redux",
    "transpilation": "babel"
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
      "unitTests": true,
      "integrationTests": false,
      "e2eTests": true,
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
      "authentication": true
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 1,
      "issueResponseTime": 1
    },
    "documentation": {
      "readmeCompleteness": 4,
      "setupInstructions": 4,
      "exampleCoverage": 4
    }
  },
  "other": {}
};
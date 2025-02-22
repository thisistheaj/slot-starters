export default {
  "metadata": {
    "name": "npm-module-boilerplate",
    "source": "github",
    "url": "https://github.com/flexdinesh/npm-module-boilerplate",
    "stars": 390,
    "forks": 100,
    "lastUpdate": "2024-09-13"
  },
  "technologies": [
    "JavaScript",
    "ES6",
    "Babel",
    "Mocha",
    "Istanbul",
    "ESlint",
    "Airbnb-config",
    "TravisCI"
  ],
  "purposes": {
    "programming_language": "JavaScript",
    "transpilation": "Babel",
    "testing": "Mocha with Istanbul",
    "linting": "ESlint with Airbnb-config",
    "ci": "TravisCI"
  },
  "features": {
    "development": {
      "hotReload": false,
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
      "e2eTests": false,
      "cicd": true
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
export default {
  "metadata": {
    "name": "generator-nemo",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-nemo",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2016-10-27"
  },
  "technologies": [
    "yeoman",
    "grunt",
    "mocha",
    "cucumberjs"
  ],
  "purposes": {
    "scaffolding": "yeoman",
    "taskRunner": "grunt",
    "testing": "mocha, cucumberjs"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": false,
      "linting": false,
      "formatting": false
    },
    "testing": {
      "unitTests": false,
      "integrationTests": false,
      "e2eTests": true,
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
      "commitFrequency": 2,
      "issueResponseTime": 3
    },
    "documentation": {
      "readmeCompleteness": 3,
      "setupInstructions": 3,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
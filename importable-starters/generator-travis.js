export default {
  "metadata": {
    "name": "generator-travis",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-travis",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2020-07-07"
  },
  "technologies": [
    "node",
    "yeoman",
    "travis",
    "javascript",
    "npm"
  ],
  "purposes": {
    "ci": "travis",
    "scaffolding": "yeoman"
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
      "commitFrequency": 3,
      "issueResponseTime": 3
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
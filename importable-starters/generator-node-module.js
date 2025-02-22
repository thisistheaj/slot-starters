export default {
  "metadata": {
    "name": "generator-node-module",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-node-module",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2014-07-22"
  },
  "technologies": [
    "gulp",
    "mocha",
    "jshint",
    "must"
  ],
  "purposes": {
    "buildTool": "gulp",
    "testing": "mocha",
    "linting": "jshint",
    "assertion": "must"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
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
      "commitFrequency": 1,
      "issueResponseTime": 1
    },
    "documentation": {
      "readmeCompleteness": 4,
      "setupInstructions": 4,
      "exampleCoverage": 1
    }
  },
  "other": {}
};
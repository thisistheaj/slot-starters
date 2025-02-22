export default {
  "metadata": {
    "name": "generator-ct-ng2",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-ct-ng2",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2017-02-16"
  },
  "technologies": [
    "Node",
    "Grunt",
    "Yeoman",
    "Bower",
    "JSHint"
  ],
  "purposes": {
    "cli": "Yeoman",
    "buildTool": "Grunt",
    "packageManager": "npm",
    "linting": "JSHint"
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
      "commitFrequency": 5,
      "issueResponseTime": 5
    },
    "documentation": {
      "readmeCompleteness": 4,
      "setupInstructions": 5,
      "exampleCoverage": 4
    }
  },
  "other": {}
};
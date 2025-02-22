export default {
  "metadata": {
    "name": "generator-mpvue-project",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-mpvue-project",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2018-08-13"
  },
  "technologies": [
    "yeoman-generator",
    "mpvue",
    "wxapp",
    "webpack"
  ],
  "purposes": {
    "bundling": "webpack",
    "scaffolding": "yeoman-generator",
    "ui_framework": "mpvue"
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
      "commitFrequency": 1,
      "issueResponseTime": 1
    },
    "documentation": {
      "readmeCompleteness": 3,
      "setupInstructions": 1,
      "exampleCoverage": 1
    }
  },
  "other": {}
};
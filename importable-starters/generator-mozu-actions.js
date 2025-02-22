export default {
  "metadata": {
    "name": "generator-mozu-actions",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-mozu-actions",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2024-11-11"
  },
  "technologies": [
    "yeoman",
    "grunt",
    "browserify",
    "mocha"
  ],
  "purposes": {
    "scaffolding": "yeoman",
    "build": "grunt",
    "bundling": "browserify",
    "testing": "mocha"
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
      "unitTests": true,
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
      "readmeCompleteness": 4,
      "setupInstructions": 4,
      "exampleCoverage": 4
    }
  },
  "other": {}
};
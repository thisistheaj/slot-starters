export default {
  "metadata": {
    "name": "generator-env-config",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-env-config",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2013-12-11"
  },
  "technologies": [
    "yeoman-generator",
    "angularjs"
  ],
  "purposes": {
    "configuration": "yeoman-generator",
    "framework": "angularjs"
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
      "cicd": false
    },
    "deployment": {
      "envConfig": true,
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
      "exampleCoverage": 3
    }
  },
  "other": {}
};
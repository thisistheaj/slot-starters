export default {
  "metadata": {
    "name": "app-starter",
    "source": "enum",
    "url": "https://github.com/ItsLeeOwen/app-starter",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2019-02-21"
  },
  "technologies": [
    "webpack",
    "git",
    "node",
    "docker",
    "heroku"
  ],
  "purposes": {
    "bundling": "webpack",
    "version_control": "git",
    "runtime": "node",
    "containerization": "docker",
    "deployment": "heroku"
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
      "dockerfile": true,
      "infraAsCode": false,
      "productionOptimized": true
    },
    "security": {
      "dependencyScanning": false,
      "secretManagement": true,
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
      "setupInstructions": 3,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
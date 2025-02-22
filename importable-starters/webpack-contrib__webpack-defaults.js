export default {
  "metadata": {
    "name": "webpack-defaults",
    "source": "github",
    "url": "https://github.com/webpack-contrib/webpack-defaults",
    "stars": 110,
    "forks": 29,
    "lastUpdate": "2024-11-29"
  },
  "technologies": [
    "JavaScript",
    "webpack",
    "npm",
    "nodejs"
  ],
  "purposes": {
    "configuration": "webpack",
    "packageManagement": "npm",
    "runtime": "nodejs"
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
export default {
  "metadata": {
    "name": "micro-starter",
    "source": "enum",
    "url": "https://github.com/samtgarson/micro-starter",
    "stars": 141,
    "forks": 4,
    "lastUpdate": "2024-10-29T22:00:12Z"
  },
  "technologies": [
    "javascript",
    "micro",
    "webpack",
    "jest",
    "node"
  ],
  "purposes": {
    "bundling": "webpack",
    "testing": "jest"
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
      "commitFrequency": 3,
      "issueResponseTime": 3
    },
    "documentation": {
      "readmeCompleteness": 4,
      "setupInstructions": 4,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
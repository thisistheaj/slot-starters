export default {
  "metadata": {
    "name": "node-flowtype-boilerplate",
    "source": "github",
    "url": "https://github.com/jsynowiec/node-flowtype-boilerplate",
    "stars": 103,
    "forks": 20,
    "lastUpdate": "2023-01-28"
  },
  "technologies": [
    "babel",
    "eslint",
    "flow",
    "jest",
    "node.js",
    "yarn"
  ],
  "purposes": {
    "typeChecking": "flow",
    "linting": "eslint",
    "testing": "jest",
    "packageManagement": "yarn"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
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
      "setupInstructions": 4,
      "exampleCoverage": 2
    }
  },
  "other": {
    "maintenanceStatus": "This boilerplate repository is outdated and no longer maintained."
  }
};
export default {
  "metadata": {
    "name": "rollpkg",
    "source": "github",
    "url": "https://github.com/rafgraph/rollpkg",
    "stars": 176,
    "forks": 8,
    "lastUpdate": "2025-02-11T01:16:31Z"
  },
  "technologies": [
    "typescript",
    "rollup",
    "eslint",
    "jest",
    "prettier"
  ],
  "purposes": {
    "bundling": "rollup",
    "testing": "jest",
    "linting": "eslint",
    "formatting": "prettier"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": true,
      "formatting": true
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
      "commitFrequency": 3,
      "issueResponseTime": 4
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 5
    }
  },
  "other": {}
};
export default {
  "metadata": {
    "name": "nx-serverless",
    "source": "enum",
    "url": "https://github.com/sudokar/nx-serverless",
    "stars": 144,
    "forks": 14,
    "lastUpdate": "2025-01-13"
  },
  "technologies": [
    "typescript",
    "serverless",
    "nx",
    "eslint",
    "prettier"
  ],
  "purposes": {
    "testing": "jest"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": false,
      "linting": true,
      "formatting": true
    },
    "testing": {
      "unitTests": true,
      "integrationTests": false,
      "e2eTests": false,
      "cicd": true
    },
    "deployment": {
      "envConfig": true,
      "dockerfile": false,
      "infraAsCode": true,
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
      "commitFrequency": 4,
      "issueResponseTime": 4
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 4
    }
  },
  "other": {}
};
export default {
  "metadata": {
    "name": "node-boilerplate",
    "source": "github",
    "url": "https://github.com/santoshshinde2012/node-boilerplate",
    "stars": 425,
    "forks": 83,
    "lastUpdate": "2025-02-10T11:59:20Z"
  },
  "technologies": [
    "typescript",
    "eslint",
    "prettier",
    "husky",
    "express",
    "dotenv",
    "cors",
    "helmet",
    "winston"
  ],
  "purposes": {
    "backend": "express",
    "typeChecking": "typescript",
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
      "integrationTests": true,
      "e2eTests": false,
      "cicd": true
    },
    "deployment": {
      "envConfig": true,
      "dockerfile": false,
      "infraAsCode": false,
      "productionOptimized": true
    },
    "security": {
      "dependencyScanning": true,
      "secretManagement": false,
      "authentication": true
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 4,
      "issueResponseTime": 4
    },
    "documentation": {
      "readmeCompleteness": 4,
      "setupInstructions": 5,
      "exampleCoverage": 4
    }
  },
  "other": {}
};
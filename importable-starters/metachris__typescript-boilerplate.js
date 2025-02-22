export default {
  "metadata": {
    "name": "typescript-boilerplate",
    "source": "enum",
    "url": "https://github.com/metachris/typescript-boilerplate",
    "stars": 602,
    "forks": 106,
    "lastUpdate": "2025-02-18T08:03:34Z"
  },
  "technologies": [
    "typescript",
    "jest",
    "esbuild",
    "typedoc",
    "typescript-eslint"
  ],
  "purposes": {
    "testing": "jest",
    "bundling": "esbuild",
    "documentation": "typedoc",
    "linting": "typescript-eslint"
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
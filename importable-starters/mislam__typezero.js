export default {
  "metadata": {
    "name": "typezero",
    "source": "github",
    "url": "https://github.com/mislam/typezero",
    "stars": 293,
    "forks": 10,
    "lastUpdate": "2025-02-18T07:47:33Z"
  },
  "technologies": [
    "typescript",
    "eslint",
    "prettier",
    "vitest"
  ],
  "purposes": {
    "testing": "vitest",
    "linting": "eslint",
    "formatting": "prettier",
    "typeChecking": "typescript"
  },
  "features": {
    "development": {
      "hotReload": true,
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
      "envConfig": true,
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
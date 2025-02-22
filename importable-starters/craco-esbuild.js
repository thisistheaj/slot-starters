export default {
  "metadata": {
    "name": "craco-esbuild",
    "source": "npm",
    "url": "https://www.npmjs.com/package/craco-esbuild",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2024-03-12"
  },
  "technologies": [
    "react",
    "craco",
    "esbuild",
    "jest"
  ],
  "purposes": {
    "ui": "react",
    "compilation": "esbuild",
    "testing": "jest"
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
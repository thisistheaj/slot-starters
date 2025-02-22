export default {
  "metadata": {
    "name": "bozon",
    "source": "enum",
    "url": "https://github.com/railsware/bozon",
    "stars": 756,
    "forks": 52,
    "lastUpdate": "2025-01-06T10:11:17Z"
  },
  "technologies": [
    "electron",
    "webpack",
    "jest",
    "spectron",
    "electron-builder"
  ],
  "purposes": {
    "bundling": "webpack",
    "testing": "jest",
    "e2eTesting": "spectron",
    "packaging": "electron-builder"
  },
  "features": {
    "development": {
      "hotReload": true,
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
      "e2eTests": true,
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
      "exampleCoverage": 4
    }
  },
  "other": {}
};
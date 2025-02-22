export default {
  "metadata": {
    "name": "nebulon",
    "source": "npm",
    "url": "https://www.npmjs.com/package/nebulon",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2024-12-11"
  },
  "technologies": [
    "node.js",
    "yarn",
    "npm"
  ],
  "purposes": {
    "packageManager": "npm",
    "cli": "nebulon",
    "scripting": "node.js"
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
      "infraAsCode": false,
      "productionOptimized": false
    },
    "security": {
      "dependencyScanning": true,
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
      "setupInstructions": 3,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
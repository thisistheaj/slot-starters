export default {
  "metadata": {
    "name": "codeowners-generator",
    "source": "npm",
    "url": "https://www.npmjs.com/package/codeowners-generator",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2025-01-12"
  },
  "technologies": [
    "ora",
    "commander",
    "cosmiconfig",
    "npm"
  ],
  "purposes": {
    "terminalInterface": "commander",
    "loadingAnimations": "ora",
    "configuration": "cosmiconfig"
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
      "unitTests": false,
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
      "commitFrequency": 5,
      "issueResponseTime": 5
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 5
    }
  },
  "other": {}
};
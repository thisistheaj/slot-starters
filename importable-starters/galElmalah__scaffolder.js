export default {
  "metadata": {
    "name": "scaffolder",
    "source": "github",
    "url": "https://github.com/galElmalah/scaffolder",
    "stars": 156,
    "forks": 11,
    "lastUpdate": "2024-11-16"
  },
  "technologies": [
    "TypeScript",
    "React",
    "Enzyme"
  ],
  "purposes": {
    "scaffolding": "TypeScript",
    "ui": "React",
    "testing": "Enzyme"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": false,
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
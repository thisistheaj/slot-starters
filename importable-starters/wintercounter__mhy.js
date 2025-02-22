export default {
  "metadata": {
    "name": "mhy",
    "source": "github",
    "url": "https://github.com/wintercounter/mhy",
    "stars": 136,
    "forks": 32,
    "lastUpdate": "2024-11-18"
  },
  "technologies": [
    "babel",
    "webpack",
    "react",
    "redux",
    "jest",
    "storybook",
    "cli",
    "development-environment"
  ],
  "purposes": {
    "bundling": "webpack",
    "ui": "react",
    "stateManagement": "redux",
    "testing": "jest",
    "utility": "storybook",
    "cli": "cli",
    "buildTool": "babel"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": true,
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
      "envConfig": false,
      "dockerfile": true,
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
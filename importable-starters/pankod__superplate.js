export default {
  "metadata": {
    "name": "superplate",
    "source": "enum",
    "url": "https://github.com/pankod/superplate",
    "stars": 2853,
    "forks": 155,
    "lastUpdate": "2025-02-12T04:48:59Z"
  },
  "technologies": [
    "typescript",
    "react",
    "react-testing-library",
    "styled-components",
    "react-query",
    "axios",
    "prettier"
  ],
  "purposes": {
    "ui": "react",
    "styling": "styled-components",
    "testing": "react-testing-library",
    "stateManagement": "react-query",
    "http": "axios",
    "codeFormatting": "prettier"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
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
      "issueResponseTime": 3
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 4
    }
  },
  "other": {
    "license": "No license"
  }
};
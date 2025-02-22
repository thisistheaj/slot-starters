export default {
  "metadata": {
    "name": "secure-electron-template",
    "source": "github",
    "url": "https://github.com/reZach/secure-electron-template",
    "stars": 1667,
    "forks": 155,
    "lastUpdate": "2025-02-17T10:15:41Z"
  },
  "technologies": [
    "electron",
    "react",
    "typescript",
    "redux",
    "babel",
    "webpack",
    "mocha",
    "i18next"
  ],
  "purposes": {
    "ui": "react",
    "bundling": "webpack",
    "stateManagement": "redux",
    "testing": "mocha",
    "localization": "i18next",
    "build": "electron"
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
      "envConfig": true,
      "dockerfile": false,
      "infraAsCode": false,
      "productionOptimized": true
    },
    "security": {
      "dependencyScanning": true,
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
export default {
  "metadata": {
    "name": "clean-react-app",
    "source": "github",
    "url": "https://github.com/rubemfsv/clean-react-app",
    "stars": 117,
    "forks": 35,
    "lastUpdate": "2025-01-28T19:15:08Z"
  },
  "technologies": [
    "react",
    "typescript",
    "webpack",
    "cypress",
    "jest",
    "axios"
  ],
  "purposes": {
    "ui": "react",
    "bundling": "webpack",
    "testing": "jest",
    "e2eTesting": "cypress",
    "httpClient": "axios"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
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
      "productionOptimized": true
    },
    "security": {
      "dependencyScanning": false,
      "secretManagement": false,
      "authentication": true
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 4,
      "issueResponseTime": 4
    },
    "documentation": {
      "readmeCompleteness": 4,
      "setupInstructions": 4,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
export default {
  "metadata": {
    "name": "eslint-config-react-app",
    "source": "npm",
    "url": "https://www.npmjs.com/package/eslint-config-react-app",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2022-04-12"
  },
  "technologies": [
    "eslint",
    "react"
  ],
  "purposes": {
    "linting": "eslint"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": false,
      "linting": true,
      "formatting": false
    },
    "testing": {
      "unitTests": false,
      "integrationTests": false,
      "e2eTests": false,
      "cicd": false
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
      "commitFrequency": 1,
      "issueResponseTime": 1
    },
    "documentation": {
      "readmeCompleteness": 1,
      "setupInstructions": 1,
      "exampleCoverage": 1
    }
  },
  "other": {}
};
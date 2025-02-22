export default {
  "metadata": {
    "name": "serverless-authentication-boilerplate",
    "source": "enum",
    "url": "https://github.com/laardee/serverless-authentication-boilerplate",
    "stars": 567,
    "forks": 71,
    "lastUpdate": "2025-02-17T06:46:10Z"
  },
  "technologies": [
    "JavaScript",
    "Serverless framework",
    "DynamoDB",
    "FaunaDB",
    "Cognito"
  ],
  "purposes": {
    "authentication": "Serverless framework",
    "database": "FaunaDB",
    "userManagement": "Cognito"
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
      "cicd": true
    },
    "deployment": {
      "envConfig": true,
      "dockerfile": false,
      "infraAsCode": true,
      "productionOptimized": true
    },
    "security": {
      "dependencyScanning": false,
      "secretManagement": true,
      "authentication": true
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 4,
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
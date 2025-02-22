export default {
  "metadata": {
    "name": "serverless-boilerplate",
    "source": "github",
    "url": "https://github.com/harijoe/serverless-boilerplate",
    "stars": 242,
    "forks": 11,
    "lastUpdate": "2024-09-26"
  },
  "technologies": [
    "JavaScript",
    "Serverless",
    "Webpack",
    "DynamoDB",
    "Prettier"
  ],
  "purposes": {
    "runtime": "JavaScript",
    "infrastructure": "Serverless",
    "bundling": "Webpack",
    "database": "DynamoDB",
    "formatting": "Prettier"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": false,
      "linting": false,
      "formatting": true
    },
    "testing": {
      "unitTests": false,
      "integrationTests": false,
      "e2eTests": false,
      "cicd": false
    },
    "deployment": {
      "envConfig": true,
      "dockerfile": false,
      "infraAsCode": true,
      "productionOptimized": false
    },
    "security": {
      "dependencyScanning": false,
      "secretManagement": true,
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
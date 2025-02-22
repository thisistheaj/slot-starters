export default {
  "metadata": {
    "name": "express-rest-api-boilerplate",
    "source": "github",
    "url": "https://github.com/aichbauer/express-rest-api-boilerplate",
    "stars": 496,
    "forks": 188,
    "lastUpdate": "2025-02-16T14:04:06Z"
  },
  "technologies": [
    "javascript",
    "jwt",
    "sqlite",
    "mysql",
    "postgresql",
    "eslint",
    "jest",
    "npm"
  ],
  "purposes": {
    "database": "sqlite",
    "orm": "sequelize",
    "testing": "jest",
    "linting": "eslint",
    "authentication": "jwt"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": false,
      "linting": true,
      "formatting": false
    },
    "testing": {
      "unitTests": true,
      "integrationTests": true,
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
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 5
    }
  },
  "other": {}
};
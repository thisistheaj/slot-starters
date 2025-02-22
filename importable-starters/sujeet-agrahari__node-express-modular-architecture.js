export default {
  "metadata": {
    "name": "node-express-modular-architecture",
    "source": "github",
    "url": "https://github.com/sujeet-agrahari/node-express-modular-architecture",
    "stars": 135,
    "forks": 28,
    "lastUpdate": "2025-02-18T10:59:31Z"
  },
  "technologies": [
    "JavaScript",
    "express",
    "sequelize",
    "docker",
    "jest",
    "eslint",
    "jsonwebtoken",
    "Joi",
    "winston",
    "PM2"
  ],
  "purposes": {
    "orm": "sequelize",
    "testing": "jest",
    "database": "Postgresql",
    "linting": "eslint",
    "logging": "winston",
    "environmentVariables": "dotenv"
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
      "unitTests": true,
      "integrationTests": true,
      "e2eTests": false,
      "cicd": true
    },
    "deployment": {
      "envConfig": true,
      "dockerfile": true,
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
      "commitFrequency": 3,
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
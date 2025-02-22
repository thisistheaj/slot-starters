export default {
  "metadata": {
    "name": "nodejs-api-starter",
    "source": "github",
    "url": "https://github.com/toantranmei/nodejs-api-starter",
    "stars": 126,
    "forks": 52,
    "lastUpdate": "2025-01-11T02:35:51Z"
  },
  "technologies": [
    "javascript",
    "mongodb",
    "mongoose",
    "swagger-jsdoc",
    "swagger-ui-express",
    "pm2",
    "yarn",
    "dotenv",
    "cross-env",
    "helmet",
    "cors",
    "husky",
    "lint-staged",
    "eslint",
    "prettier",
    "passport",
    "joi",
    "winston",
    "morgan"
  ],
  "purposes": {
    "database": "mongodb",
    "orm": "mongoose",
    "documentation": "swagger-jsdoc",
    "processManagement": "pm2",
    "dependencyManagement": "yarn",
    "envConfig": "dotenv",
    "security": "helmet",
    "cors": "cors",
    "linting": "eslint",
    "formatting": "prettier",
    "authentication": "passport",
    "validation": "joi",
    "logging": "winston"
  },
  "features": {
    "development": {
      "hotReload": false,
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
      "cicd": false
    },
    "deployment": {
      "envConfig": true,
      "dockerfile": false,
      "infraAsCode": false,
      "productionOptimized": false
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
      "issueResponseTime": 3
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 4,
      "exampleCoverage": 4
    }
  },
  "other": {}
};
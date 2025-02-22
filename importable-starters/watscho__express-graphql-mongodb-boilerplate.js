export default {
  "metadata": {
    "name": "express-graphql-mongodb-boilerplate",
    "source": "github",
    "url": "https://github.com/watscho/express-graphql-mongodb-boilerplate",
    "stars": 352,
    "forks": 60,
    "lastUpdate": "2024-10-29"
  },
  "technologies": [
    "bcryptjs",
    "cors",
    "crypto-random-string",
    "dotenv",
    "ejs",
    "email-templates",
    "express",
    "express-graphql",
    "graphql",
    "graphql-compose",
    "graphql-compose-mongoose",
    "i18next",
    "i18next-express-middleware",
    "ioredis",
    "jsonwebtoken",
    "module-alias",
    "moment",
    "mongoose",
    "nodemailer",
    "validator",
    "winston",
    "docker",
    "redis",
    "yarn",
    "lerna",
    "nodemon",
    "eslint"
  ],
  "purposes": {
    "backendLanguage": "JavaScript",
    "templateEngine": "ejs",
    "mailer": "nodemailer",
    "logger": "winston",
    "authentication": "jsonwebtoken",
    "api": "express, graphql",
    "dataMapping": "mongoose, graphql-compose-mongoose",
    "database": "mongodb",
    "caching": "redis",
    "environmentConfiguration": "dotenv",
    "internationalization": "i18next, i18next-express-middleware",
    "codingStandards": "eslint"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": true,
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
      "envConfig": true,
      "dockerfile": true,
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
      "commitFrequency": 5,
      "issueResponseTime": 5
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 5
    }
  },
  "other": {}
};
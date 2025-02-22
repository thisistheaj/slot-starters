export default {
  "metadata": {
    "name": "nodejs-api-boilerplate",
    "source": "github",
    "url": "https://github.com/EQuimper/nodejs-api-boilerplate",
    "stars": 464,
    "forks": 121,
    "lastUpdate": "2024-11-05"
  },
  "technologies": [
    "JavaScript",
    "Docker",
    "ES6",
    "ES7",
    "Eslint",
    "Express",
    "MongoDB",
    "Mongoose",
    "Prettier",
    "Joi",
    "PassportJS",
    "Helmet",
    "Cors",
    "Body-Parser",
    "Morgan",
    "Raven",
    "Http-Status",
    "Lint-Staged",
    "Husky",
    "Webpack3",
    "Istanbul",
    "Mocha",
    "Chai",
    "Supertest",
    "NPS"
  ],
  "purposes": {
    "api": "Express",
    "linting": "Eslint",
    "formatting": "Prettier",
    "authentication": "PassportJS",
    "validation": "Joi",
    "logging": "Raven",
    "database": "MongoDB",
    "orm": "Mongoose",
    "bundle": "Webpack3"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": true,
      "devContainer": false,
      "typeChecking": false,
      "linting": true,
      "formatting": true
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
      "productionOptimized": false
    },
    "security": {
      "dependencyScanning": true,
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
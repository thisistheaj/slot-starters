export default {
  "metadata": {
    "name": "nodejs-starter-template",
    "source": "github",
    "url": "https://github.com/bahricanyesil/nodejs-starter-template",
    "stars": 217,
    "forks": 66,
    "lastUpdate": "2025-02-17"
  },
  "technologies": [
    "Node.js",
    "Express",
    "Mongoose",
    "JWT",
    "Joi",
    "AWS S3",
    "AWS SES",
    "dotenv",
    "helmet",
    "cors",
    "compression",
    "Swagger",
    "MongoDB"
  ],
  "purposes": {
    "webFramework": "Express",
    "orm": "Mongoose",
    "authentication": "JWT",
    "validation": "Joi",
    "storage": "AWS S3",
    "email": "AWS SES",
    "security": "helmet",
    "apiDocumentation": "Swagger",
    "database": "MongoDB"
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
      "unitTests": false,
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
      "secretManagement": true,
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
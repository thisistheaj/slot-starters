export default {
  "metadata": {
    "name": "node-server-template",
    "source": "github",
    "url": "https://github.com/Vladinho10/node-server-template",
    "stars": 132,
    "forks": 17,
    "lastUpdate": "2025-02-10"
  },
  "technologies": [
    "Node.js",
    "Express",
    "MongoDb",
    "Mongoose",
    "Kafka",
    "nodemailer",
    "file download",
    "Postman",
    "ES6",
    "PostgreSQL",
    "Mocha",
    "Eslint",
    "Yarn",
    "socket.io",
    "websocket",
    "sequelize"
  ],
  "purposes": {
    "framework": "Express",
    "database": "MongoDb",
    "orm": "Mongoose",
    "messageBroker": "Kafka",
    "email": "nodemailer",
    "testing": "Mocha",
    "linting": "Eslint",
    "packageManager": "Yarn",
    "ormSecondChoice": "sequelize",
    "postman": "Postman",
    "taskRunner": "file download",
    "secondaryDatabase": "PostgreSQL"
  },
  "features": {
    "development": {
      "hotReload": true,
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
      "exampleCoverage": 3
    }
  },
  "other": {}
};
export default {
  "metadata": {
    "name": "generator-api",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-api",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2018-03-06"
  },
  "technologies": [
    "NodeJS",
    "ES6",
    "Mongoose",
    "Express",
    "Docker",
    "MongoDB"
  ],
  "purposes": {
    "api_generator": "Yeoman",
    "web_framework": "Express",
    "orm": "Mongoose",
    "database": "MongoDB",
    "containerization": "Docker"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": true,
      "typeChecking": false,
      "linting": true,
      "formatting": false
    },
    "testing": {
      "unitTests": false,
      "integrationTests": false,
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
      "authentication": false
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 1,
      "issueResponseTime": 1
    },
    "documentation": {
      "readmeCompleteness": 4,
      "setupInstructions": 5,
      "exampleCoverage": 4
    }
  },
  "other": {}
};
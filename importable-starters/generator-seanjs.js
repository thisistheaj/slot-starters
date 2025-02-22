export default {
  "metadata": {
    "name": "generator-seanjs",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-seanjs",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2016-04-02"
  },
  "technologies": [
    "Node.js",
    "Express",
    "AngularJS",
    "Sequelize",
    "Redis",
    "Socket.io",
    "Passport",
    "Async",
    "Docker",
    "PostgreSQL"
  ],
  "purposes": {
    "framework": "SEAN.js",
    "authentication": "Passport",
    "realtime": "Socket.io",
    "session_store": "Redis",
    "orm": "Sequelize",
    "task_runner": "Grunt",
    "containerization": "Docker",
    "database": "PostgreSQL"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": true,
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
      "commitFrequency": 1,
      "issueResponseTime": 1
    },
    "documentation": {
      "readmeCompleteness": 4,
      "setupInstructions": 4,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
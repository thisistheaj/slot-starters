export default {
  "metadata": {
    "name": "koa2-boilerplate",
    "source": "github",
    "url": "https://github.com/geekplux/koa2-boilerplate",
    "stars": 195,
    "forks": 60,
    "lastUpdate": "2024-12-28"
  },
  "technologies": [
    "koa",
    "nodejs",
    "JavaScript",
    "nodemon",
    "mocha",
    "should",
    "supertest",
    "babel"
  ],
  "purposes": {
    "framework": "koa",
    "build": "babel",
    "development": "nodemon"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": false,
      "linting": false,
      "formatting": false
    },
    "testing": {
      "unitTests": true,
      "integrationTests": true,
      "e2eTests": false,
      "cicd": false
    },
    "deployment": {
      "envConfig": false,
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
      "commitFrequency": 1,
      "issueResponseTime": 1
    },
    "documentation": {
      "readmeCompleteness": 3,
      "setupInstructions": 3,
      "exampleCoverage": 1
    }
  },
  "other": {
    "status": "Deprecated"
  }
};
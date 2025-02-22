export default {
  "metadata": {
    "name": "koa-rest-api-boilerplate",
    "source": "github",
    "url": "https://github.com/posquit0/koa-rest-api-boilerplate",
    "stars": 491,
    "forks": 80,
    "lastUpdate": "2025-02-05T10:41:34Z"
  },
  "technologies": [
    "javascript",
    "docker",
    "swagger",
    "jest",
    "circleci",
    "koa"
  ],
  "purposes": {
    "server": "koa",
    "apiDocumentation": "swagger",
    "testing": "jest",
    "ciCd": "circleci",
    "containerization": "docker"
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
      "envConfig": false,
      "dockerfile": true,
      "infraAsCode": false,
      "productionOptimized": true
    },
    "security": {
      "dependencyScanning": false,
      "secretManagement": false,
      "authentication": false
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 4,
      "issueResponseTime": 4
    },
    "documentation": {
      "readmeCompleteness": 4,
      "setupInstructions": 5,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
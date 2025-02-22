export default {
  "metadata": {
    "name": "fastify-boilerplate",
    "source": "github",
    "url": "https://github.com/mattaharish/fastify-boilerplate",
    "stars": 106,
    "forks": 17,
    "lastUpdate": "2025-01-21T03:52:02Z"
  },
  "technologies": [
    "fastify",
    "knex",
    "pino"
  ],
  "purposes": {
    "backend": "fastify",
    "database": "knex",
    "logging": "pino"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": false,
      "linting": true,
      "formatting": true
    },
    "testing": {
      "unitTests": false,
      "integrationTests": false,
      "e2eTests": false,
      "cicd": true
    },
    "deployment": {
      "envConfig": false,
      "dockerfile": false,
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
      "readmeCompleteness": 5,
      "setupInstructions": 4,
      "exampleCoverage": 3
    }
  },
  "other": {
    "description": "fastify boilerplate for building RESTful APIs including design, deployment, and monitoring."
  }
};
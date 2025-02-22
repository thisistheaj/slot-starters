export default {
  "metadata": {
    "name": "nestjs-microservice-boilerplate-api",
    "source": "github",
    "url": "https://github.com/mikemajesty/nestjs-microservice-boilerplate-api",
    "stars": 336,
    "forks": 80,
    "lastUpdate": "2025-02-17T06:34:43Z"
  },
  "technologies": [
    "typescript",
    "docker",
    "mongodb",
    "postgres",
    "mongoose",
    "nestjs",
    "typeorm",
    "redis"
  ],
  "purposes": {
    "database": "mongodb",
    "orm": "typeorm",
    "logging": "logger service",
    "authentication": "authentication",
    "authorization": "authorization",
    "documentation": "swagger"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": true,
      "devContainer": false,
      "typeChecking": true,
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
      "dockerfile": true,
      "infraAsCode": true,
      "productionOptimized": true
    },
    "security": {
      "dependencyScanning": true,
      "secretManagement": true,
      "authentication": true
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 4,
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
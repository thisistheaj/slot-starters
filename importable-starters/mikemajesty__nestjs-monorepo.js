export default {
  "metadata": {
    "name": "nestjs-monorepo",
    "source": "github",
    "url": "https://github.com/mikemajesty/nestjs-monorepo",
    "stars": 348,
    "forks": 88,
    "lastUpdate": "2025-02-17T01:55:47Z"
  },
  "technologies": [
    "typescript",
    "docker",
    "mongodb",
    "redis",
    "swagger",
    "nestjs",
    "pinojs",
    "elastic",
    "jeager",
    "opentracing",
    "jest",
    "yaml"
  ],
  "purposes": {
    "database": "mongodb",
    "cache": "redis",
    "authentication": "nestjs-auth",
    "logging": "pinojs",
    "documentation": "swagger",
    "testing": "jest",
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
      "integrationTests": false,
      "e2eTests": true,
      "cicd": false
    },
    "deployment": {
      "envConfig": true,
      "dockerfile": true,
      "infraAsCode": true,
      "productionOptimized": true
    },
    "security": {
      "dependencyScanning": false,
      "secretManagement": true,
      "authentication": true
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
      "exampleCoverage": 5
    }
  },
  "other": {}
};
export default {
  "metadata": {
    "name": "base-app-nestjs",
    "source": "github",
    "url": "https://github.com/pezzetti/base-app-nestjs",
    "stars": 390,
    "forks": 38,
    "lastUpdate": "2025-02-17T08:19:10Z"
  },
  "technologies": [
    "nestjs",
    "typescript",
    "typeorm",
    "graphql",
    "jest",
    "docker"
  ],
  "purposes": {
    "ui": "nestjs",
    "database": "typeorm",
    "api": "graphql",
    "testing": "jest",
    "containerization": "docker"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": false,
      "linting": false,
      "formatting": false
    },
    "testing": {
      "unitTests": true,
      "integrationTests": false,
      "e2eTests": true,
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
      "authentication": false
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 4,
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
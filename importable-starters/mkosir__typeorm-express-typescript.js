export default {
  "metadata": {
    "name": "typeorm-express-typescript",
    "source": "github",
    "url": "https://github.com/mkosir/typeorm-express-typescript",
    "stars": 435,
    "forks": 140,
    "lastUpdate": "2025-02-06"
  },
  "technologies": [
    "typescript",
    "docker",
    "postgres",
    "express",
    "typeorm",
    "mocha",
    "eslint",
    "prettier",
    "jwt"
  ],
  "purposes": {
    "database": "postgres",
    "orm": "typeorm",
    "server": "express",
    "testing": "mocha",
    "linting": "eslint",
    "formatting": "prettier",
    "authentication": "jwt",
    "containerization": "docker"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
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
      "commitFrequency": 4,
      "issueResponseTime": 4
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 4
    }
  },
  "other": {}
};
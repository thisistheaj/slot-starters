export default {
  "metadata": {
    "name": "express-starter",
    "source": "github",
    "url": "https://github.com/mucahitnezir/express-starter",
    "stars": 131,
    "forks": 42,
    "lastUpdate": "2025-02-15T23:14:13Z"
  },
  "technologies": [
    "node.js",
    "express",
    "sequelize",
    "postgresql",
    "es6",
    "docker",
    "swagger",
    "redis",
    "eslint",
    "mocha",
    "chai",
    "sentry"
  ],
  "purposes": {
    "database": "postgresql",
    "orm": "sequelize",
    "backend": "express",
    "testing": "mocha"
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
      "commitFrequency": 3,
      "issueResponseTime": 3
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 5
    }
  },
  "other": {}
};
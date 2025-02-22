export default {
  "metadata": {
    "name": "tsmean",
    "source": "enum",
    "url": "https://github.com/tsmean/tsmean",
    "stars": 171,
    "forks": 39,
    "lastUpdate": "2024-12-05T17:31:37Z"
  },
  "technologies": [
    "typescript",
    "mysql",
    "expressjs",
    "angular",
    "nodejs",
    "docker"
  ],
  "purposes": {
    "ui": "angular",
    "database": "mysql",
    "server": "expressjs",
    "client": "typescript",
    "backend": "nodejs"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": false,
      "formatting": false
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
      "readmeCompleteness": 4,
      "setupInstructions": 4,
      "exampleCoverage": 3
    }
  },
  "other": {
    "disclaimer": "Nobody is actively developing tsmean. This means that it's not recommended to use this as a starting point for new applications anymore."
  }
};
export default {
  "metadata": {
    "name": "nestjs-starter",
    "source": "github",
    "url": "https://github.com/rudemex/nestjs-starter",
    "stars": 113,
    "forks": 15,
    "lastUpdate": "2025-01-28T22:02:12Z"
  },
  "technologies": [
    "typescript",
    "nestjs",
    "nodejs",
    "swagger",
    "docker"
  ],
  "purposes": {
    "api": "nestjs",
    "deployment": "docker"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": true,
      "formatting": true
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
      "dependencyScanning": true,
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
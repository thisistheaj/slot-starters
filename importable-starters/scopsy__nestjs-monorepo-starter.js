export default {
  "metadata": {
    "name": "nestjs-monorepo-starter",
    "source": "github",
    "url": "https://github.com/scopsy/nestjs-monorepo-starter",
    "stars": 277,
    "forks": 34,
    "lastUpdate": "2025-02-14T02:29:00Z"
  },
  "technologies": [
    "nestjs",
    "typescript",
    "angular",
    "docker",
    "lerna",
    "yarn",
    "mongodb",
    "redis"
  ],
  "purposes": {
    "ui": "angular",
    "backend": "nestjs",
    "database": "mongodb",
    "queue": "redis",
    "packageManagement": "lerna",
    "dependencyManagement": "yarn"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": false,
      "formatting": false
    },
    "testing": {
      "unitTests": false,
      "integrationTests": false,
      "e2eTests": true,
      "cicd": true
    },
    "deployment": {
      "envConfig": false,
      "dockerfile": true,
      "infraAsCode": false,
      "productionOptimized": false
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
      "readmeCompleteness": 4,
      "setupInstructions": 4,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
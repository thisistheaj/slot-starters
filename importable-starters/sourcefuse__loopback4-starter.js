export default {
  "metadata": {
    "name": "loopback4-starter",
    "source": "github",
    "url": "https://github.com/sourcefuse/loopback4-starter",
    "stars": 159,
    "forks": 60,
    "lastUpdate": "2024-11-22T06:02:35Z"
  },
  "technologies": [
    "typescript",
    "postgresql",
    "loopback",
    "redis"
  ],
  "purposes": {
    "database": "postgresql",
    "authentication": "loopback4-authentication",
    "authorization": "loopback4-authorization",
    "softDelete": "loopback4-soft-delete"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": true,
      "formatting": false
    },
    "testing": {
      "unitTests": false,
      "integrationTests": false,
      "e2eTests": false,
      "cicd": false
    },
    "deployment": {
      "envConfig": true,
      "dockerfile": false,
      "infraAsCode": false,
      "productionOptimized": false
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
      "exampleCoverage": 3
    }
  },
  "other": {
    "isTemplate": true,
    "license": "MIT License",
    "description": "Loopback 4 starter application. Multi-tenant architecture supported. Authentication, Authorization, Soft deletes, environment vars, Audit logs, included."
  }
};
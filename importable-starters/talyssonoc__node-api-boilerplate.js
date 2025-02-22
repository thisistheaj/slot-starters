export default {
  "metadata": {
    "name": "node-api-boilerplate",
    "source": "enum",
    "url": "https://github.com/talyssonoc/node-api-boilerplate",
    "stars": 3331,
    "forks": 535,
    "lastUpdate": "2025-02-16T12:29:36Z"
  },
  "technologies": [
    "typescript",
    "jest",
    "docker",
    "nodejs"
  ],
  "purposes": {
    "testing": "jest",
    "docker": "docker"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": true,
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
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 4
    }
  },
  "other": {
    "description": "DDD/Clean Architecture inspired boilerplate for Node web APIs",
    "topics": [
      "boilerplate",
      "clean-architecture",
      "ddd",
      "good-practices",
      "hacktoberfest",
      "nodejs",
      "scalability"
    ],
    "license": "MIT License"
  }
};
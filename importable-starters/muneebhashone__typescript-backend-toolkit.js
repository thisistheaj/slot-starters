export default {
  "metadata": {
    "name": "typescript-backend-toolkit",
    "source": "github",
    "url": "https://github.com/muneebhashone/typescript-backend-toolkit",
    "stars": 286,
    "forks": 51,
    "lastUpdate": "2025-02-17T01:24:32Z"
  },
  "technologies": [
    "typescript",
    "express",
    "swagger",
    "docker",
    "mongodb",
    "mongoose",
    "socket.io",
    "zod",
    "bullmq",
    "react-email",
    "mailgun"
  ],
  "purposes": {
    "database": "mongodb",
    "orm": "mongoose",
    "apiDocumentation": "swagger",
    "validation": "zod",
    "jobQueue": "bullmq",
    "emailHandling": "react-email",
    "authentication": "google sign-in"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
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
      "dockerfile": true,
      "infraAsCode": false,
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
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 4
    }
  },
  "other": {}
};
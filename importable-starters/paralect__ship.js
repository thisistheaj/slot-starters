export default {
  "metadata": {
    "name": "ship",
    "source": "enum",
    "url": "https://github.com/paralect/ship",
    "stars": 370,
    "forks": 69,
    "lastUpdate": "2025-02-15T18:22:12Z"
  },
  "technologies": [
    "typescript",
    "react",
    "nextjs",
    "mongodb",
    "docker",
    "kubernetes",
    "koa",
    "socket.io",
    "sendgrid"
  ],
  "purposes": {
    "ui": "react",
    "authentication": "google oauth",
    "database": "mongodb",
    "server": "koa",
    "ci_cd": "github actions",
    "containerization": "docker",
    "orchestration": "kubernetes"
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
      "cicd": true
    },
    "deployment": {
      "envConfig": true,
      "dockerfile": true,
      "infraAsCode": true,
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
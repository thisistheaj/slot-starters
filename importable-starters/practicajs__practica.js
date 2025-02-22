export default {
  "metadata": {
    "name": "practica",
    "source": "enum",
    "url": "https://github.com/practicajs/practica",
    "stars": 1535,
    "forks": 141,
    "lastUpdate": "2025-02-18T10:01:16Z"
  },
  "technologies": [
    "typescript",
    "nodejs",
    "fastify",
    "sequelize",
    "postgresql",
    "docker"
  ],
  "purposes": {
    "web": "fastify",
    "orm": "sequelize",
    "database": "postgresql",
    "containerization": "docker"
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
      "unitTests": false,
      "integrationTests": true,
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
      "commitFrequency": 5,
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
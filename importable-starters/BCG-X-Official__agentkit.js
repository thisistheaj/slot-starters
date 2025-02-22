export default {
  "metadata": {
    "name": "agentkit",
    "source": "github",
    "url": "https://github.com/BCG-X-Official/agentkit",
    "stars": 1645,
    "forks": 232,
    "lastUpdate": "2025-02-18"
  },
  "technologies": [
    "Nextjs",
    "FastAPI",
    "Langchain",
    "React",
    "TypeScript",
    "Python",
    "Celery",
    "redis",
    "Postgres",
    "Docker",
    "NextAuth"
  ],
  "purposes": {
    "frontend": "React, Nextjs",
    "backend": "FastAPI, Python",
    "apiIntegration": "Langchain",
    "authentication": "NextAuth",
    "database": "Postgres",
    "taskQueue": "Celery, redis",
    "containerization": "Docker"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": true,
      "typeChecking": true,
      "linting": true,
      "formatting": true
    },
    "testing": {
      "unitTests": false,
      "integrationTests": true,
      "e2eTests": false,
      "cicd": true
    },
    "deployment": {
      "envConfig": true,
      "dockerfile": true,
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
      "commitFrequency": 5,
      "issueResponseTime": 5
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 5
    }
  },
  "other": {}
};
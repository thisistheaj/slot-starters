export default {
  "metadata": {
    "name": "elysia-kickstart",
    "source": "enum",
    "url": "https://github.com/syhner/elysia-kickstart",
    "stars": 127,
    "forks": 28,
    "lastUpdate": "2025-02-04T21:00:21Z"
  },
  "technologies": [
    "typescript",
    "htmx",
    "tailwind",
    "authjs",
    "drizzle",
    "docker",
    "github-actions"
  ],
  "purposes": {
    "ui": "htmx",
    "styling": "tailwind",
    "orm": "drizzle",
    "authentication": "authjs",
    "devContainer": "docker",
    "ci_cd": "github-actions"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": true,
      "typeChecking": true,
      "linting": true,
      "formatting": true
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
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 4
    }
  },
  "other": {}
};
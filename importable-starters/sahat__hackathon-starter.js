export default {
  "metadata": {
    "name": "hackathon-starter",
    "source": "enum",
    "url": "https://github.com/sahat/hackathon-starter",
    "stars": 34986,
    "forks": 8166,
    "lastUpdate": "2025-02-18T15:38:07Z"
  },
  "technologies": [
    "nodejs",
    "oauth2",
    "javascript",
    "mongodb",
    "bootstrap",
    "sass"
  ],
  "purposes": {
    "ui": "bootstrap",
    "database": "mongodb",
    "authentication": "oauth2"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": true,
      "devContainer": false,
      "typeChecking": false,
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
      "dependencyScanning": true,
      "secretManagement": true,
      "authentication": true
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
  "other": {
    "type": "object",
    "description": "Features supporting OAuth2 authentication for multiple providers"
  }
};
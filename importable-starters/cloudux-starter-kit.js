export default {
  "metadata": {
    "name": "cloudux-starter-kit",
    "source": "npm",
    "url": "https://www.npmjs.com/package/cloudux-starter-kit",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2025-02-06"
  },
  "technologies": [
    "npm",
    "github",
    "MediaCentral",
    "docker"
  ],
  "purposes": {
    "packageManagement": "npm",
    "sourceControl": "github"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": false,
      "linting": false,
      "formatting": false
    },
    "testing": {
      "unitTests": false,
      "integrationTests": false,
      "e2eTests": false,
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
      "authentication": false
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 1,
      "issueResponseTime": 1
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 1
    }
  },
  "other": {}
};
export default {
  "metadata": {
    "name": "nextauri",
    "source": "github",
    "url": "https://github.com/leon3s/nextauri",
    "stars": 158,
    "forks": 5,
    "lastUpdate": "2025-02-16"
  },
  "technologies": [
    "next",
    "react",
    "rust",
    "tauri",
    "typescript",
    "eslint",
    "cypress",
    "nodejs",
    "github-actions"
  ],
  "purposes": {
    "ui": "react",
    "language": "typescript",
    "framework": "next",
    "desktop": "tauri",
    "linting": "eslint",
    "testing": "cypress",
    "ci": "github-actions"
  },
  "features": {
    "development": {
      "hotReload": true,
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
      "e2eTests": true,
      "cicd": true
    },
    "deployment": {
      "envConfig": false,
      "dockerfile": false,
      "infraAsCode": false,
      "productionOptimized": true
    },
    "security": {
      "dependencyScanning": true,
      "secretManagement": false,
      "authentication": false
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 5,
      "issueResponseTime": 3
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 4
    }
  },
  "other": {
    "license": "No license"
  }
};
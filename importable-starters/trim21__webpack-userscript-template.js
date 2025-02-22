export default {
  "metadata": {
    "name": "webpack-userscript-template",
    "source": "github",
    "url": "https://github.com/trim21/webpack-userscript-template",
    "stars": 142,
    "forks": 18,
    "lastUpdate": "2025-02-12T10:51:44Z"
  },
  "technologies": [
    "javascript",
    "webpack",
    "typescript",
    "userscript"
  ],
  "purposes": {
    "bundling": "webpack",
    "typing": "typescript"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": true,
      "debugConfig": true,
      "devContainer": false,
      "typeChecking": true,
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
      "envConfig": true,
      "dockerfile": false,
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
      "commitFrequency": 3,
      "issueResponseTime": 4
    },
    "documentation": {
      "readmeCompleteness": 4,
      "setupInstructions": 4,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
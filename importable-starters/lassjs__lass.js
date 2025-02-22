export default {
  "metadata": {
    "name": "lass",
    "source": "github",
    "url": "https://github.com/lassjs/lass",
    "stars": 651,
    "forks": 56,
    "lastUpdate": "2024-11-30T05:22:19Z"
  },
  "technologies": [
    "javascript",
    "npm",
    "ava",
    "commitlint",
    "xo",
    "prettier",
    "remark",
    "nyc",
    "travis-ci",
    "sao"
  ],
  "purposes": {
    "linting": "xo",
    "testing": "ava",
    "formatting": "prettier",
    "coverage": "nyc",
    "ci": "travis-ci"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": false,
      "linting": true,
      "formatting": true
    },
    "testing": {
      "unitTests": true,
      "integrationTests": false,
      "e2eTests": false,
      "cicd": true
    },
    "deployment": {
      "envConfig": false,
      "dockerfile": false,
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
      "commitFrequency": 4,
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
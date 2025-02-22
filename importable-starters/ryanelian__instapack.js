export default {
  "metadata": {
    "name": "instapack",
    "source": "github",
    "url": "https://github.com/ryanelian/instapack",
    "stars": 141,
    "forks": 10,
    "lastUpdate": "2024-11-12"
  },
  "technologies": [
    "typescript",
    "sass",
    "babel",
    "eslint",
    "nodejs",
    "react",
    "vue",
    "webpack"
  ],
  "purposes": {
    "bundling": "webpack",
    "styling": "sass"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": true,
      "debugConfig": true,
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
      "commitFrequency": 3,
      "issueResponseTime": 2
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 4,
      "exampleCoverage": 4
    }
  },
  "other": {}
};
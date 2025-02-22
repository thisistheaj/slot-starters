export default {
  "metadata": {
    "name": "angular-library-seed",
    "source": "github",
    "url": "https://github.com/trekhleb/angular-library-seed",
    "stars": 200,
    "forks": 86,
    "lastUpdate": "2024-10-12"
  },
  "technologies": [
    "typescript",
    "angular",
    "scss",
    "webpack",
    "karma",
    "jasmine",
    "travis-ci",
    "yarn"
  ],
  "purposes": {
    "ui": "angular",
    "styling": "scss",
    "testing": "jasmine",
    "bundling": "webpack",
    "cicd": "travis-ci"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": true,
      "formatting": false
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
      "commitFrequency": 3,
      "issueResponseTime": 3
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 5
    }
  },
  "other": {}
};
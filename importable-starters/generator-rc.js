export default {
  "metadata": {
    "name": "generator-rc",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-rc",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2016-09-22"
  },
  "technologies": [
    "react",
    "typescript",
    "eslint",
    "karma",
    "travis-ci",
    "coveralls.io",
    "saucelabs"
  ],
  "purposes": {
    "ui": "react",
    "testing": "karma",
    "ci": "travis-ci",
    "code coverage": "coveralls.io",
    "typescript support": "typescript",
    "linting": "eslint"
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
      "commitFrequency": 1,
      "issueResponseTime": 1
    },
    "documentation": {
      "readmeCompleteness": 4,
      "setupInstructions": 4,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
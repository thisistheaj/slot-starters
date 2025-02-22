export default {
  "metadata": {
    "name": "js-library-starter-kit",
    "source": "npm",
    "url": "https://www.npmjs.com/package/js-library-starter-kit",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2015-09-13"
  },
  "technologies": [
    "javascript",
    "npm",
    "semantic-release",
    "travis-ci",
    "codecov"
  ],
  "purposes": {
    "versionControl": "travis-ci",
    "codeCoverage": "codecov"
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
      "commitFrequency": 2,
      "issueResponseTime": 2
    },
    "documentation": {
      "readmeCompleteness": 3,
      "setupInstructions": 2,
      "exampleCoverage": 1
    }
  },
  "other": {
    "license": "MIT",
    "mainLanguage": "JavaScript"
  }
};
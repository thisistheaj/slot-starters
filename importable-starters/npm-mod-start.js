export default {
  "metadata": {
    "name": "npm-mod-start",
    "source": "npm",
    "url": "https://www.npmjs.com/package/npm-mod-start",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2019-04-25"
  },
  "technologies": [
    "nodejs",
    "eslint",
    "nyc",
    "travis-ci",
    "coveralls",
    "istanbul"
  ],
  "purposes": {
    "linting": "eslint",
    "codeCoverage": "istanbul",
    "cicd": "travis-ci",
    "coverageReporting": "coveralls"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": false,
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
      "readmeCompleteness": 5,
      "setupInstructions": 4,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
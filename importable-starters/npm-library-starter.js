export default {
  "metadata": {
    "name": "npm-library-starter",
    "source": "enum",
    "url": "https://www.npmjs.com/package/npm-library-starter",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2016-12-29"
  },
  "technologies": [
    "eslint",
    "babel",
    "jest",
    "codecov.io",
    "umd",
    "commonjs",
    "commitizen",
    "semantic-release",
    "travis"
  ],
  "purposes": {
    "linting": "eslint",
    "transpiling": "babel",
    "testing": "jest",
    "coverage": "codecov.io",
    "buildSystem": "umd",
    "moduleSystem": "commonjs",
    "commitConventions": "commitizen",
    "releaseManagement": "semantic-release",
    "integration": "travis"
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
      "readmeCompleteness": 3,
      "setupInstructions": 2,
      "exampleCoverage": 1
    }
  },
  "other": {}
};
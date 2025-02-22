export default {
  "metadata": {
    "name": "nod",
    "source": "github",
    "url": "https://github.com/diegohaz/nod",
    "stars": 359,
    "forks": 36,
    "lastUpdate": "2024-09-24"
  },
  "technologies": [
    "JavaScript",
    "babel",
    "jest",
    "flow",
    "eslint",
    "prettier",
    "travis-ci",
    "documentation",
    "standard-version",
    "yeoman-generator"
  ],
  "purposes": {
    "transpiling": "babel",
    "testing": "jest",
    "typeChecking": "flow",
    "linting": "eslint",
    "formatting": "prettier",
    "ci": "travis-ci",
    "documentation": "documentation",
    "versioning": "standard-version",
    "scaffolding": "yeoman-generator"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
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
      "commitFrequency": 5,
      "issueResponseTime": 5
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 5
    }
  },
  "other": {}
};
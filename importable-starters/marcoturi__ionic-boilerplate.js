export default {
  "metadata": {
    "name": "ionic-boilerplate",
    "source": "github",
    "url": "https://github.com/marcoturi/ionic-boilerplate",
    "stars": 320,
    "forks": 107,
    "lastUpdate": "2024-12-20T18:07:19Z"
  },
  "technologies": [
    "ionic",
    "typescript",
    "karma",
    "protractor",
    "istanbul",
    "codelyzer",
    "gitlab-ci",
    "docker",
    "webpack",
    "rollup",
    "yarn"
  ],
  "purposes": {
    "ui": "ionic",
    "testing": "karma",
    "endToEndTesting": "protractor",
    "documentation": "typedoc",
    "ciCd": "gitlab-ci",
    "packageManagement": "yarn",
    "build": "webpack"
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
      "e2eTests": true,
      "cicd": true
    },
    "deployment": {
      "envConfig": true,
      "dockerfile": true,
      "infraAsCode": false,
      "productionOptimized": true
    },
    "security": {
      "dependencyScanning": false,
      "secretManagement": true,
      "authentication": false
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 4,
      "issueResponseTime": 3
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 4,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
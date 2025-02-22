export default {
  "metadata": {
    "name": "tosin",
    "source": "github",
    "url": "https://github.com/FullHuman/tosin",
    "stars": 150,
    "forks": 2,
    "lastUpdate": "2024-11-30"
  },
  "technologies": [
    "JavaScript",
    "eslint",
    "prettier",
    "jest",
    "circleci",
    "travis-ci",
    "rollup",
    "vuepress"
  ],
  "purposes": {
    "linting": "eslint",
    "formatting": "prettier",
    "testing": "jest",
    "bundling": "rollup",
    "documentation": "vuepress"
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
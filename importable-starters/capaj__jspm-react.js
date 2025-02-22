export default {
  "metadata": {
    "name": "jspm-react",
    "source": "github",
    "url": "https://github.com/capaj/jspm-react",
    "stars": 104,
    "forks": 12,
    "lastUpdate": "2020-06-13"
  },
  "technologies": [
    "React.js",
    "JSPM",
    "MobX",
    "react-router",
    "Mocha",
    "Chai",
    "enzyme",
    "husky"
  ],
  "purposes": {
    "ui": "React.js",
    "bundling": "JSPM",
    "state management": "MobX",
    "routing": "react-router",
    "unit testing": "Mocha",
    "assertion": "Chai",
    "testing utilities": "enzyme",
    "githooks": "husky"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": true,
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
      "cicd": false
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
      "setupInstructions": 4,
      "exampleCoverage": 2
    }
  },
  "other": {
    "deprecated": "This repo is deprecated-other bundlers have won the bundler wars-namely webpack or parcel. Use them instead."
  }
};
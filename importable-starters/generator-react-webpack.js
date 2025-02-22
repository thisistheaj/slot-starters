export default {
  "metadata": {
    "name": "generator-react-webpack",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-react-webpack",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2016-08-12"
  },
  "technologies": [
    "react",
    "webpack",
    "babel",
    "karma",
    "mocha",
    "chai",
    "eslint",
    "postcss"
  ],
  "purposes": {
    "ui": "react",
    "bundling": "webpack",
    "transpilation": "babel",
    "unitTesting": "karma, mocha, chai",
    "linting": "eslint",
    "cssTransformation": "postcss"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
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
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 4
    }
  },
  "other": {}
};
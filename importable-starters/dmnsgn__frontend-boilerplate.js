export default {
  "metadata": {
    "name": "frontend-boilerplate",
    "source": "github",
    "url": "https://github.com/dmnsgn/frontend-boilerplate",
    "stars": 226,
    "forks": 36,
    "lastUpdate": "2024-11-21"
  },
  "technologies": [
    "babel",
    "eslint",
    "prettier",
    "glsl",
    "typescript",
    "webpack",
    "webpack5",
    "sass",
    "less",
    "stylus",
    "postcss"
  ],
  "purposes": {
    "bundling": "webpack",
    "linting": "eslint",
    "formatting": "prettier",
    "transpiling": "babel"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": true,
      "formatting": true
    },
    "testing": {
      "unitTests": false,
      "integrationTests": false,
      "e2eTests": false,
      "cicd": false
    },
    "deployment": {
      "envConfig": true,
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
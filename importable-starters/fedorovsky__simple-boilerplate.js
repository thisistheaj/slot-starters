export default {
  "metadata": {
    "name": "simple-boilerplate",
    "source": "github",
    "url": "https://github.com/fedorovsky/simple-boilerplate",
    "stars": 146,
    "forks": 20,
    "lastUpdate": "2025-02-07"
  },
  "technologies": [
    "webpack",
    "babel",
    "postcss",
    "eslint",
    "stylelint",
    "prettier",
    "devServer",
    "css",
    "html",
    "javascript",
    "npm",
    "npx"
  ],
  "purposes": {
    "bundling": "webpack",
    "transpiling": "babel",
    "styling": "postcss",
    "linting": "eslint",
    "formatting": "prettier",
    "development server": "devServer"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": false,
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
      "commitFrequency": 3,
      "issueResponseTime": 3
    },
    "documentation": {
      "readmeCompleteness": 4,
      "setupInstructions": 4,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
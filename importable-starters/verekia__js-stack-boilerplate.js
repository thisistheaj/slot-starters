export default {
  "metadata": {
    "name": "js-stack-boilerplate",
    "source": "github",
    "url": "https://github.com/verekia/js-stack-boilerplate",
    "stars": 151,
    "forks": 29,
    "lastUpdate": "2025-02-13"
  },
  "technologies": [
    "babel",
    "bootstrap",
    "eslint",
    "express",
    "flow",
    "husky",
    "immutablejs",
    "jest",
    "jss",
    "pm2",
    "react",
    "react-router",
    "redux",
    "server-side-rendering",
    "webpack",
    "webpack-dev-server",
    "yarn"
  ],
  "purposes": {
    "transpiler": "babel",
    "styling": "bootstrap",
    "linting": "eslint",
    "server": "express",
    "staticTypeChecker": "flow",
    "gitHooks": "husky",
    "stateManagement": "immutablejs",
    "unitTesting": "jest",
    "cssInJs": "jss",
    "processManager": "pm2",
    "frontendLibrary": "react",
    "routing": "react-router",
    "stateContainer": "redux",
    "bundler": "webpack",
    "packageManager": "yarn"
  },
  "features": {
    "development": {
      "hotReload": true,
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
      "e2eTests": false,
      "cicd": true
    },
    "deployment": {
      "envConfig": true,
      "dockerfile": false,
      "infraAsCode": false,
      "productionOptimized": true
    },
    "security": {
      "dependencyScanning": true,
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
      "setupInstructions": 3,
      "exampleCoverage": 2
    }
  },
  "other": {}
};
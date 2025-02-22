export default {
  "metadata": {
    "name": "generator-react-flux",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-react-flux",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2015-11-10"
  },
  "technologies": [
    "react",
    "flux",
    "webpack",
    "react-hot-loader",
    "webpack-dev-server",
    "babel",
    "eslint"
  ],
  "purposes": {
    "viewLibrary": "react",
    "stateManagement": "flux",
    "bundling": "webpack",
    "hotReloading": "react-hot-loader",
    "devServer": "webpack-dev-server"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": true,
      "debugConfig": true,
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
      "setupInstructions": 4,
      "exampleCoverage": 4
    }
  }
};
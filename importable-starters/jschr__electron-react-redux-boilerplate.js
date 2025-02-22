export default {
  "metadata": {
    "name": "electron-react-redux-boilerplate",
    "source": "github",
    "url": "https://github.com/jschr/electron-react-redux-boilerplate",
    "stars": 558,
    "forks": 129,
    "lastUpdate": "2025-02-18"
  },
  "technologies": [
    "electron",
    "react",
    "redux",
    "react-router",
    "redux-thunk",
    "redux-actions",
    "redux-localstorage",
    "electron-packager",
    "electron-devtools-installer",
    "electron-mocha",
    "browsersync"
  ],
  "purposes": {
    "framework": "electron",
    "ui": "react",
    "state management": "redux",
    "router": "react-router",
    "middlewares": "redux-thunk",
    "action management": "redux-actions",
    "state persistence": "redux-localstorage",
    "packaging": "electron-packager",
    "devTools installer": "electron-devtools-installer",
    "testing": "electron-mocha",
    "live reloading": "browsersync"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": false,
      "debugConfig": true,
      "devContainer": false,
      "typeChecking": false,
      "linting": false,
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
      "dependencyScanning": true,
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
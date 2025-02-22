export default {
  "metadata": {
    "name": "electron-vue",
    "source": "github",
    "url": "https://github.com/SimulatedGREG/electron-vue",
    "stars": 15477,
    "forks": 1545,
    "lastUpdate": "2025-02-18"
  },
  "technologies": [
    "Vue.js",
    "Electron",
    "Webpack",
    "axios",
    "vue-electron",
    "vue-router",
    "vuex",
    "vue-devtools",
    "devtron",
    "electron-packager",
    "electron-builder",
    "babel",
    "es6",
    "vue-cli",
    "eslint",
    "karma",
    "mocha"
  ],
  "purposes": {
    "frontendFramework": "Vue.js",
    "desktopApplicationFramework": "Electron",
    "router": "vue-router",
    "stateManagement": "vuex",
    "httpClient": "axios",
    "packaging": "electron-builder, electron-packager",
    "devToolsIntegration": "vue-devtools, devtron",
    "moduleBundler": "Webpack",
    "codeTranspiler": "babel",
    "scaffolding": "vue-cli",
    "linting": "eslint",
    "unitTesting": "karma + mocha",
    "e2eTesting": "spectron + mocha"
  },
  "features": {
    "development": {
      "hotReload": true,
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
      "e2eTests": true,
      "cicd": true
    },
    "deployment": {
      "envConfig": false,
      "dockerfile": false,
      "infraAsCode": false,
      "productionOptimized": true
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
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 4
    }
  }
};
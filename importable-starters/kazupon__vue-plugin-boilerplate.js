export default {
  "metadata": {
    "name": "vue-plugin-boilerplate",
    "source": "github",
    "url": "https://github.com/kazupon/vue-plugin-boilerplate",
    "stars": 146,
    "forks": 9,
    "lastUpdate": "2024-04-06"
  },
  "technologies": [
    "Vue.js",
    "TypeScript",
    "babel",
    "buble",
    "eslint",
    "webpack",
    "rollup",
    "power-assert",
    "mocha",
    "karma",
    "istanbul",
    "chrome headless",
    "nightwatch.js"
  ],
  "purposes": {
    "framework": "Vue.js",
    "compiler": "TypeScript",
    "linter": "eslint",
    "testAssertion": "power-assert",
    "testFramework": "mocha",
    "testRunner": "karma",
    "testCoverage": "istanbul",
    "headlessBrowser": "chrome headless",
    "e2eTestFramework": "nightwatch.js"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
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
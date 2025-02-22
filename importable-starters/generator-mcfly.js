export default {
  "metadata": {
    "name": "generator-mcfly",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-mcfly",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2016-03-28"
  },
  "technologies": [
    "angularjs",
    "browserify",
    "webpack",
    "ionic",
    "angular-ui-bootstrap",
    "angular-material",
    "sass",
    "less",
    "karma",
    "gulp",
    "cordova",
    "browser-sync"
  ],
  "purposes": {
    "frontendFramework": "angularjs",
    "moduleBundler": "webpack",
    "mobileWrapper": "cordova",
    "uiLibrary": "angular-material",
    "stylePreprocessor": "sass",
    "unitTesting": "karma",
    "taskRunner": "gulp",
    "liveReload": "browser-sync"
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
      "exampleCoverage": 3
    }
  },
  "other": {}
};
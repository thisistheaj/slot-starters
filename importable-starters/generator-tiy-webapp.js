export default {
  "metadata": {
    "name": "generator-tiy-webapp",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-tiy-webapp",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2015-02-25"
  },
  "technologies": [
    "gulp",
    "html",
    "jquery",
    "normalize.css",
    "mocha",
    "chai",
    "sass",
    "bourbon",
    "neat",
    "underscore"
  ],
  "purposes": {
    "task-runner": "gulp",
    "styling": "sass, bourbon, neat",
    "templating": "html",
    "javascript": "jquery, underscore",
    "css-reset": "normalize.css",
    "testing": "mocha, chai"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": false,
      "linting": false,
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
      "readmeCompleteness": 3,
      "setupInstructions": 4,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
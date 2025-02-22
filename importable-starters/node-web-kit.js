export default {
  "metadata": {
    "name": "node-web-kit",
    "source": "npm",
    "url": "https://www.npmjs.com/package/node-web-kit",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2017-09-20"
  },
  "technologies": [
    "node",
    "express",
    "gulp",
    "less",
    "sass",
    "scss",
    "browserify",
    "nunjucks"
  ],
  "purposes": {
    "mvc": "express",
    "buildSystem": "gulp",
    "cssPreprocessor": "less/sass",
    "javascriptBundler": "browserify",
    "templateEngine": "nunjucks"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": true,
      "devContainer": false,
      "typeChecking": false,
      "linting": false,
      "formatting": false
    },
    "testing": {
      "unitTests": false,
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
      "readmeCompleteness": 4,
      "setupInstructions": 5,
      "exampleCoverage": 3
    }
  },
  "other": {
    "license": "MIT",
    "configFieldChanges": "API_ENDPOINT changed to API_ENDPOINTS"
  }
};
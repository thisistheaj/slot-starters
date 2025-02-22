export default {
  "metadata": {
    "name": "generator-arcgis-js-app",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-arcgis-js-app",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2016-07-20"
  },
  "technologies": [
    "yeoman",
    "arcgis",
    "esri",
    "grunt",
    "eslint",
    "stylus",
    "sass",
    "livereload",
    "babel"
  ],
  "purposes": {
    "ui": "arcgis",
    "linting": "eslint",
    "development": "yeoman",
    "taskRunner": "grunt",
    "cssPreprocessor": "stylus, sass",
    "compilation": "babel"
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
      "unitTests": false,
      "integrationTests": false,
      "e2eTests": true,
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
      "readmeCompleteness": 4,
      "setupInstructions": 5,
      "exampleCoverage": 3
    }
  }
};
export default {
  "metadata": {
    "name": "generator-north",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-north",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2014-09-22"
  },
  "technologies": [
    "yeoman",
    "sass",
    "compass",
    "bower",
    "npm",
    "jshint",
    "grunt",
    "gulp",
    "browsersync",
    "rubygems",
    "git"
  ],
  "purposes": {
    "scaffolding": "yeoman",
    "cssPreprocessing": "sass",
    "packageManagement": "bower",
    "scriptLinting": "jshint",
    "taskRunner": "grunt, gulp",
    "liveReloading": "browsersync",
    "dependencyManagement": "npm, rubygems",
    "versionControl": "git"
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
      "exampleCoverage": 3
    }
  },
  "other": {}
};
export default {
  "metadata": {
    "name": "generator-wordpress",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-wordpress",
    "stars": null,
    "forks": null,
    "lastUpdate": "2019-12-02"
  },
  "technologies": [
    "wordpress",
    "yeoman",
    "git",
    "vagrant",
    "npm",
    "grunt",
    "sass",
    "jshint",
    "livereload",
    "bower",
    "requirejs"
  ],
  "purposes": {
    "main": "wordpress",
    "scaffolding": "yeoman",
    "versionControl": "git",
    "virtualization": "vagrant",
    "packageManagement": "npm",
    "taskRunner": "grunt",
    "cssPreprocessing": "sass",
    "staticCodeAnalysis": "jshint",
    "liveReloading": "livereload",
    "dependencyManagement": "bower",
    "moduleBundler": "requirejs"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
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
      "envConfig": true,
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
      "setupInstructions": 4,
      "exampleCoverage": 4
    }
  },
  "other": null
};
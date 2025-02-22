export default {
  "metadata": {
    "name": "generator-cdd",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-cdd",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2015-12-04"
  },
  "technologies": [
    "gulp",
    "scss",
    "libsass",
    "jslint",
    "BrowserSync",
    "Image optimization",
    "Bower",
    "pixrem"
  ],
  "purposes": {
    "cssPreprocessor": "scss",
    "javascriptLinter": "jslint",
    "synchronization": "BrowserSync",
    "dependencyManagement": "Bower"
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
      "readmeCompleteness": 4,
      "setupInstructions": 4,
      "exampleCoverage": 4
    }
  },
  "other": {}
};
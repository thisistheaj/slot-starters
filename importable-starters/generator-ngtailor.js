export default {
  "metadata": {
    "name": "generator-ngtailor",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-ngtailor",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2015-02-10"
  },
  "technologies": [
    "Yeoman",
    "AngularJS",
    "Grunt",
    "Bower",
    "JSHint",
    "CSSLint",
    "Karma",
    "Jasmine",
    "ng-min",
    "grunt-usemin"
  ],
  "purposes": {
    "framework": "AngularJS",
    "scaffolding": "Yeoman",
    "builder": "Grunt",
    "packageManager": "Bower",
    "linting": "JSHint",
    "cssLinting": "CSSLint",
    "unitTesting": "Karma with Jasmine",
    "minification": "ng-min",
    "bundleManagement": "grunt-usemin"
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
      "setupInstructions": 4,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
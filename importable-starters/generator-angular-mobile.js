export default {
  "metadata": {
    "name": "generator-angular-mobile",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-angular-mobile",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2014-10-22"
  },
  "technologies": [
    "AngularJS",
    "Cordova",
    "ngCordova",
    "ngCordovaMocks",
    "Yeoman",
    "NPM",
    "Node.js",
    "Grunt",
    "Bower",
    "Jasmine",
    "Protractor"
  ],
  "purposes": {
    "framework": "AngularJS",
    "mobileDevelopment": "Cordova",
    "mocking": "ngCordovaMocks",
    "scaffolding": "Yeoman",
    "packageManagement": "NPM",
    "runtimeEnvironment": "Node.js",
    "taskRunner": "Grunt",
    "dependencyManagement": "Bower",
    "unitTesting": "Jasmine",
    "e2eTesting": "Protractor"
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
      "unitTests": true,
      "integrationTests": false,
      "e2eTests": true,
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
  }
};
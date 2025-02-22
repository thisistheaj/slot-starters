export default {
  "metadata": {
    "name": "generator-ngstone",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-ngstone",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2015-07-24"
  },
  "technologies": [
    "AngularJS",
    "Yeoman",
    "Node.js",
    "Grunt",
    "Bower",
    "PhantomJS",
    "Protractor",
    "Karma"
  ],
  "purposes": {
    "framework": "AngularJS",
    "scaffolding": "Yeoman",
    "package_manager": "Node.js",
    "task_runner": "Grunt",
    "client_package_manager": "Bower",
    "unit_testing": "Karma",
    "e2e_testing": "Protractor",
    "headless_testing": "PhantomJS"
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
      "e2eTests": true,
      "cicd": false
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
      "setupInstructions": 4,
      "exampleCoverage": 4
    }
  },
  "other": {}
};
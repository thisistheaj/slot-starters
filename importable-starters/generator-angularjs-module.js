export default {
  "metadata": {
    "name": "generator-angularjs-module",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-angularjs-module",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2018-09-03"
  },
  "technologies": [
    "AngularJS",
    "npm",
    "Yeoman",
    "Karma",
    "PhantomJS",
    "Chrome",
    "Firefox",
    "gulp",
    "Travis CI",
    "Coveralls"
  ],
  "purposes": {
    "moduleGenerator": "Yeoman",
    "framework": "AngularJS",
    "testing": "Karma",
    "taskRunner": "gulp",
    "continuousIntegration": "Travis CI",
    "coverageReporting": "Coveralls"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
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
      "cicd": true
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
      "exampleCoverage": 3
    }
  },
  "other": {}
};
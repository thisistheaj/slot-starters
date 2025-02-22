export default {
  "metadata": {
    "name": "generator-jspm-lib",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-jspm-lib",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2015-05-11"
  },
  "technologies": [
    "Yeoman",
    "ES6",
    "JSPM",
    "karma-jspm",
    "Mocha",
    "Chai",
    "Sinon",
    "Travis",
    "Sauce Labs",
    "gulp",
    "npm"
  ],
  "purposes": {
    "framework": "Yeoman",
    "language": "ES6",
    "testing": "Mocha, Chai, Sinon, karma-jspm",
    "continuousIntegration": "Travis",
    "packageManager": "JSPM, npm",
    "taskRunner": "gulp"
  },
  "features": {
    "development": {
      "hotReload": false,
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
      "cicd": true
    },
    "deployment": {
      "envConfig": true,
      "dockerfile": false,
      "infraAsCode": false,
      "productionOptimized": false
    },
    "security": {
      "dependencyScanning": false,
      "secretManagement": true,
      "authentication": false
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 1,
      "issueResponseTime": 2
    },
    "documentation": {
      "readmeCompleteness": 3,
      "setupInstructions": 4,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
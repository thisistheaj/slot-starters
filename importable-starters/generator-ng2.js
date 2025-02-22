export default {
  "metadata": {
    "name": "generator-ng2",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-ng2",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2017-04-07"
  },
  "technologies": [
    "Yeoman",
    "npm",
    "Angular 2.0.0-rc.1",
    "TypeScript",
    "Typings",
    "Karma",
    "SystemJS",
    "JSPM",
    "Gulp"
  ],
  "purposes": {
    "dependencyManagement": "npm",
    "projectGeneration": "Yeoman",
    "scripting": "TypeScript",
    "moduleBundling": "SystemJS",
    "dependencyLoading": "JSPM",
    "taskRunning": "Gulp",
    "testFramework": "Karma"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
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
      "readmeCompleteness": 3,
      "setupInstructions": 3,
      "exampleCoverage": 2
    }
  },
  "other": {}
};
export default {
  "metadata": {
    "name": "generator-toolbox",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-toolbox",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2018-06-27"
  },
  "technologies": [
    "yeoman-generator",
    "bootstrap-sass",
    "fabricator",
    "gulp"
  ],
  "purposes": {
    "framework": "yeoman-generator",
    "styleguide": "fabricator",
    "css-framework": "bootstrap-sass",
    "task-runner": "gulp"
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
      "commitFrequency": 2,
      "issueResponseTime": 3
    },
    "documentation": {
      "readmeCompleteness": 4,
      "setupInstructions": 5,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
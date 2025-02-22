export default {
  "metadata": {
    "name": "generator-adaptiveme",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-adaptiveme",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2015-11-13"
  },
  "technologies": [
    "yeoman-generator",
    "html5",
    "grunt",
    "bower",
    "npm"
  ],
  "purposes": {
    "scaffolding": "yeoman-generator",
    "packageManager": "npm",
    "taskRunner": "grunt",
    "dependencyManagement": "bower"
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
      "unitTests": false,
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
      "commitFrequency": 2,
      "issueResponseTime": 1
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
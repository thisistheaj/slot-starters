export default {
  "metadata": {
    "name": "generator-nodena-api-php",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-nodena-api-php",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2018-03-26"
  },
  "technologies": [
    "php",
    "yeoman-generator",
    "gulp",
    "browsersync",
    "composer"
  ],
  "purposes": {
    "api": "php",
    "scaffolding": "yeoman-generator",
    "taskRunner": "gulp",
    "autoRefresh": "browsersync",
    "dependencyManagement": "composer"
  },
  "features": {
    "development": {
      "hotReload": true,
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
      "readmeCompleteness": 3,
      "setupInstructions": 5,
      "exampleCoverage": 1
    }
  },
  "other": {}
};
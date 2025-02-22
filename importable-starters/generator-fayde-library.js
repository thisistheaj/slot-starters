export default {
  "metadata": {
    "name": "generator-fayde-library",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-fayde-library",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2016-02-06"
  },
  "technologies": [
    "yeoman-generator",
    "gulp",
    "fayde"
  ],
  "purposes": {
    "scaffolding": "yeoman-generator",
    "build-system": "gulp",
    "framework": "fayde"
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
      "exampleCoverage": 3
    }
  },
  "other": {}
};
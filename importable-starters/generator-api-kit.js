export default {
  "metadata": {
    "name": "generator-api-kit",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-api-kit",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2016-01-20"
  },
  "technologies": [
    "yeoman",
    "node.js",
    "express",
    "mongoose",
    "mystique"
  ],
  "purposes": {
    "scaffolding": "yeoman",
    "serverFramework": "express",
    "orm": "mongoose",
    "dataTransformation": "mystique"
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
      "authentication": true
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 5,
      "issueResponseTime": 5
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 5
    }
  },
  "other": {}
};
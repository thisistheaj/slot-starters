export default {
  "metadata": {
    "name": "generator-fwsp-hydra",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-fwsp-hydra",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2017-03-27"
  },
  "technologies": [
    "yeoman-generator",
    "hydra",
    "npm"
  ],
  "purposes": {
    "microservice-scaffolding": "yeoman-generator",
    "service-framework": "hydra"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": false,
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
      "envConfig": true,
      "dockerfile": false,
      "infraAsCode": false,
      "productionOptimized": false
    },
    "security": {
      "dependencyScanning": false,
      "secretManagement": true,
      "authentication": true
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 1,
      "issueResponseTime": 1
    },
    "documentation": {
      "readmeCompleteness": 4,
      "setupInstructions": 5,
      "exampleCoverage": 5
    }
  },
  "other": {}
};
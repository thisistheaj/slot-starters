export default {
  "metadata": {
    "name": "generator-spring-microservice",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-spring-microservice",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2018-03-12"
  },
  "technologies": [
    "Java",
    "Maven",
    "Spring",
    "Netflix",
    "Docker",
    "Yoeman"
  ],
  "purposes": {
    "buildSystem": "Maven",
    "framework": "Spring",
    "serviceDiscovery": "Netflix",
    "containerization": "Docker",
    "scaffolding": "Yoeman"
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
      "integrationTests": true,
      "e2eTests": false,
      "cicd": false
    },
    "deployment": {
      "envConfig": true,
      "dockerfile": true,
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
  "other": {
    "license": "MIT"
  }
};
export default {
  "metadata": {
    "name": "generator-fabric",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-fabric",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2022-02-04"
  },
  "technologies": [
    "Yeoman",
    "npm",
    "Node.js",
    "JavaScript",
    "Go",
    "TypeScript"
  ],
  "purposes": {
    "chaincodeGenerator": "Yeoman",
    "packageManagement": "npm",
    "programmingLanguages": "JavaScript, Go, TypeScript"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": true,
      "formatting": true
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
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 4
    }
  },
  "other": {
    "experimentalFeatures": "TypeScript support"
  }
};
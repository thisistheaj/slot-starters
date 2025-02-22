export default {
  "metadata": {
    "name": "aqua",
    "source": "github",
    "url": "https://github.com/jedireza/aqua",
    "stars": 1378,
    "forks": 356,
    "lastUpdate": "2025-02-16"
  },
  "technologies": [
    "JavaScript",
    "hapi",
    "MongoDB",
    "React",
    "Redux",
    "React Router",
    "Gulp",
    "bcrypt",
    "dotenv"
  ],
  "purposes": {
    "serverFramework": "hapi",
    "database": "MongoDB",
    "frontendFramework": "React",
    "stateManagement": "Redux",
    "routing": "React Router",
    "buildSystem": "Gulp",
    "passwordHashing": "bcrypt",
    "environmentVariablesManagement": "dotenv"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": true,
      "debugConfig": true,
      "devContainer": false,
      "typeChecking": false,
      "linting": true,
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
      "authentication": true
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 2,
      "issueResponseTime": 2
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 4
    }
  },
  "other": {
    "maintenanceStatus": "No longer maintained"
  }
};
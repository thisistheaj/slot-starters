export default {
  "metadata": {
    "name": "hbuild-cli",
    "source": "npm",
    "url": "https://www.npmjs.com/package/hbuild-cli",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2017-06-30"
  },
  "technologies": [
    "npm",
    "bash",
    "git"
  ],
  "purposes": {
    "packageManagement": "npm",
    "versionControl": "git",
    "scripting": "bash"
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
      "envConfig": true,
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
      "commitFrequency": 3,
      "issueResponseTime": 3
    },
    "documentation": {
      "readmeCompleteness": 4,
      "setupInstructions": 4,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
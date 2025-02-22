export default {
  "metadata": {
    "name": "hardhat-project-template-ts",
    "source": "enum",
    "url": "https://github.com/pcaversaccio/hardhat-project-template-ts",
    "stars": 221,
    "forks": 47,
    "lastUpdate": "2025-02-18T09:41:23Z"
  },
  "technologies": [
    "TypeScript",
    "Hardhat",
    "Solidity",
    "Foundry"
  ],
  "purposes": {
    "development": "TypeScript",
    "testing": "Hardhat",
    "smartContracts": "Solidity"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": false,
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
      "authentication": false
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 4,
      "issueResponseTime": 4
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 4
    }
  },
  "other": {}
};
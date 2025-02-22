export default {
  "metadata": {
    "name": "solidity-template",
    "source": "enum",
    "url": "https://github.com/mattstam/solidity-template",
    "stars": 116,
    "forks": 17,
    "lastUpdate": "2024-11-24T21:22:37Z"
  },
  "technologies": [
    "solidity",
    "typescript",
    "hardhat",
    "foundry",
    "ethersjs",
    "web3",
    "npm",
    "slither",
    "eslint",
    "solhint"
  ],
  "purposes": {
    "development": "typescript",
    "testing": "hardhat",
    "contractTesting": "foundry",
    "linting": "eslint",
    "security": "slither"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": true,
      "devContainer": false,
      "typeChecking": true,
      "linting": true,
      "formatting": false
    },
    "testing": {
      "unitTests": true,
      "integrationTests": true,
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
      "dependencyScanning": true,
      "secretManagement": false,
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
      "exampleCoverage": 5
    }
  },
  "other": {}
};
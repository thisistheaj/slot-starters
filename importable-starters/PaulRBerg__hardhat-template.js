export default {
  "metadata": {
    "name": "hardhat-template",
    "source": "github",
    "url": "https://github.com/PaulRBerg/hardhat-template",
    "stars": 1976,
    "forks": 564,
    "lastUpdate": "2025-02-18"
  },
  "technologies": [
    "TypeScript",
    "Solidity",
    "Hardhat",
    "Ethers",
    "TypeChain",
    "Solhint",
    "Solcover",
    "Prettier Plugin Solidity"
  ],
  "purposes": {
    "smart-contract-development": "Solidity",
    "compilation": "Hardhat",
    "typescript-bindings": "TypeChain",
    "ethereum-interactions": "Ethers",
    "linting": "Solhint",
    "code-coverage": "Solcover",
    "code-formatting": "Prettier Plugin Solidity"
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
export default {
  "metadata": {
    "name": "create-dapp-solana-nextjs",
    "source": "github",
    "url": "https://github.com/thuglabs/create-dapp-solana-nextjs",
    "stars": 368,
    "forks": 182,
    "lastUpdate": "2025-02-05T10:01:30Z"
  },
  "technologies": [
    "typescript",
    "nextjs",
    "tailwind",
    "daisyui",
    "@solana/wallet-adapter",
    "@solana/web3.js"
  ],
  "purposes": {
    "ui": "nextjs",
    "styling": "tailwind",
    "blockchainInteraction": "@solana/web3.js"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": true,
      "debugConfig": true,
      "devContainer": false,
      "typeChecking": true,
      "linting": true,
      "formatting": true
    },
    "testing": {
      "unitTests": false,
      "integrationTests": false,
      "e2eTests": false,
      "cicd": true
    },
    "deployment": {
      "envConfig": true,
      "dockerfile": false,
      "infraAsCode": false,
      "productionOptimized": true
    },
    "security": {
      "dependencyScanning": true,
      "secretManagement": false,
      "authentication": true
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 4,
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
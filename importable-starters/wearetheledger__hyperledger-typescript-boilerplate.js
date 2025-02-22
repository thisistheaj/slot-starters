export default {
  "metadata": {
    "name": "hyperledger-typescript-boilerplate",
    "source": "github",
    "url": "https://github.com/wearetheledger/hyperledger-typescript-boilerplate",
    "stars": 114,
    "forks": 35,
    "lastUpdate": "2024-08-29"
  },
  "technologies": [
    "Hyperledger Fabric",
    "TypeScript",
    "Nest",
    "Express",
    "Swagger (OpenAPI)",
    "Pusher",
    "Auth0"
  ],
  "purposes": {
    "api": "Express",
    "backendFramework": "Nest",
    "authentication": "Auth0",
    "realTimeCommunication": "Pusher",
    "documentation": "Swagger (OpenAPI)",
    "blockchainIntegration": "Hyperledger Fabric"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": false,
      "formatting": false
    },
    "testing": {
      "unitTests": false,
      "integrationTests": false,
      "e2eTests": true,
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
      "authentication": true
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 3,
      "issueResponseTime": 3
    },
    "documentation": {
      "readmeCompleteness": 4,
      "setupInstructions": 5,
      "exampleCoverage": 3
    }
  },
  "other": {
    "notaProductionReadyWarning": "This boilerplate is recommended for prototyping only. Some practices are not suitable for production."
  }
};
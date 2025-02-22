export default {
  "metadata": {
    "name": "typescript-starter",
    "source": "github",
    "url": "https://github.com/bitjson/typescript-starter",
    "stars": 3510,
    "forks": 249,
    "lastUpdate": "2025-02-17"
  },
  "technologies": [
    "TypeScript",
    "Node.js",
    "AVA",
    "CircleCI",
    "Travis",
    "AppVeyor",
    "Prettier",
    "Standard-Version",
    "TSLint",
    "TypeDoc",
    "ESLint",
    "nyc"
  ],
  "purposes": {
    "testing": "AVA",
    "linting": "ESLint",
    "codeCoverage": "nyc",
    "documentation": "TypeDoc",
    "formatting": "Prettier",
    "versioning": "Standard-Version"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
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
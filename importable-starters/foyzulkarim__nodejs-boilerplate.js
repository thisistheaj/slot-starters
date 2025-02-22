export default {
  "metadata": {
    "name": "nodejs-boilerplate",
    "source": "github",
    "url": "https://github.com/foyzulkarim/nodejs-boilerplate",
    "stars": 146,
    "forks": 66,
    "lastUpdate": "2025-02-17"
  },
  "technologies": [
    "Node.js",
    "Express",
    "JavaScript",
    "Docker",
    "ESLint",
    "Prettier",
    "npm"
  ],
  "purposes": {
    "serverFramework": "Express",
    "language": "JavaScript",
    "containerization": "Docker",
    "codeQuality": "ESLint",
    "formatting": "Prettier",
    "packageManager": "npm"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": false,
      "linting": true,
      "formatting": true
    },
    "testing": {
      "unitTests": true,
      "integrationTests": true,
      "e2eTests": true,
      "cicd": false
    },
    "deployment": {
      "envConfig": false,
      "dockerfile": true,
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
      "exampleCoverage": 4
    }
  },
  "other": {}
};
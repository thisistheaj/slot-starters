export default {
  "metadata": {
    "name": "express-babel",
    "source": "github",
    "url": "https://github.com/vmasto/express-babel",
    "stars": 615,
    "forks": 113,
    "lastUpdate": "2025-01-14"
  },
  "technologies": [
    "Express.js",
    "Babel",
    "ESLint",
    "Jest",
    "dotenv",
    "babel-preset-env",
    "nodemon",
    "supertest"
  ],
  "purposes": {
    "webFramework": "Express.js",
    "transpilation": "Babel",
    "linting": "ESLint",
    "testing": "Jest",
    "environmentVariables": "dotenv"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": false,
      "linting": true,
      "formatting": false
    },
    "testing": {
      "unitTests": true,
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
      "setupInstructions": 5,
      "exampleCoverage": 4
    }
  },
  "other": {}
};
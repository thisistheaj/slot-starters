export default {
  "metadata": {
    "name": "generator-babel-boilerplate",
    "source": "github",
    "url": "https://github.com/babel/generator-babel-boilerplate",
    "stars": 379,
    "forks": 55,
    "lastUpdate": "2025-01-29"
  },
  "technologies": [
    "ES2015",
    "UMD",
    "Mocha",
    "Chai",
    "Sinon",
    "Babel",
    "Yeoman",
    "ESLint",
    "npm"
  ],
  "purposes": {
    "transpilation": "Babel",
    "testing": "Mocha, Chai, Sinon",
    "scaffolding": "Yeoman",
    "linting": "ESLint",
    "packageManagement": "npm"
  },
  "features": {
    "development": {
      "hotReload": false,
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
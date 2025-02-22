export default {
  "metadata": {
    "name": "expressly",
    "source": "npm",
    "url": "https://www.npmjs.com/package/expressly",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2017-07-07"
  },
  "technologies": [
    "Express",
    "MongoDB",
    "Node.js",
    "Passport",
    "Bcrypt",
    "JWT",
    "Babel",
    "Webpack",
    "compression",
    "cross-env",
    "express-validation",
    "helmet",
    "joi",
    "morgan",
    "rimraf"
  ],
  "purposes": {
    "webFramework": "Express",
    "database": "MongoDB",
    "authentication": "Passport",
    "passwordEncryption": "Bcrypt",
    "jwt": "JWT",
    "transpiler": "Babel",
    "bundler": "Webpack",
    "compression": "compression",
    "environmentVariables": "cross-env",
    "requestValidation": "express-validation",
    "securityHeaders": "helmet",
    "objectSchemaValidation": "joi",
    "logging": "morgan",
    "fileManagement": "rimraf"
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
      "unitTests": false,
      "integrationTests": false,
      "e2eTests": false,
      "cicd": false
    },
    "deployment": {
      "envConfig": true,
      "dockerfile": false,
      "infraAsCode": false,
      "productionOptimized": true
    },
    "security": {
      "dependencyScanning": false,
      "secretManagement": false,
      "authentication": true
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 1,
      "issueResponseTime": 1
    },
    "documentation": {
      "readmeCompleteness": 4,
      "setupInstructions": 2,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
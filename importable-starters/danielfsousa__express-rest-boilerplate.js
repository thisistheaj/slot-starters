export default {
  "metadata": {
    "name": "express-rest-boilerplate",
    "source": "github",
    "url": "https://github.com/danielfsousa/express-rest-boilerplate",
    "stars": 2369,
    "forks": 630,
    "lastUpdate": "2025-02-18"
  },
  "technologies": [
    "JavaScript",
    "Express",
    "MongoDB",
    "Mongoose",
    "Docker",
    "Yarn",
    "Helmet",
    "dotenv",
    "joi",
    "compression",
    "eslint",
    "mocha",
    "chai",
    "sinon",
    "istanbul",
    "coveralls",
    "husky",
    "morgan",
    "passport",
    "apidoc",
    "travisCI",
    "pm2"
  ],
  "purposes": {
    "webFramework": "Express",
    "database": "MongoDB",
    "orm": "Mongoose",
    "packageManager": "Yarn",
    "securityHeaders": "Helmet",
    "environmentVariables": "dotenv",
    "validation": "joi",
    "compression": "compression",
    "linting": "eslint",
    "codeCoverage": "istanbul",
    "continuousIntegration": "travisCI",
    "logging": "morgan",
    "authentication": "passport",
    "documentation": "apidoc",
    "monitoring": "pm2"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": false,
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
      "dockerfile": true,
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
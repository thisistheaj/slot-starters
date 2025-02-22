export default {
  "metadata": {
    "name": "koalerplate",
    "source": "github",
    "url": "https://github.com/dbalas/koalerplate",
    "stars": 124,
    "forks": 26,
    "lastUpdate": "2024-12-26"
  },
  "technologies": [
    "JavaScript",
    "Koa",
    "Koa-router",
    "Koa-bodyparser",
    "@koa/cors",
    "koa-respond",
    "koa-helmet",
    "nodemon",
    "dotenv"
  ],
  "purposes": {
    "serverApplicationFramework": "Koa",
    "routing": "Koa-router",
    "requestParsing": "Koa-bodyparser",
    "crossOriginResourceSharing": "@koa/cors",
    "responseHelperFunctions": "koa-respond",
    "securityHeaders": "koa-helmet",
    "runtimeEnvironmentManagement": "dotenv",
    "developmentAutoRestart": "nodemon"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": false,
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
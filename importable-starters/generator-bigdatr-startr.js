export default {
  "metadata": {
    "name": "generator-bigdatr-startr",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-bigdatr-startr",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2017-09-21"
  },
  "technologies": [
    "yeoman",
    "grunt",
    "s3_website",
    "webpack",
    "file-loader",
    "static-site-generator-webpack-plugin",
    "ava",
    "nyc",
    "jsdonk",
    "babel",
    "yarn",
    "serverless",
    "serverless-offline"
  ],
  "purposes": {
    "scaffolding": "yeoman",
    "taskRunner": "grunt",
    "deployment": "s3_website",
    "assetManagement": "file-loader",
    "staticSiteGeneration": "static-site-generator-webpack-plugin",
    "testing": "ava",
    "codeCoverage": "nyc",
    "documentation": "jsdonk",
    "bundling": "webpack",
    "transpilation": "babel",
    "packageManagement": "yarn",
    "serverless": "serverless",
    "localDevelopment": "serverless-offline"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
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
      "envConfig": false,
      "dockerfile": false,
      "infraAsCode": false,
      "productionOptimized": true
    },
    "security": {
      "dependencyScanning": false,
      "secretManagement": false,
      "authentication": false
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 1,
      "issueResponseTime": 1
    },
    "documentation": {
      "readmeCompleteness": 3,
      "setupInstructions": 4,
      "exampleCoverage": 3
    }
  },
  "other": {
    "lastUpdatedYear": 2017
  }
};
export default {
  "metadata": {
    "name": "rest-api-starter",
    "source": "npm",
    "url": "https://www.npmjs.com/package/rest-api-starter",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2017-03-17"
  },
  "technologies": [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Bluebird",
    "Winston",
    "Config",
    "superagent-promise"
  ],
  "purposes": {
    "server": "Express.js",
    "database": "MongoDB",
    "promiseLibrary": "Bluebird",
    "logger": "Winston",
    "config": "Config",
    "httpClient": "superagent-promise"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
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
      "commitFrequency": 2,
      "issueResponseTime": 2
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 4,
      "exampleCoverage": 4
    }
  },
  "other": {
    "nodeVersion": "Node.js 4+ and 6+"
  }
};
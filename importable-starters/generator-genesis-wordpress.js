export default {
  "metadata": {
    "name": "generator-genesis-wordpress",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-genesis-wordpress",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2016-05-26"
  },
  "technologies": [
    "yeoman",
    "wordpress",
    "javascript"
  ],
  "purposes": {
    "scaffolding": "yeoman",
    "cms": "wordpress",
    "programming": "javascript"
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
      "commitFrequency": 1,
      "issueResponseTime": 1
    },
    "documentation": {
      "readmeCompleteness": 4,
      "setupInstructions": 4,
      "exampleCoverage": 3
    }
  },
  "other": {
    "generatorOptions": {
      "genesisPath": "~/.cache/yeoman/genesis/wordpress/{{ tag }}",
      "genesisVersion": "latest version"
    }
  }
};
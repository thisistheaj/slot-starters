export default {
  "metadata": {
    "name": "generator-plugin-wp",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-plugin-wp",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2017-08-13"
  },
  "technologies": [
    "WordPress",
    "Yeoman",
    "npm",
    "node",
    "PHP",
    "Travis CI",
    "Composer",
    "CMB2"
  ],
  "purposes": {
    "scaffolding": "Yeoman",
    "runtime": "node",
    "packageManager": "npm",
    "automation": "Travis CI",
    "dependencyManagement": "Composer",
    "customFieldManagement": "CMB2"
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
      "commitFrequency": 1,
      "issueResponseTime": 1
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 5
    }
  }
};
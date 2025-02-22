export default {
  "metadata": {
    "name": "generator-wp-make",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-wp-make",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2017-01-22"
  },
  "technologies": [
    "yeoman",
    "npm",
    "composer",
    "bower",
    "grunt",
    "phpunit",
    "paratest",
    "wordpress",
    "mocha",
    "chai",
    "WP_Mock"
  ],
  "purposes": {
    "dependency_manager": "composer",
    "automation_tool": "grunt",
    "scaffolding": "yeoman"
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
      "commitFrequency": 2,
      "issueResponseTime": 3
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
export default {
  "metadata": {
    "name": "generator-mdsk",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-mdsk",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2017-06-04"
  },
  "technologies": [
    "Drupal",
    "drupalvm",
    "Behat",
    "gulp",
    "aquifer",
    "vagrant",
    "ansible",
    "wercker",
    "CircleCI",
    "eslint",
    "phplint",
    "drupalcs"
  ],
  "purposes": {
    "infrastructureManagement": "ansible",
    "localDevelopment": "vagrant",
    "testingFramework": "Behat",
    "buildTool": "gulp",
    "cms": "Drupal",
    "deploymentAutomation": "aquifer"
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
      "unitTests": false,
      "integrationTests": false,
      "e2eTests": true,
      "cicd": true
    },
    "deployment": {
      "envConfig": true,
      "dockerfile": false,
      "infraAsCode": true,
      "productionOptimized": false
    },
    "security": {
      "dependencyScanning": false,
      "secretManagement": true,
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
      "setupInstructions": 3,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
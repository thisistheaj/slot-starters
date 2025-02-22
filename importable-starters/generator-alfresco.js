export default {
  "metadata": {
    "name": "generator-alfresco",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-alfresco",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2019-05-10"
  },
  "technologies": [
    "alfresco",
    "yeoman",
    "node.js",
    "maven",
    "Java",
    "bash"
  ],
  "purposes": {
    "contentManagement": "alfresco",
    "scaffolding": "yeoman",
    "backendEnvironment": "Java",
    "projectManagement": "maven",
    "scripting": "bash"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": true,
      "devContainer": false,
      "typeChecking": false,
      "linting": false,
      "formatting": false
    },
    "testing": {
      "unitTests": false,
      "integrationTests": false,
      "e2eTests": false,
      "cicd": true
    },
    "deployment": {
      "envConfig": true,
      "dockerfile": false,
      "infraAsCode": false,
      "productionOptimized": false
    },
    "security": {
      "dependencyScanning": true,
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
    "popularCommands": "yo alfresco:amp, yo alfresco:module, yo alfresco:webscript"
  }
};
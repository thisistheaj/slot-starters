export default {
  "metadata": {
    "name": "svelte-component-template",
    "source": "github",
    "url": "https://github.com/YogliB/svelte-component-template",
    "stars": 337,
    "forks": 19,
    "lastUpdate": "2025-02-07"
  },
  "technologies": [
    "svelte",
    "javascript",
    "storybook",
    "cypress",
    "chromatic",
    "svelte-preprocess",
    "eslint",
    "prettier"
  ],
  "purposes": {
    "framework": "svelte",
    "testing": "storybook, cypress, chromatic",
    "preprocessing": "svelte-preprocess",
    "linting": "eslint",
    "formatting": "prettier"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": false,
      "linting": true,
      "formatting": true
    },
    "testing": {
      "unitTests": false,
      "integrationTests": true,
      "e2eTests": true,
      "cicd": true
    },
    "deployment": {
      "envConfig": false,
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
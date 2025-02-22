export default {
  "metadata": {
    "name": "vue-monorepo-boilerplate",
    "source": "github",
    "url": "https://github.com/slanatech/vue-monorepo-boilerplate",
    "stars": 190,
    "forks": 29,
    "lastUpdate": "2024-12-21"
  },
  "technologies": [
    "vue",
    "lerna",
    "yarn",
    "docker",
    "node",
    "express",
    "vuepress"
  ],
  "purposes": {
    "ui": "vue",
    "monorepoManagement": "lerna",
    "packageManagement": "yarn",
    "dockerManagement": "docker",
    "backend": "node",
    "server": "express",
    "documentation": "vuepress"
  },
  "features": {
    "development": {
      "hotReload": true,
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
      "dockerfile": true,
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
      "commitFrequency": 3,
      "issueResponseTime": 3
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 4
    }
  },
  "other": {}
};
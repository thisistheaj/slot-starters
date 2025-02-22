export default {
  "metadata": {
    "name": "vite-boilerplate",
    "source": "github",
    "url": "https://github.com/lmachens/vite-boilerplate",
    "stars": 104,
    "forks": 64,
    "lastUpdate": "2024-12-23T03:43:33Z"
  },
  "technologies": [
    "typescript",
    "react",
    "vite",
    "storybook",
    "express",
    "eslint",
    "stylelint",
    "prettier",
    "husky",
    "lintstaged"
  ],
  "purposes": {
    "ui": "react",
    "bundling": "vite",
    "api": "express",
    "linting": "eslint",
    "formatting": "prettier"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": true,
      "formatting": true
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
      "commitFrequency": 3,
      "issueResponseTime": 3
    },
    "documentation": {
      "readmeCompleteness": 4,
      "setupInstructions": 4,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
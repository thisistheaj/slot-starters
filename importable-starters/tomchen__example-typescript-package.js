export default {
  "metadata": {
    "name": "example-typescript-package",
    "source": "enum",
    "url": "https://github.com/tomchen/example-typescript-package",
    "stars": 162,
    "forks": 32,
    "lastUpdate": "2024-11-30T05:32:58Z"
  },
  "technologies": [
    "typescript",
    "jest",
    "webpack",
    "eslint",
    "prettier",
    "husky",
    "pinst",
    "commitlint"
  ],
  "purposes": {
    "testing": "jest",
    "bundling": "webpack",
    "linting": "eslint",
    "formatting": "prettier"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": true,
      "formatting": true
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
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 5
    }
  },
  "other": {}
};
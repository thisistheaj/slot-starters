export default {
  "metadata": {
    "name": "typescript-npm-package-template",
    "source": "github",
    "url": "https://github.com/ryansonshine/typescript-npm-package-template",
    "stars": 287,
    "forks": 41,
    "lastUpdate": "2025-02-17T12:48:56Z"
  },
  "technologies": [
    "typescript",
    "jest",
    "eslint",
    "prettier",
    "semantic-release",
    "github-actions",
    "codecov",
    "husky",
    "lint-staged",
    "commitizen"
  ],
  "purposes": {
    "testing": "jest",
    "linting": "eslint",
    "formatting": "prettier",
    "versioning": "semantic-release"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": true,
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
      "commitFrequency": 4,
      "issueResponseTime": 4
    },
    "documentation": {
      "readmeCompleteness": 4,
      "setupInstructions": 4,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
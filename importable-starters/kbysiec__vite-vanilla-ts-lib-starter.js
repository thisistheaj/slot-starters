export default {
  "metadata": {
    "name": "vite-vanilla-ts-lib-starter",
    "source": "github",
    "url": "https://github.com/kbysiec/vite-vanilla-ts-lib-starter",
    "stars": 303,
    "forks": 32,
    "lastUpdate": "2025-02-16"
  },
  "technologies": [
    "eslint",
    "husky",
    "prettier",
    "stylelint",
    "typescript",
    "vite",
    "vitest"
  ],
  "purposes": {
    "linter": "eslint",
    "formatter": "prettier",
    "styling-linter": "stylelint",
    "typescript-support": "typescript",
    "bundling": "vite",
    "testing": "vitest",
    "pre-commit-hooks": "husky"
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
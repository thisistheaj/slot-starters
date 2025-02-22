export default {
  "metadata": {
    "name": "core",
    "source": "github",
    "url": "https://github.com/eruptionjs/core",
    "stars": 324,
    "forks": 19,
    "lastUpdate": "2025-01-26"
  },
  "technologies": [
    "Vite",
    "React",
    "Typescript",
    "Vitest",
    "Testing Library",
    "ESLint",
    "Prettier",
    "CommitLint",
    "Husky",
    "Lint-Staged"
  ],
  "purposes": {
    "bundling": "Vite",
    "ui": "React",
    "language": "Typescript",
    "linting": "ESLint",
    "formatting": "Prettier",
    "commitConvention": "CommitLint"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": true,
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
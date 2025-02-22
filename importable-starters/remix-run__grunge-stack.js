export default {
  "metadata": {
    "name": "grunge-stack",
    "source": "github",
    "url": "https://github.com/remix-run/grunge-stack",
    "stars": 446,
    "forks": 96,
    "lastUpdate": "2025-02-11T12:46:15Z"
  },
  "technologies": [
    "typescript",
    "aws",
    "dynamodb",
    "remix",
    "cypress",
    "msw",
    "vitest",
    "testing-library",
    "eslint",
    "prettier",
    "tailwind"
  ],
  "purposes": {
    "ui": "remix",
    "styling": "tailwind",
    "database": "dynamodb",
    "testing": "cypress",
    "unitTesting": "vitest",
    "linting": "eslint",
    "formatting": "prettier",
    "authentication": "cookie-based sessions"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": true,
      "typeChecking": true,
      "linting": true,
      "formatting": true
    },
    "testing": {
      "unitTests": true,
      "integrationTests": false,
      "e2eTests": true,
      "cicd": true
    },
    "deployment": {
      "envConfig": true,
      "dockerfile": false,
      "infraAsCode": true,
      "productionOptimized": true
    },
    "security": {
      "dependencyScanning": false,
      "secretManagement": true,
      "authentication": true
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 3,
      "issueResponseTime": 3
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 4,
      "exampleCoverage": 4
    }
  },
  "other": {}
};
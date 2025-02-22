export default {
  "metadata": {
    "name": "indie-stack",
    "source": "github",
    "url": "https://github.com/remix-run/indie-stack",
    "stars": 1144,
    "forks": 314,
    "lastUpdate": "2025-02-12T11:24:41Z"
  },
  "technologies": [
    "typescript",
    "docker",
    "sqlite",
    "prisma",
    "tailwind",
    "cypress",
    "msw",
    "vitest",
    "eslint",
    "prettier",
    "remix"
  ],
  "purposes": {
    "ui": "remix",
    "styling": "tailwind",
    "database": "sqlite",
    "orm": "prisma",
    "e2eTesting": "cypress",
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
      "dockerfile": true,
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
      "commitFrequency": 4,
      "issueResponseTime": 4
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 4
    }
  },
  "other": {}
};
export default {
  "metadata": {
    "name": "trance-stack",
    "source": "github",
    "url": "https://github.com/meza/trance-stack",
    "stars": 268,
    "forks": 15,
    "lastUpdate": "2025-02-11T13:03:40Z"
  },
  "technologies": [
    "typescript",
    "remix",
    "auth0",
    "posthog",
    "sentry",
    "eslint",
    "vitest",
    "playwright",
    "storybook",
    "gitHubActions",
    "aws"
  ],
  "purposes": {
    "ui": "remix",
    "styling": "css",
    "database": "postgres",
    "testing": "vitest",
    "e2eTesting": "playwright",
    "analytics": "posthog",
    "errorTracking": "sentry",
    "auth": "auth0",
    "deployment": "aws",
    "ciCd": "GitHub Actions"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": true,
      "formatting": false
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
      "commitFrequency": 4,
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
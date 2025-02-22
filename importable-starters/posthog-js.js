export default {
  "metadata": {
    "name": "posthog-js",
    "source": "npm",
    "url": "https://www.npmjs.com/package/posthog-js",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2025-02-18"
  },
  "technologies": [
    "pnpm",
    "cypress",
    "playwright",
    "testcafe",
    "browserstack",
    "react",
    "nextjs"
  ],
  "purposes": {
    "packageManager": "pnpm",
    "testing": "cypress, playwright, testcafe",
    "crossBrowserTesting": "browserstack",
    "uiFramework": "react",
    "framework": "nextjs"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": false,
      "linting": false,
      "formatting": false
    },
    "testing": {
      "unitTests": true,
      "integrationTests": true,
      "e2eTests": true,
      "cicd": false
    },
    "deployment": {
      "envConfig": true,
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
      "exampleCoverage": 5
    }
  },
  "other": {
    "repository": "git+https://github.com/PostHog/posthog-js.git",
    "maintainers": [
      "timgl"
    ]
  }
};
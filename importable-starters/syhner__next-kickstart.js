export default {
  "metadata": {
    "name": "next-kickstart",
    "source": "github",
    "url": "https://github.com/syhner/next-kickstart",
    "stars": 182,
    "forks": 19,
    "lastUpdate": "2025-01-03T22:41:09Z"
  },
  "technologies": [
    "nextjs",
    "typescript",
    "tailwind",
    "eslint",
    "prettier",
    "trpc",
    "websockets",
    "drizzle",
    "lucia-auth",
    "vitest",
    "react-testing-library",
    "playwright",
    "docker",
    "github-actions"
  ],
  "purposes": {
    "ui": "react",
    "styling": "tailwind",
    "orm": "drizzle",
    "authentication": "lucia-auth",
    "testing": "vitest",
    "e2eTesting": "playwright",
    "ci": "github-actions"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": true,
      "devContainer": false,
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
      "infraAsCode": false,
      "productionOptimized": true
    },
    "security": {
      "dependencyScanning": false,
      "secretManagement": false,
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
      "setupInstructions": 4,
      "exampleCoverage": 4
    }
  },
  "other": {}
};
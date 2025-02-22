export default {
  "metadata": {
    "name": "turbocharger",
    "source": "enum",
    "url": "https://github.com/mehdibha/turbocharger",
    "stars": 101,
    "forks": 19,
    "lastUpdate": "2025-02-10T12:48:29Z"
  },
  "technologies": [
    "typescript",
    "next.js",
    "react",
    "tailwind css",
    "prisma",
    "nextauth.js",
    "shadcn-ui",
    "stripe",
    "zod",
    "turborepo"
  ],
  "purposes": {
    "ui": "react",
    "styling": "tailwind css",
    "database": "prisma",
    "orm": "prisma",
    "authentication": "nextauth.js",
    "stateManagement": "zod",
    "paymentProcessing": "stripe",
    "monorepoManagement": "turborepo"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": true,
      "formatting": false
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
      "productionOptimized": false
    },
    "security": {
      "dependencyScanning": false,
      "secretManagement": false,
      "authentication": true
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
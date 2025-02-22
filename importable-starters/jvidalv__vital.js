export default {
  "metadata": {
    "name": "vital",
    "source": "github",
    "url": "https://github.com/jvidalv/vital",
    "stars": 275,
    "forks": 41,
    "lastUpdate": "2025-02-14"
  },
  "technologies": [
    "eslint",
    "prettier",
    "react",
    "tailwind",
    "typescript",
    "vite",
    "vitest",
    "postcss",
    "heroicons",
    "netlify"
  ],
  "purposes": {
    "ui": "react",
    "styling": "tailwind",
    "linter": "eslint",
    "formatter": "prettier",
    "bundling": "vite",
    "testing": "vitest"
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
      "commitFrequency": 5,
      "issueResponseTime": 5
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 5
    }
  },
  "other": {
    "license": "MIT License",
    "isTemplate": true
  }
};
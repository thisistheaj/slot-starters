export default {
  "metadata": {
    "name": "frontend-monorepo-boilerplate",
    "source": "github",
    "url": "https://github.com/mkosir/frontend-monorepo-boilerplate",
    "stars": 166,
    "forks": 25,
    "lastUpdate": "2025-02-17T19:06:34Z"
  },
  "technologies": [
    "typescript",
    "tailwind",
    "mui",
    "nextjs",
    "react",
    "turborepo",
    "vite",
    "jest",
    "eslint",
    "prettier"
  ],
  "purposes": {
    "ui": "react",
    "styling": "tailwind",
    "testing": "jest",
    "bundling": "vite"
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
      "integrationTests": true,
      "e2eTests": false,
      "cicd": true
    },
    "deployment": {
      "envConfig": true,
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
      "commitFrequency": 4,
      "issueResponseTime": 4
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
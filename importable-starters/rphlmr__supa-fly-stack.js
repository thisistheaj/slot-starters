export default {
  "metadata": {
    "name": "supa-fly-stack",
    "source": "enum",
    "url": "https://github.com/rphlmr/supa-fly-stack",
    "stars": 317,
    "forks": 25,
    "lastUpdate": "2024-12-29T11:37:15Z"
  },
  "technologies": [
    "typescript",
    "docker",
    "supabase",
    "prisma",
    "cypress",
    "msw",
    "vitest",
    "eslint",
    "prettier",
    "tailwind"
  ],
  "purposes": {
    "ui": "remix-run",
    "styling": "tailwind",
    "database": "postgres",
    "orm": "prisma",
    "testing": "cypress",
    "linting": "eslint",
    "formatting": "prettier"
  },
  "features": {
    "development": {
      "hotReload": false,
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
      "readmeCompleteness": 4,
      "setupInstructions": 4,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
export default {
  "metadata": {
    "name": "kpop-stack",
    "source": "github",
    "url": "https://github.com/netlify-templates/kpop-stack",
    "stars": 248,
    "forks": 67,
    "lastUpdate": "2025-02-17T06:24:25Z"
  },
  "technologies": [
    "react",
    "typescript",
    "tailwind",
    "cypress",
    "eslint",
    "prettier",
    "supabase",
    "netlify"
  ],
  "purposes": {
    "ui": "react",
    "styling": "tailwind",
    "database": "supabase",
    "testing": "cypress",
    "linting": "eslint",
    "formatting": "prettier",
    "typeChecking": "typescript"
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
      "unitTests": false,
      "integrationTests": false,
      "e2eTests": true,
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
      "setupInstructions": 5,
      "exampleCoverage": 5
    }
  },
  "other": {}
};
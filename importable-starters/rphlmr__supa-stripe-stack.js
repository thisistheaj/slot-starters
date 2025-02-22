export default {
  "metadata": {
    "name": "supa-stripe-stack",
    "source": "enum",
    "url": "https://github.com/rphlmr/supa-stripe-stack",
    "stars": 143,
    "forks": 10,
    "lastUpdate": "2025-01-22T20:52:38Z"
  },
  "technologies": [
    "typescript",
    "prisma",
    "stripe",
    "supabase",
    "remix-run",
    "docker",
    "tailwind",
    "eslint",
    "prettier",
    "zod",
    "react-zorm"
  ],
  "purposes": {
    "ui": "remix-run",
    "styling": "tailwind",
    "database": "supabase",
    "orm": "prisma",
    "authentication": "supabase",
    "paymentProcessing": "stripe"
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
      "unitTests": false,
      "integrationTests": false,
      "e2eTests": false,
      "cicd": false
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
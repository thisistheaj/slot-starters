export default {
  "metadata": {
    "name": "mvp-boilerplate",
    "source": "github",
    "url": "https://github.com/devtodollars/mvp-boilerplate",
    "stars": 813,
    "forks": 94,
    "lastUpdate": "2025-02-18"
  },
  "technologies": [
    "TypeScript",
    "Flutter",
    "NextJS",
    "Supabase",
    "Posthog",
    "Stripe",
    "Github Actions",
    "Postmark",
    "Sentry",
    "riverpod",
    "go_router"
  ],
  "purposes": {
    "frontend": "Flutter, NextJS",
    "backend": "Supabase",
    "stateManagement": "riverpod",
    "routing": "go_router",
    "analytics": "Posthog",
    "payments": "Stripe",
    "ci/cd": "Github Actions",
    "emails": "Postmark",
    "errorMonitoring": "Sentry",
    "authentication": "Supabase"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": false,
      "formatting": false
    },
    "testing": {
      "unitTests": false,
      "integrationTests": true,
      "e2eTests": false,
      "cicd": true
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
      "commitFrequency": 5,
      "issueResponseTime": 5
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 5
    }
  },
  "other": {}
};
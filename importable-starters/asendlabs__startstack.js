export default {
  "metadata": {
    "name": "startstack",
    "source": "github",
    "url": "https://github.com/asendlabs/startstack",
    "stars": 202,
    "forks": 12,
    "lastUpdate": "2025-02-17"
  },
  "technologies": [
    "TypeScript",
    "Next.js",
    "Better-Auth",
    "PostgreSQL",
    "Drizzle",
    "Tailwind CSS",
    "Resend",
    "PostHog",
    "Zod",
    "Stripe",
    "DodoPayments"
  ],
  "purposes": {
    "framework": "Next.js",
    "authentication": "Better-Auth",
    "database": "PostgreSQL",
    "orm": "Drizzle",
    "styling": "Tailwind CSS",
    "email": "Resend",
    "analytics": "PostHog",
    "validation": "Zod",
    "payments": "Stripe, DodoPayments"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": false,
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
export default {
  "metadata": {
    "name": "SaasterKit",
    "source": "github",
    "url": "https://github.com/leandroercoli/SaasterKit",
    "stars": 106,
    "forks": 23,
    "lastUpdate": "2025-02-13"
  },
  "technologies": [
    "nextjs",
    "prisma",
    "supabase",
    "postgresql",
    "clerk",
    "tailwindcss",
    "shadcn-ui",
    "radix",
    "i18n",
    "resend",
    "sentry",
    "lemonsqueezy",
    "typescript"
  ],
  "purposes": {
    "ui": "shadcn-ui",
    "styling": "tailwindcss",
    "database": "postgresql",
    "orm": "prisma",
    "authentication": "clerk",
    "i18n": "i18n",
    "email": "resend",
    "errorReporting": "sentry",
    "paymentProcessing": "lemonsqueezy"
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
      "envConfig": false,
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
      "setupInstructions": 3,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
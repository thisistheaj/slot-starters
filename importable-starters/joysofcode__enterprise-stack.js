export default {
  "metadata": {
    "name": "enterprise-stack",
    "source": "github",
    "url": "https://github.com/joysofcode/enterprise-stack",
    "stars": 386,
    "forks": 29,
    "lastUpdate": "2025-01-10"
  },
  "technologies": [
    "SvelteKit",
    "Prisma",
    "Lucia",
    "TailwindCSS",
    "Stripe",
    "sveltekit-superforms",
    "Lucide",
    "TypeScript",
    "Prettier",
    "ESLint",
    "Playwright",
    "Vitest"
  ],
  "purposes": {
    "frontend": "SvelteKit",
    "database": "Prisma",
    "authentication": "Lucia",
    "styling": "TailwindCSS",
    "payments": "Stripe",
    "icons": "Lucide",
    "language": "TypeScript",
    "formatting": "Prettier",
    "linting": "ESLint",
    "end-to-end-testing": "Playwright",
    "unit-and-integration-testing": "Vitest"
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
      "integrationTests": true,
      "e2eTests": true,
      "cicd": false
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
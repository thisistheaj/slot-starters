export default {
  "metadata": {
    "name": "Hikari",
    "source": "github",
    "url": "https://github.com/antoineross/Hikari",
    "stars": 269,
    "forks": 32,
    "lastUpdate": "2025-02-13"
  },
  "technologies": [
    "Next.js",
    "Stripe",
    "Supabase",
    "TailwindCSS",
    "React",
    "TypeScript",
    "Supabase storage",
    "tRPC",
    "Docker",
    "Zod",
    "Jest",
    "React Testing Library",
    "Playwright",
    "ESLint",
    "Prettier",
    "Husky",
    "Commitlint",
    "MDX"
  ],
  "purposes": {
    "frontend": "Next.js",
    "styling": "TailwindCSS",
    "state_management": "React",
    "database": "Supabase",
    "auth": "Supabase",
    "payment": "Stripe",
    "testing": "Jest, React Testing Library, Playwright",
    "linting": "ESLint",
    "formatting": "Prettier"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": false,
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
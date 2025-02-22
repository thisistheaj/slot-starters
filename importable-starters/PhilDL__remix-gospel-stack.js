export default {
  "metadata": {
    "name": "remix-gospel-stack",
    "source": "github",
    "url": "https://github.com/PhilDL/remix-gospel-stack",
    "stars": 221,
    "forks": 14,
    "lastUpdate": "2025-02-18"
  },
  "technologies": [
    "TypeScript",
    "pnpm",
    "Turborepo",
    "Prisma",
    "Docker",
    "PostgreSQL",
    "SQLite",
    "Fly.io",
    "shadcn/ui",
    "TailwindCSS",
    "React",
    "Next.js",
    "GitHub Actions",
    "Playwright",
    "Vitest",
    "Testing Library",
    "Prettier"
  ],
  "purposes": {
    "packageManager": "pnpm",
    "monorepoManagement": "Turborepo",
    "deployment": "Fly.io",
    "ui": "React",
    "styling": "TailwindCSS",
    "orm": "Prisma",
    "e2eTesting": "Playwright",
    "unitTesting": "Vitest"
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
      "e2eTests": true,
      "cicd": true
    },
    "deployment": {
      "envConfig": true,
      "dockerfile": true,
      "infraAsCode": true,
      "productionOptimized": true
    },
    "security": {
      "dependencyScanning": false,
      "secretManagement": true,
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
  "other": {}
};
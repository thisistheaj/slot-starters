export default {
  "metadata": {
    "name": "relivator-nextjs-template",
    "source": "github",
    "url": "https://github.com/blefnk/relivator-nextjs-template",
    "stars": 1174,
    "forks": 227,
    "lastUpdate": "2025-02-18"
  },
  "technologies": [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind",
    "Drizzle ORM",
    "Shadcn/UI",
    "Clerk",
    "Stripe",
    "Neon Postgres",
    "Uploadthing",
    "ESLint",
    "Biome",
    "Knip",
    "next-intl"
  ],
  "purposes": {
    "framework": "Next.js",
    "ui": "React",
    "styling": "Tailwind & Shadcn/UI",
    "auth": "Clerk",
    "payments": "Stripe",
    "database": "Drizzle ORM & Neon Postgres",
    "file storage": "Uploadthing",
    "i18n": "next-intl",
    "linting": "ESLint",
    "tools": "Biome, Knip"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": true,
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
export default {
  "metadata": {
    "name": "SaaS-Boilerplate",
    "source": "github",
    "url": "https://github.com/ixartz/SaaS-Boilerplate",
    "stars": 4952,
    "forks": 736,
    "lastUpdate": "2025-02-18"
  },
  "technologies": [
    "Next.js",
    "Tailwind CSS",
    "Shadcn UI",
    "TypeScript",
    "React",
    "ESLint",
    "Prettier",
    "Vitest",
    "React Testing Library",
    "Playwright",
    "GitHub Actions",
    "Clerk",
    "Drizzle ORM",
    "PostgreSQL",
    "SQLite",
    "MySQL",
    "Sentry",
    "Codecov",
    "Pino.js",
    "Checkly",
    "Crowdin",
    "Storybook"
  ],
  "purposes": {
    "ui": "React",
    "styling": "Tailwind CSS, Shadcn UI",
    "language": "TypeScript",
    "authentication": "Clerk",
    "database": "PostgreSQL, SQLite, MySQL",
    "orm": "Drizzle ORM",
    "logging": "Pino.js",
    "i18n": "next-intl, Crowdin",
    "errorMonitoring": "Sentry",
    "codeCoverage": "Codecov",
    "unitTesting": "Vitest, React Testing Library",
    "e2eTesting": "Playwright",
    "codeQuality": "ESLint, Prettier",
    "uiDevelopment": "Storybook"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": true,
      "debugConfig": true,
      "devContainer": false,
      "typeChecking": true,
      "linting": true,
      "formatting": true
    },
    "testing": {
      "unitTests": true,
      "integrationTests": true,
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
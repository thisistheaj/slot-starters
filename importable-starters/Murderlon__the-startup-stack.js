export default {
  "metadata": {
    "name": "the-startup-stack",
    "source": "github",
    "url": "https://github.com/Murderlon/the-startup-stack",
    "stars": 128,
    "forks": 2,
    "lastUpdate": "2025-02-17"
  },
  "technologies": [
    "TypeScript",
    "React",
    "SST",
    "AWS Lambda",
    "Postgres",
    "Drizzle ORM",
    "Stripe",
    "Tailwind CSS",
    "Remix",
    "Bun",
    "Hono",
    "Zod"
  ],
  "purposes": {
    "frontend": "React",
    "backend": "AWS Lambda",
    "database": "Postgres",
    "orm": "Drizzle ORM",
    "infrastructureAsCode": "SST",
    "styling": "Tailwind CSS",
    "supportingTool": "Bun",
    "apiFramework": "Hono",
    "validationLibrary": "Zod",
    "paymentProcessing": "Stripe",
    "webFramework": "Remix"
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
      "unitTests": false,
      "integrationTests": false,
      "e2eTests": false,
      "cicd": true
    },
    "deployment": {
      "envConfig": true,
      "dockerfile": false,
      "infraAsCode": true,
      "productionOptimized": false
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
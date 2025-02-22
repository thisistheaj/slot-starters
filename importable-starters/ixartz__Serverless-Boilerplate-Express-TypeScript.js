export default {
  "metadata": {
    "name": "Serverless-Boilerplate-Express-TypeScript",
    "source": "github",
    "url": "https://github.com/ixartz/Serverless-Boilerplate-Express-TypeScript",
    "stars": 556,
    "forks": 82,
    "lastUpdate": "2025-02-18"
  },
  "technologies": [
    "Serverless",
    "ExpressJS",
    "TypeScript",
    "Prisma",
    "MongoDB",
    "ESLint",
    "Prettier",
    "Husky",
    "Lint-Staged",
    "Jest",
    "Commitlint",
    "Dotenv",
    "esbuild",
    "VSCode"
  ],
  "purposes": {
    "webFramework": "ExpressJS",
    "language": "TypeScript",
    "orm": "Prisma",
    "database": "MongoDB",
    "linter": "ESLint",
    "formatter": "Prettier",
    "unitTesting": "Jest",
    "bundler": "esbuild",
    "devEnvironment": "VSCode"
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
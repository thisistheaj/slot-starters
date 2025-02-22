export default {
  "metadata": {
    "name": "next-start",
    "source": "github",
    "url": "https://github.com/w3cj/next-start",
    "stars": 212,
    "forks": 57,
    "lastUpdate": "2025-02-18"
  },
  "technologies": [
    "eslint",
    "prettier",
    "dotenv",
    "cross-env",
    "tailwindcss",
    "@nextui-org/react",
    "next-themes",
    "@tabler/icons-react",
    "zod",
    "@conform-to/zod",
    "drizzle-zod",
    "@conform-to/react",
    "drizzle-orm",
    "postgres",
    "drizzle-kit",
    "next-auth",
    "@auth/drizzle-adapter"
  ],
  "purposes": {
    "linting": "eslint",
    "formatting": "prettier",
    "environmentVariables": "dotenv, cross-env, @t3-oss/env-nextjs",
    "stylesUI": "tailwindcss, @nextui-org/react, next-themes, @tabler/icons-react",
    "validation": "zod, @conform-to/zod, drizzle-zod",
    "forms": "@conform-to/react",
    "database": "drizzle-orm, postgres, drizzle-kit",
    "authentication": "next-auth, @auth/drizzle-adapter"
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
      "cicd": false
    },
    "deployment": {
      "envConfig": true,
      "dockerfile": true,
      "infraAsCode": false,
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
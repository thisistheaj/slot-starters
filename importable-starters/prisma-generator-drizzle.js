export default {
  "metadata": {
    "name": "prisma-generator-drizzle",
    "source": "npm",
    "url": "https://www.npmjs.com/package/prisma-generator-drizzle",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2024-07-05"
  },
  "technologies": [
    "prisma",
    "drizzle"
  ],
  "purposes": {
    "orm": "prisma",
    "database": "drizzle"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": false,
      "linting": false,
      "formatting": false
    },
    "testing": {
      "unitTests": true,
      "integrationTests": false,
      "e2eTests": false,
      "cicd": true
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
      "authentication": false
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 1,
      "issueResponseTime": 1
    },
    "documentation": {
      "readmeCompleteness": 4,
      "setupInstructions": 4,
      "exampleCoverage": 1
    }
  },
  "other": {
    "installation": {
      "methods": [
        {
          "command": "npm install -D prisma-generator-drizzle",
          "packageManager": "npm"
        },
        {
          "command": "npm install drizzle-orm",
          "packageManager": "npm"
        }
      ]
    }
  }
};
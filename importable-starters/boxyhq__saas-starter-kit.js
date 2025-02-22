export default {
  "metadata": {
    "name": "saas-starter-kit",
    "source": "enum",
    "url": "https://github.com/boxyhq/saas-starter-kit",
    "stars": 3886,
    "forks": 899,
    "lastUpdate": "2025-02-18T20:36:43Z"
  },
  "technologies": [
    "nextjs",
    "typescript",
    "tailwind",
    "postgres",
    "prisma",
    "react",
    "saml-jackson",
    "svix",
    "retraced",
    "stripe",
    "playwright",
    "docker",
    "next-auth"
  ],
  "purposes": {
    "ui": "react",
    "styling": "tailwind",
    "database": "postgres",
    "orm": "prisma",
    "testing": "playwright",
    "containerization": "docker",
    "authentication": "next-auth"
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
      "e2eTests": true,
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
      "commitFrequency": 4,
      "issueResponseTime": 4
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 4
    }
  },
  "other": {}
};
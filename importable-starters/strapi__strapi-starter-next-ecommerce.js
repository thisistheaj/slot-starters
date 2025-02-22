export default {
  "metadata": {
    "name": "strapi-starter-next-ecommerce",
    "source": "enum",
    "url": "https://github.com/strapi/strapi-starter-next-ecommerce",
    "stars": 219,
    "forks": 72,
    "lastUpdate": "2025-02-09T05:56:19Z"
  },
  "technologies": [
    "nextjs",
    "strapi",
    "tailwind",
    "snipcart"
  ],
  "purposes": {
    "ui": "nextjs",
    "styling": "tailwind",
    "backend": "strapi",
    "payments": "snipcart"
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
      "unitTests": false,
      "integrationTests": false,
      "e2eTests": false,
      "cicd": false
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
      "authentication": true
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
      "exampleCoverage": 3
    }
  },
  "other": {
    "type": "object",
    "description": "Important information that doesn't fit elsewhere",
    "examples": {
      "deprecated": {
        "deprecated": "This repository is no longer maintained and only works for Strapi v3."
      }
    }
  }
};
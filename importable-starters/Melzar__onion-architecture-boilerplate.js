export default {
  "metadata": {
    "name": "onion-architecture-boilerplate",
    "source": "github",
    "url": "https://github.com/Melzar/onion-architecture-boilerplate",
    "stars": 315,
    "forks": 48,
    "lastUpdate": "2025-02-16"
  },
  "technologies": [
    "TypeScript",
    "Node.js",
    "Express",
    "Apollo Server",
    "GraphQL",
    "TypeORM",
    "Mocha",
    "Chai",
    "Sinon",
    "Stryker",
    "Swagger",
    "PostgreSQL",
    "Inversify.js"
  ],
  "purposes": {
    "programming_language": "TypeScript",
    "backend": "Node.js, Express",
    "api": "Apollo Server, GraphQL, Express",
    "orm": "TypeORM",
    "database": "PostgreSQL",
    "testing": "Mocha, Chai, Sinon, Stryker",
    "documentation": "Swagger"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": false,
      "formatting": false
    },
    "testing": {
      "unitTests": true,
      "integrationTests": true,
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
      "commitFrequency": 3,
      "issueResponseTime": 3
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 5
    }
  },
  "other": {
    "noLicense": true
  }
};
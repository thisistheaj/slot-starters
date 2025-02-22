export default {
  "metadata": {
    "name": "deno_rest",
    "source": "github",
    "url": "https://github.com/Prolifode/deno_rest",
    "stars": 156,
    "forks": 30,
    "lastUpdate": "2025-02-17"
  },
  "technologies": [
    "TypeScript",
    "Deno",
    "Oak",
    "MongoDB",
    "JWT",
    "CORS",
    "BCrypt",
    "Docker",
    "CircleCI",
    "dotenv",
    "yup"
  ],
  "purposes": {
    "runtime": "Deno",
    "framework": "Oak",
    "database": "MongoDB",
    "authentication": "JWT",
    "passwordHashing": "BCrypt",
    "corsMiddleware": "CORS",
    "schemaValidation": "yup",
    "envManagement": "dotenv",
    "ci": "CircleCI",
    "containerization": "Docker"
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
      "unitTests": false,
      "integrationTests": true,
      "e2eTests": false,
      "cicd": true
    },
    "deployment": {
      "envConfig": true,
      "dockerfile": true,
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
export default {
  "metadata": {
    "name": "nestjs-service-template",
    "source": "github",
    "url": "https://github.com/AlbertHernandez/nestjs-service-template",
    "stars": 389,
    "forks": 76,
    "lastUpdate": "2025-02-17"
  },
  "technologies": [
    "NestJS",
    "TypeScript",
    "Docker",
    "SWC",
    "Fastify",
    "Husky",
    "Vitest",
    "supertest",
    "k6",
    "GitHub Actions",
    "pnpm",
    "ESModules"
  ],
  "purposes": {
    "framework": "NestJS",
    "language": "TypeScript",
    "containerization": "Docker",
    "compilation": "SWC",
    "webFramework": "Fastify",
    "codeQualityTool": "Husky",
    "unitTestFramework": "Vitest",
    "e2eTestFramework": "supertest",
    "performanceTestingTool": "k6",
    "ciCd": "GitHub Actions",
    "packageManager": "pnpm",
    "moduleSystem": "ESModules"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": false,
      "debugConfig": true,
      "devContainer": false,
      "typeChecking": true,
      "linting": true,
      "formatting": false
    },
    "testing": {
      "unitTests": true,
      "integrationTests": false,
      "e2eTests": true,
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
      "exampleCoverage": 3
    }
  },
  "other": {}
};
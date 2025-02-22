export default {
  "metadata": {
    "name": "express-typescript-service-template",
    "source": "github",
    "url": "https://github.com/AlbertHernandez/express-typescript-service-template",
    "stars": 138,
    "forks": 39,
    "lastUpdate": "2025-02-16"
  },
  "technologies": [
    "Express",
    "TypeScript",
    "Docker",
    "SWC",
    "Vitest",
    "supertest",
    "husky",
    "conventional commits",
    "k6",
    "pnpm",
    "GitHub Actions",
    "ESModules"
  ],
  "purposes": {
    "httpFramework": "Express",
    "programmingLanguage": "TypeScript",
    "containerization": "Docker",
    "compiler": "SWC",
    "testing": "Vitest",
    "e2eTesting": "supertest",
    "codeQualityTool": "husky",
    "commitConvention": "conventional commits",
    "performanceTesting": "k6",
    "packageManager": "pnpm",
    "ciCd": "GitHub Actions",
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
      "productionOptimized": true
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
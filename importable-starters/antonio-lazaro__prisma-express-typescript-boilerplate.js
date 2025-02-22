export default {
  "metadata": {
    "name": "prisma-express-typescript-boilerplate",
    "source": "github",
    "url": "https://github.com/antonio-lazaro/prisma-express-typescript-boilerplate",
    "stars": 249,
    "forks": 56,
    "lastUpdate": "2025-02-17"
  },
  "technologies": [
    "Node.js",
    "TypeScript",
    "Express",
    "Prisma",
    "PostgreSQL",
    "passport",
    "Joi",
    "winston",
    "morgan",
    "swagger-jsdoc",
    "swagger-ui-express",
    "PM2",
    "Yarn",
    "dotenv",
    "cross-env",
    "helmet",
    "cors",
    "compression",
    "Docker",
    "coveralls",
    "Codacy",
    "Husky",
    "lint-staged",
    "ESLint",
    "Prettier",
    "EditorConfig"
  ],
  "purposes": {
    "database": "PostgreSQL",
    "orm": "Prisma",
    "authentication": "passport",
    "validation": "Joi",
    "logging": "winston, morgan",
    "apiDocumentation": "swagger-jsdoc, swagger-ui-express",
    "dependencyManagement": "Yarn",
    "environmentVariables": "dotenv, cross-env",
    "securityHTTPHeaders": "helmet",
    "processManagement": "PM2"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": true,
      "formatting": true
    },
    "testing": {
      "unitTests": true,
      "integrationTests": true,
      "e2eTests": false,
      "cicd": false
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
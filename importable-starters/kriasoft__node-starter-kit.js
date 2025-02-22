export default {
  "metadata": {
    "name": "node-starter-kit",
    "source": "github",
    "url": "https://github.com/kriasoft/node-starter-kit",
    "stars": 168,
    "forks": 29,
    "lastUpdate": "2025-02-13"
  },
  "technologies": [
    "Node.js",
    "GraphQL",
    "TypeScript",
    "PostgreSQL",
    "JWT",
    "Handlebars",
    "Jest",
    "Supertest",
    "Rollup",
    "Express",
    "Nodemailer",
    "Knex",
    "Babel",
    "ESLint",
    "Prettier"
  ],
  "purposes": {
    "api": "GraphQL",
    "database": "PostgreSQL",
    "orm": "Knex",
    "sessions": "JWT",
    "emailTemplates": "Handlebars",
    "testing": "Jest",
    "bundling": "Rollup",
    "server": "Express",
    "emailService": "Nodemailer",
    "transpilation": "Babel",
    "codeStyle": "ESLint",
    "formatting": "Prettier"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": true,
      "devContainer": false,
      "typeChecking": true,
      "linting": true,
      "formatting": true
    },
    "testing": {
      "unitTests": true,
      "integrationTests": false,
      "e2eTests": false,
      "cicd": true
    },
    "deployment": {
      "envConfig": true,
      "dockerfile": false,
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
export default {
  "metadata": {
    "name": "serverless-prisma",
    "source": "github",
    "url": "https://github.com/jgeschwendt/serverless-prisma",
    "stars": 125,
    "forks": 8,
    "lastUpdate": "2023-04-05"
  },
  "technologies": [
    "AWS",
    "Docker",
    "Make",
    "Babel",
    "GraphQL",
    "Prisma",
    "Serverless",
    "TypeScript",
    "Webpack"
  ],
  "purposes": {
    "deployment": "Serverless",
    "database": "Prisma",
    "api": "GraphQL",
    "language": "TypeScript",
    "transpiler": "Babel",
    "moduleBundler": "Webpack",
    "containerization": "Docker",
    "taskRunner": "Make"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": true,
      "typeChecking": true,
      "linting": false,
      "formatting": false
    },
    "testing": {
      "unitTests": false,
      "integrationTests": false,
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
      "secretManagement": true,
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
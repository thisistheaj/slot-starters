export default {
  "metadata": {
    "name": "jslib-base",
    "source": "github",
    "url": "https://github.com/yanhaijing/jslib-base",
    "stars": 956,
    "forks": 149,
    "lastUpdate": "2025-02-12"
  },
  "technologies": [
    "JavaScript",
    "TypeScript",
    "ES6+",
    "Rollup",
    "eslint",
    "prettier",
    "husky",
    "mocha",
    "istanbul",
    "nyc",
    "github action",
    "npm"
  ],
  "purposes": {
    "language": "TypeScript",
    "tooling": "eslint, prettier, husky",
    "testing": "mocha",
    "coverage": "istanbul+nyc",
    "ci_cd": "github action",
    "dependency_management": "npm"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
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
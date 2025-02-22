export default {
  "metadata": {
    "name": "node-typescript-template",
    "source": "github",
    "url": "https://github.com/chriswells0/node-typescript-template",
    "stars": 126,
    "forks": 47,
    "lastUpdate": "2025-01-17"
  },
  "technologies": [
    "Node.js",
    "TypeScript",
    "NPM",
    "Git",
    "GitHub Actions",
    "Coveralls",
    "Commitizen"
  ],
  "purposes": {
    "runtime": "Node.js",
    "programmingLanguage": "TypeScript",
    "packageManager": "NPM",
    "versionControl": "Git",
    "ci": "GitHub Actions",
    "codeCoverage": "Coveralls",
    "commitConventionTool": "Commitizen"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": true,
      "formatting": false
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
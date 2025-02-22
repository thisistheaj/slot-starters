export default {
  "metadata": {
    "name": "generator-typescript-package",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-typescript-package",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2022-04-03"
  },
  "technologies": [
    "typescript",
    "yeoman",
    "github",
    "gitlab",
    "lerna",
    "GitHub Actions",
    "gitlab-ci",
    "semantic-release",
    "ava",
    "fast-check",
    "codecov",
    "typescript-eslint"
  ],
  "purposes": {
    "packageManager": "yeoman",
    "typeScript": "typescript",
    "ci": "GitHub Actions, gitlab-ci",
    "cd": "semantic-release",
    "testing": "ava, fast-check",
    "codeCoverage": "codecov",
    "linting": "typescript-eslint"
  },
  "features": {
    "development": {
      "hotReload": false,
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
      "commitFrequency": 1,
      "issueResponseTime": 1
    },
    "documentation": {
      "readmeCompleteness": 3,
      "setupInstructions": 4,
      "exampleCoverage": 3
    }
  },
  "other": {
    "maintenanceStatus": "On life-support"
  }
};
export default {
  "metadata": {
    "name": "pwa-starter-kit",
    "source": "npm",
    "url": "https://www.npmjs.com/package/pwa-starter-kit",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2019-10-30"
  },
  "technologies": [
    "React",
    "Parcel",
    "Babel",
    "ESLint",
    "Jest",
    "TestCafe",
    "Material UI"
  ],
  "purposes": {
    "ui": "React",
    "bundling": "Parcel",
    "transpiling": "Babel",
    "linting": "ESLint",
    "styling": "Material UI"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": false,
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
      "envConfig": false,
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
      "commitFrequency": 1,
      "issueResponseTime": 1
    },
    "documentation": {
      "readmeCompleteness": 4,
      "setupInstructions": 4,
      "exampleCoverage": 4
    }
  },
  "other": {
    "frameworkVersion": {
      "React": "16"
    }
  }
};
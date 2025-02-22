export default {
  "metadata": {
    "name": "trolly",
    "source": "npm",
    "url": "https://www.npmjs.com/package/trolly",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2016-06-14"
  },
  "technologies": [
    "Webpack",
    "Babel",
    "ES2015",
    "Mocha",
    "Sinon",
    "Chai",
    "Rewire",
    "Karma",
    "ESLint",
    "Istanbul",
    "Flow",
    "npm",
    "Node"
  ],
  "purposes": {
    "transpiler": "Babel",
    "testing": "Mocha, Sinon, Chai, Rewire, Karma, Istanbul",
    "linting": "ESLint",
    "bundling": "Webpack",
    "testingEnvironment": "Karma",
    "moduleMocking": "Rewire",
    "styleGuideEnforcement": "ESLint",
    "coverageReporting": "Istanbul",
    "packageManagement": "npm",
    "runtimeEnvironment": "Node"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": true,
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
      "cicd": false
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
      "setupInstructions": 3,
      "exampleCoverage": 3
    }
  },
  "other": {
    "possibleConflicts": "Multiple versions of Webpack listed in keywords."
  }
};
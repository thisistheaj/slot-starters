export default {
  "metadata": {
    "name": "liferay-npm-bundler-preset-create-react-app",
    "source": "npm",
    "url": "https://www.npmjs.com/package/liferay-npm-bundler-preset-create-react-app",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2025-01-10"
  },
  "technologies": [
    "react",
    "npm",
    "create-react-app",
    "liferay"
  ],
  "purposes": {
    "ui": "react",
    "bundling": "create-react-app",
    "projectManagement": "liferay"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": false,
      "linting": false,
      "formatting": false
    },
    "testing": {
      "unitTests": false,
      "integrationTests": false,
      "e2eTests": false,
      "cicd": false
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
      "commitFrequency": 3,
      "issueResponseTime": 3
    },
    "documentation": {
      "readmeCompleteness": 3,
      "setupInstructions": 4,
      "exampleCoverage": 3
    }
  },
  "other": {
    "notice": "This preset is specialized for integration with Liferay DXP or Liferay Portal CE."
  }
};
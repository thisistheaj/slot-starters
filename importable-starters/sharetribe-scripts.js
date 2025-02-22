export default {
  "metadata": {
    "name": "sharetribe-scripts",
    "source": "npm",
    "url": "https://www.npmjs.com/package/sharetribe-scripts",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2025-01-09"
  },
  "technologies": [
    "react-scripts",
    "postcss-preset-env",
    "postcss-import",
    "Loadable components"
  ],
  "purposes": {
    "cssHandling": "postcss-preset-env",
    "moduleLoading": "Loadable components"
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
      "readmeCompleteness": 4,
      "setupInstructions": 4,
      "exampleCoverage": 3
    }
  },
  "other": {
    "additionalFeatures": {
      "CSR_support": "Additional Client-Side Rendering support using Loadable components"
    }
  }
};
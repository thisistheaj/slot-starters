export default {
  "metadata": {
    "name": "js-library-boilerplate",
    "source": "github",
    "url": "https://github.com/DevUnltd/js-library-boilerplate",
    "stars": 233,
    "forks": 28,
    "lastUpdate": "2025-02-17"
  },
  "technologies": [
    "Webpack",
    "Babel",
    "SASS/SCSS",
    "Jest",
    "UMD",
    "CSS Autoprefixer",
    "Hot Reloading"
  ],
  "purposes": {
    "bundling": "Webpack",
    "transpiling": "Babel",
    "styling": "SASS/SCSS",
    "testing": "Jest",
    "moduleSystem": "UMD"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": false,
      "linting": false,
      "formatting": false
    },
    "testing": {
      "unitTests": true,
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
      "dependencyScanning": true,
      "secretManagement": false,
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
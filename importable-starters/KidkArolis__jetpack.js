export default {
  "metadata": {
    "name": "jetpack",
    "source": "github",
    "url": "https://github.com/KidkArolis/jetpack",
    "stars": 1317,
    "forks": 30,
    "lastUpdate": "2025-01-28"
  },
  "technologies": [
    "JavaScript",
    "webpack",
    "rspack",
    "swc-loader",
    "core-js",
    "postcss-loader",
    "Sass",
    "React"
  ],
  "purposes": {
    "bundling": "rspack/webpack",
    "transpilation": "swc-loader",
    "polyfills": "core-js",
    "cssPreprocessing": "postcss-loader/Sass",
    "ui": "React"
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
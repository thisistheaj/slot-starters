export default {
  "metadata": {
    "name": "nucleum",
    "source": "npm",
    "url": "https://www.npmjs.com/package/nucleum",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2023-05-25"
  },
  "technologies": [
    "gulp",
    "eleventy",
    "11ty",
    "nunjucks",
    "sass",
    "postcss",
    "webpack",
    "babel",
    "eslint",
    "stylelint",
    "cssnano",
    "purgecss"
  ],
  "purposes": {
    "staticSiteGeneration": "eleventy",
    "templating": "nunjucks",
    "cssPreprocessing": "sass",
    "cssOptimization": "postcss",
    "javascriptTranspilation": "babel",
    "javascriptBundling": "webpack",
    "codeLinting": "eslint",
    "styleLinting": "stylelint",
    "cssCompression": "cssnano",
    "cssPurging": "purgecss"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": false,
      "linting": true,
      "formatting": true
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
      "commitFrequency": 3,
      "issueResponseTime": 4
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 4,
      "exampleCoverage": 4
    }
  },
  "other": {}
};
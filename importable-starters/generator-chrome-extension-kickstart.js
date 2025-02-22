export default {
  "metadata": {
    "name": "generator-chrome-extension-kickstart",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-chrome-extension-kickstart",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2017-10-12"
  },
  "technologies": [
    "yeoman-generator",
    "gulp.js",
    "webpack",
    "babel.js",
    "ES2015",
    "CommonJS",
    "AMD",
    "less",
    "sass",
    "css"
  ],
  "purposes": {
    "scaffolding": "yeoman-generator",
    "taskRunner": "gulp.js",
    "moduleBundler": "webpack",
    "transpiler": "babel.js"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": false,
      "linting": true,
      "formatting": false
    },
    "testing": {
      "unitTests": false,
      "integrationTests": false,
      "e2eTests": false,
      "cicd": true
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
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 5
    }
  },
  "other": {}
};
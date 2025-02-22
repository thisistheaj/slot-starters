export default {
  "metadata": {
    "name": "generator-ourcane",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-ourcane",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2015-06-02"
  },
  "technologies": [
    "node.js",
    "bower",
    "sass",
    "Browserify",
    "libsass",
    "minifycss",
    "autoprefixer",
    "gulp"
  ],
  "purposes": {
    "dependencyManagement": "bower",
    "cssPreprocessing": "sass",
    "javascriptBundling": "Browserify",
    "cssOptimization": "libsass, minifycss, autoprefixer"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
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
      "commitFrequency": 1,
      "issueResponseTime": 1
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 4,
      "exampleCoverage": 3
    }
  },
  "other": {
    "uniqueFeature": "Configurable task system allowing override of existing gulp tasks or addition of new ones"
  }
};
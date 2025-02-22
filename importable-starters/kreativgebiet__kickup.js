export default {
  "metadata": {
    "name": "kickup",
    "source": "github",
    "url": "https://github.com/kreativgebiet/kickup",
    "stars": 134,
    "forks": 7,
    "lastUpdate": "2023-08-04"
  },
  "technologies": [
    "Gulp.js",
    "Babel",
    "BrowserSync",
    "Rsync",
    "Autoprefixer",
    "Sass",
    "CSSO",
    "PostCSS",
    "Browserify",
    "ESLint",
    "UglifyJS",
    "SVGStore"
  ],
  "purposes": {
    "taskRunner": "Gulp.js",
    "compiler": "Babel",
    "browserTesting": "BrowserSync",
    "deployment": "Rsync",
    "cssPrefixer": "Autoprefixer",
    "cssPreprocessor": "Sass",
    "cssOptimization": "CSSO",
    "cssTranspilation": "PostCSS",
    "jsBundling": "Browserify",
    "linting": "ESLint",
    "jsMinification": "UglifyJS",
    "svgCombining": "SVGStore"
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
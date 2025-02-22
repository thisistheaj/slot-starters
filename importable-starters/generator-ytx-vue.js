export default {
  "metadata": {
    "name": "generator-ytx-vue",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-ytx-vue",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2016-04-13"
  },
  "technologies": [
    "Yeoman",
    "npm",
    "gulp",
    "css",
    "browser-sync",
    "gulp-livereload",
    "connect",
    "gulp-csso",
    "gulp-minify-css",
    "zepto",
    "bower"
  ],
  "purposes": {
    "packageManager": "npm",
    "buildTool": "gulp",
    "cssOptimization": "gulp-minify-css",
    "liveReload": "browser-sync",
    "moduleLoader": "bower"
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
      "commitFrequency": 1,
      "issueResponseTime": 1
    },
    "documentation": {
      "readmeCompleteness": 2,
      "setupInstructions": 3,
      "exampleCoverage": 1
    }
  },
  "other": {
    "releaseVersion": "0.3.0",
    "releaseFeatures": [
      "auto css sprites support",
      "browser-sync",
      "gulp-minify-css replacement"
    ]
  }
};
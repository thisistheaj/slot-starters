export default {
  "metadata": {
    "name": "generator-cdd-dev",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-cdd-dev",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2015-07-21"
  },
  "technologies": [
    "yeoman-generator",
    "gulp",
    "sass",
    "bower",
    "libsass",
    "imagemin",
    "pixrem",
    "jslint",
    "BrowserSync"
  ],
  "purposes": {
    "generator": "yeoman-generator",
    "task_runner": "gulp",
    "styling": "sass",
    "package_management": "bower",
    "css_preprocessing": "libsass",
    "image_optimization": "imagemin",
    "css_fallback": "pixrem",
    "linting": "jslint",
    "live_reload": "BrowserSync"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": true,
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
      "envConfig": true,
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
      "readmeCompleteness": 3,
      "setupInstructions": 3,
      "exampleCoverage": 2
    }
  },
  "other": {
    "modulesPath": "/modules",
    "recommendedNodeVersion": ">=0.12"
  }
};
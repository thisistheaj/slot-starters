export default {
  "metadata": {
    "name": "generator-zapp",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-zapp",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2014-06-21"
  },
  "technologies": [
    "Yeoman",
    "gulp",
    "Bower",
    "CSS Autoprefixing",
    "browsersync",
    "JSHint",
    "Less",
    "image optimization"
  ],
  "purposes": {
    "scaffolding": "gulp",
    "package_management": "Bower",
    "css_preprocessing": "Less",
    "javascript_linting": "JSHint",
    "live_reload": "browsersync",
    "image_optimization": "image optimization",
    "css_autoprefixing": "CSS Autoprefixing"
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
      "exampleCoverage": 2
    }
  },
  "other": {
    "publisher": "zucchinize"
  }
};
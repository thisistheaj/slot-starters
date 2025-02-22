export default {
  "metadata": {
    "name": "generator-pdemail",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-pdemail",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2014-06-16"
  },
  "technologies": [
    "yeoman",
    "node.js",
    "ruby",
    "scss",
    "compass",
    "nokogiri",
    "premailer",
    "litmus",
    "jpegtran",
    "optipng"
  ],
  "purposes": {
    "scaffolding": "yeoman",
    "runtime": "node.js",
    "css_preprocessing": "scss",
    "css_framework": "compass",
    "html_preprocessing": "nokogiri",
    "inline_css": "premailer",
    "email_testing": "litmus",
    "image_optimization": "jpegtran, optipng"
  },
  "features": {
    "development": {
      "hotReload": true,
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
      "setupInstructions": 5,
      "exampleCoverage": 5
    }
  },
  "other": {
    "scopes": "Generate HTML emails optimized for delivery"
  }
};
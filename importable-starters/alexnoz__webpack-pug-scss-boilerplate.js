export default {
  "metadata": {
    "name": "webpack-pug-scss-boilerplate",
    "source": "github",
    "url": "https://github.com/alexnoz/webpack-pug-scss-boilerplate",
    "stars": 135,
    "forks": 51,
    "lastUpdate": "2024-10-15"
  },
  "technologies": [
    "Webpack",
    "Pug",
    "SCSS",
    "ESLint",
    "Stylelint",
    "autoprefixer"
  ],
  "purposes": {
    "templating": "Pug",
    "styling": "SCSS",
    "bundling": "Webpack",
    "lintingJS": "ESLint",
    "lintingCSS": "Stylelint",
    "cssPrefixing": "autoprefixer"
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
      "issueResponseTime": 3
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 4
    }
  },
  "other": {}
};
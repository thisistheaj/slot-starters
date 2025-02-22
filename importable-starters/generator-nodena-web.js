export default {
  "metadata": {
    "name": "generator-nodena-web",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-nodena-web",
    "stars": null,
    "forks": null,
    "lastUpdate": "2018-03-26"
  },
  "technologies": [
    "gulp",
    "webpack",
    "yeoman-generator",
    "nodena",
    "pug",
    "sass"
  ],
  "purposes": {
    "scaffolding": "yeoman-generator",
    "transpilation": "gulp, webpack",
    "templating": "pug",
    "styling": "sass"
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
      "readmeCompleteness": 3,
      "setupInstructions": 3,
      "exampleCoverage": 3
    }
  },
  "other": {
    "publisher": "ethancfchen",
    "maintainers": [
      "ethancfchen"
    ]
  }
};
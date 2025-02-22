export default {
  "metadata": {
    "name": "generator-zf5",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-zf5",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2015-10-07"
  },
  "technologies": [
    "yeoman-generator",
    "foundation5",
    "zurb",
    "foundation",
    "sass",
    "scss",
    "grunt",
    "bower",
    "liveReload"
  ],
  "purposes": {
    "framework": "foundation5",
    "css_preprocessor": "sass",
    "task_runner": "grunt",
    "package_manager": "bower",
    "live_preview": "liveReload"
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
      "commitFrequency": 3,
      "issueResponseTime": 3
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
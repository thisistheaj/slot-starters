export default {
  "metadata": {
    "name": "vue-plugin-template",
    "source": "enum",
    "url": "https://github.com/posva/vue-plugin-template",
    "stars": 190,
    "forks": 27,
    "lastUpdate": "2024-10-23T21:52:28Z"
  },
  "technologies": [
    "vue",
    "javascript",
    "rollup",
    "webpack",
    "eslint",
    "stylelint",
    "postcss",
    "sass"
  ],
  "purposes": {
    "ui": "vue",
    "bundling": "rollup",
    "testing": "eslint"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": false,
      "linting": true,
      "formatting": true
    },
    "testing": {
      "unitTests": true,
      "integrationTests": true,
      "e2eTests": false,
      "cicd": false
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
      "commitFrequency": 4,
      "issueResponseTime": 4
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 4
    }
  },
  "other": {
    "roadmap": [
      "Add flow typings",
      "Add .github folder",
      "Add question for tests",
      "Add question for visual tests",
      "Add question for contribution guidelines",
      "Add question for the license",
      "Add question for linting"
    ]
  }
};
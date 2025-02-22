export default {
  "metadata": {
    "name": "bento-starter",
    "source": "github",
    "url": "https://github.com/kefranabg/bento-starter",
    "stars": 1529,
    "forks": 132,
    "lastUpdate": "2024-12-19"
  },
  "technologies": [
    "Vue.js",
    "Firebase",
    "PWA",
    "Vuex",
    "CircleCI",
    "JavaScript",
    "Firebase Auth",
    "Firebase Firestore",
    "Firebase Hosting",
    "Prettier",
    "Eslint",
    "Jest",
    "Cypress",
    "Vue head",
    "prerender-spa-plugin"
  ],
  "purposes": {
    "front-end framework": "Vue.js",
    "authentication": "Firebase Auth",
    "database": "Firebase Firestore",
    "hosting": "Firebase Hosting",
    "state management": "Vuex",
    "code formatting": "Prettier",
    "code quality": "Eslint",
    "unit testing": "Jest",
    "end-to-end testing": "Cypress",
    "seo": "prerender-spa-plugin",
    "continuous integration/deployment": "CircleCI",
    "PWA support": "PWA"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": false,
      "linting": true,
      "formatting": true
    },
    "testing": {
      "unitTests": true,
      "integrationTests": false,
      "e2eTests": true,
      "cicd": true
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
      "authentication": true
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 5,
      "issueResponseTime": 4
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 4
    }
  },
  "other": {}
};
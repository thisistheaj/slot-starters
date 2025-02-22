export default {
  "metadata": {
    "name": "generator-sppp",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-sppp",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2023-03-22"
  },
  "technologies": [
    "React",
    "PnPjs",
    "Office UI Fabric",
    "TypeScript",
    "SCSS",
    "Webpack",
    "sppull",
    "gulp-spsave",
    "sp-request",
    "node-sp-auth",
    "node-so-auth-config",
    "sp-build-tasks",
    "sp-live-reload"
  ],
  "purposes": {
    "ui": "React",
    "styling": "Office UI Fabric, SCSS",
    "apiCommunication": "PnPjs, sp-request, node-sp-auth, node-so-auth-config",
    "bundling": "Webpack",
    "tooling": "sp-build-tasks",
    "liveReload": "sp-live-reload",
    "fileManagement": "sppull, gulp-spsave",
    "authentication": "node-sp-auth, node-so-auth-config"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": true,
      "formatting": false
    },
    "testing": {
      "unitTests": false,
      "integrationTests": false,
      "e2eTests": false,
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
      "secretManagement": true,
      "authentication": true
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 3,
      "issueResponseTime": 3
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 4,
      "exampleCoverage": 4
    }
  },
  "other": {}
};
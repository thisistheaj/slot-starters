export default {
  "metadata": {
    "name": "go-starter-kit",
    "source": "npm",
    "url": "https://www.npmjs.com/package/go-starter-kit",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2024-04-24"
  },
  "technologies": [
    "Golang",
    "React",
    "goja",
    "fetch polyfill",
    "Echo",
    "cli",
    "Makefile",
    "babel-loader",
    "react-router",
    "redux",
    "redux-devtools",
    "PostCSS",
    "css-modules",
    "HMR",
    "webpack"
  ],
  "purposes": {
    "serverSideRendering": "goja",
    "apiCommunication": "fetch polyfill",
    "metaTagsRendering": "server-side",
    "httpServer": "Echo",
    "commandLineInterface": "cli",
    "buildTool": "Makefile",
    "moduleBundler": "webpack",
    "stateManagement": "redux",
    "devTooling": "redux-devtools",
    "cssStyling": "PostCSS and css-modules",
    "hotReloading": "HMR"
  },
  "features": {
    "development": {
      "hotReload": true,
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
      "readmeCompleteness": 4,
      "setupInstructions": 3,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
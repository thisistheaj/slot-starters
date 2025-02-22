export default {
  "metadata": {
    "name": "template-rwb",
    "source": "github",
    "url": "https://github.com/SidKwok/template-rwb",
    "stars": 163,
    "forks": 31,
    "lastUpdate": "2024-04-22"
  },
  "technologies": [
    "webpack",
    "hmr",
    "react",
    "react-router",
    "redux",
    "JSX",
    "ES6",
    "babel",
    "CSS Modules",
    "Proxy",
    "ESlint",
    "Redux-devtools",
    "jest",
    "Enzyme",
    "postcss",
    "http-proxy-middleware",
    "babel-plugin-transform-react-remove-prop-types",
    "webpack-bundle-analyzer"
  ],
  "purposes": {
    "ui": "react",
    "router": "react-router",
    "stateManagement": "redux",
    "testing": "jest",
    "bundleAnalyzer": "webpack-bundle-analyzer",
    "linting": "ESlint",
    "transpilation": "babel",
    "cssPreprocessing": "postcss"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": false,
      "linting": true,
      "formatting": false
    },
    "testing": {
      "unitTests": true,
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
      "commitFrequency": 5,
      "issueResponseTime": 5
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 5
    }
  },
  "other": {}
};
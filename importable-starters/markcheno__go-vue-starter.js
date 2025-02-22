export default {
  "metadata": {
    "name": "go-vue-starter",
    "source": "github",
    "url": "https://github.com/markcheno/go-vue-starter",
    "stars": 193,
    "forks": 39,
    "lastUpdate": "2024-12-26T20:06:50Z"
  },
  "technologies": [
    "golang",
    "vuejs2",
    "jwt-go",
    "go-jwt-middleware",
    "gorm",
    "negroni",
    "gorilla",
    "sqlite",
    "postgres",
    "webpack"
  ],
  "purposes": {
    "ui": "vuejs2",
    "orm": "gorm",
    "authentication": "jwt-go",
    "middleware": "negroni",
    "router": "gorilla",
    "database": "sqlite or postgres",
    "bundling": "webpack"
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
      "envConfig": true,
      "dockerfile": false,
      "infraAsCode": false,
      "productionOptimized": true
    },
    "security": {
      "dependencyScanning": false,
      "secretManagement": false,
      "authentication": true
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 3,
      "issueResponseTime": 2
    },
    "documentation": {
      "readmeCompleteness": 4,
      "setupInstructions": 4,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
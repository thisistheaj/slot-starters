export default {
  "metadata": {
    "name": "mern-boilerplate",
    "source": "enum",
    "url": "https://github.com/nemanjam/mern-boilerplate",
    "stars": 480,
    "forks": 135,
    "lastUpdate": "2025-02-17T07:07:51Z"
  },
  "technologies": [
    "react",
    "redux",
    "express",
    "mongoose",
    "passport",
    "jwt",
    "facebook-login",
    "google-login",
    "mongodb",
    "babel",
    "formik",
    "yup"
  ],
  "purposes": {
    "ui": "react",
    "stateManagement": "redux",
    "backend": "express",
    "database": "mongodb",
    "authentication": "passport",
    "validation": "joi",
    "formHandling": "formik",
    "clientStateManagement": "redux-thunk"
  },
  "features": {
    "development": {
      "hotReload": false,
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
      "secretManagement": true,
      "authentication": true
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 4,
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
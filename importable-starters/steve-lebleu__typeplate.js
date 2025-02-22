export default {
  "metadata": {
    "name": "typeplate",
    "source": "enum",
    "url": "https://github.com/steve-lebleu/typeplate",
    "stars": 330,
    "forks": 46,
    "lastUpdate": "2025-02-01T20:47:58Z"
  },
  "technologies": [
    "typescript",
    "express",
    "typeorm",
    "mocha",
    "docker",
    "mariadb",
    "phpmyadmin",
    "morgan",
    "winston",
    "auto-changelog",
    "chai",
    "supertest",
    "apidoc",
    "passport.js",
    "cliam",
    "memory-cache",
    "multer",
    "jimp"
  ],
  "purposes": {
    "api": "express",
    "orm": "typeorm",
    "testing": "mocha",
    "containerization": "docker",
    "authentication": "passport.js",
    "logging": "winston",
    "email": "cliam"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": false,
      "formatting": false
    },
    "testing": {
      "unitTests": true,
      "integrationTests": true,
      "e2eTests": false,
      "cicd": true
    },
    "deployment": {
      "envConfig": true,
      "dockerfile": true,
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
      "setupInstructions": 5,
      "exampleCoverage": 4
    }
  },
  "other": {}
};
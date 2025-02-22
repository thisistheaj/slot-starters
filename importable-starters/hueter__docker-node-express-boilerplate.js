export default {
  "metadata": {
    "name": "docker-node-express-boilerplate",
    "source": "github",
    "url": "https://github.com/hueter/docker-node-express-boilerplate",
    "stars": 131,
    "forks": 45,
    "lastUpdate": "2024-11-25"
  },
  "technologies": [
    "Docker",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "NGINX",
    "Jest",
    "JavaScript",
    "ES6",
    "RESTful API"
  ],
  "purposes": {
    "containerService": "Docker",
    "runTimeEnvironment": "Node.js",
    "serverFramework": "Express.js",
    "databaseLayer": "MongoDB",
    "odm": "Mongoose",
    "proxyLayer": "NGINX",
    "testingFramework": "Jest"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": true,
      "typeChecking": false,
      "linting": false,
      "formatting": false
    },
    "testing": {
      "unitTests": true,
      "integrationTests": true,
      "e2eTests": false,
      "cicd": false
    },
    "deployment": {
      "envConfig": true,
      "dockerfile": true,
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
      "commitFrequency": 3,
      "issueResponseTime": 3
    },
    "documentation": {
      "readmeCompleteness": 4,
      "setupInstructions": 5,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
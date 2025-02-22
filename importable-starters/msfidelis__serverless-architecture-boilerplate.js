export default {
  "metadata": {
    "name": "serverless-architecture-boilerplate",
    "source": "enum",
    "url": "https://github.com/msfidelis/serverless-architecture-boilerplate",
    "stars": 390,
    "forks": 62,
    "lastUpdate": "2024-09-02T19:34:07Z"
  },
  "technologies": [],
  "purposes": {
    "description": "Maps technologies to their roles in the template"
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
      "unitTests": true,
      "integrationTests": false,
      "e2eTests": false,
      "cicd": true
    },
    "deployment": {
      "envConfig": true,
      "dockerfile": false,
      "infraAsCode": true,
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
      "readmeCompleteness": 5,
      "setupInstructions": 4,
      "exampleCoverage": 5
    }
  },
  "other": {
    "type": {
      "license": "MIT License",
      "is_template": false
    },
    "description": "Important information that doesn't fit elsewhere",
    "examples": {
      "unexpectedProperty": {
        "unexpected": "datastructure"
      }
    }
  }
};
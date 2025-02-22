export default {
  "metadata": {
    "name": "rest",
    "source": "github",
    "url": "https://github.com/diegohaz/rest",
    "stars": 1797,
    "forks": 311,
    "lastUpdate": "2025-02-15"
  },
  "technologies": [
    "Node.js",
    "Express",
    "Mongoose",
    "babel",
    "passport",
    "SendGrid",
    "querymen",
    "bodymen",
    "Jest",
    "Travis CI",
    "apidoc"
  ],
  "purposes": {
    "framework": "Express",
    "orm": "Mongoose",
    "testing": "Jest",
    "continuousIntegration": "Travis CI",
    "documentationGenerator": "apidoc"
  },
  "features": {
    "development": {
      "hotReload": false,
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
      "cicd": true
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
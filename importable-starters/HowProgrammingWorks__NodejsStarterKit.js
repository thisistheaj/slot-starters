export default {
  "metadata": {
    "name": "NodejsStarterKit",
    "source": "github",
    "url": "https://github.com/HowProgrammingWorks/NodejsStarterKit",
    "stars": 460,
    "forks": 102,
    "lastUpdate": "2025-01-21"
  },
  "technologies": [
    "Node.js",
    "PostgreSQL",
    "OpenSSL",
    "certbot"
  ],
  "purposes": {
    "api": "Node.js",
    "database": "PostgreSQL",
    "security": "OpenSSL",
    "httpsCertificate": "certbot"
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
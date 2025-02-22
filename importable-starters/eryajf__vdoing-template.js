export default {
  "metadata": {
    "name": "vdoing-template",
    "source": "github",
    "url": "https://github.com/eryajf/vdoing-template",
    "stars": 226,
    "forks": 24,
    "lastUpdate": "2024-12-18"
  },
  "technologies": [
    "JavaScript",
    "VuePress",
    "GitHub Actions",
    "GitHub Pages",
    "Vssue"
  ],
  "purposes": {
    "framework": "VuePress",
    "ci": "GitHub Actions",
    "hosting": "GitHub Pages",
    "comments": "Vssue"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
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
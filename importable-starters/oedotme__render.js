export default {
  "metadata": {
    "name": "render",
    "source": "github",
    "url": "https://github.com/oedotme/render",
    "stars": 130,
    "forks": 19,
    "lastUpdate": "2025-02-11T01:16:35Z"
  },
  "technologies": [
    "react",
    "typescript",
    "tailwindcss",
    "vite",
    "eslint",
    "prettier",
    "husky",
    "playwright",
    "commitlint",
    "lint-staged",
    "generouted"
  ],
  "purposes": {
    "ui": "react",
    "styling": "tailwindcss",
    "routing": "generouted",
    "testing": "playwright",
    "codeQuality": "eslint",
    "formatting": "prettier",
    "dependencyManagement": "husky"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": true,
      "formatting": true
    },
    "testing": {
      "unitTests": true,
      "integrationTests": false,
      "e2eTests": true,
      "cicd": false
    },
    "deployment": {
      "envConfig": false,
      "dockerfile": false,
      "infraAsCode": false,
      "productionOptimized": true
    },
    "security": {
      "dependencyScanning": true,
      "secretManagement": false,
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
      "setupInstructions": 5,
      "exampleCoverage": 4
    }
  },
  "other": {}
};
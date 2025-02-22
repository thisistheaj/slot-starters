export default {
  "metadata": {
    "name": "cloudflare-workers-webpack-boilerplate",
    "source": "github",
    "url": "https://github.com/detroitenglish/cloudflare-workers-webpack-boilerplate",
    "stars": 125,
    "forks": 11,
    "lastUpdate": "2025-01-24"
  },
  "technologies": [
    "Webpack",
    "Babel",
    "Cloudflare Workers",
    "JavaScript",
    "dotenv",
    "Cloudflare Worker Secrets Vault",
    "Cloudflare Worker KV"
  ],
  "purposes": {
    "bundling": "Webpack",
    "polyfilling": "Babel",
    "serverless": "Cloudflare Workers",
    "configuration": "dotenv",
    "secretManagement": "Cloudflare Worker Secrets Vault",
    "storage": "Cloudflare Worker KV"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": false,
      "linting": true,
      "formatting": true
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
      "exampleCoverage": 4
    }
  },
  "other": {}
};
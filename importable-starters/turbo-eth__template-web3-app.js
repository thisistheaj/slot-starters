export default {
  "metadata": {
    "name": "template-web3-app",
    "source": "github",
    "url": "https://github.com/turbo-eth/template-web3-app",
    "stars": 363,
    "forks": 92,
    "lastUpdate": "2025-02-10T03:33:37Z"
  },
  "technologies": [
    "next.js",
    "react",
    "typescript",
    "tailwind",
    "rainbowkit",
    "siwe",
    "disco",
    "prisma",
    "vercel",
    "eslint",
    "prettier",
    "commitlint"
  ],
  "purposes": {
    "ui": "react",
    "styling": "tailwind",
    "authentication": "siwe",
    "database": "prisma",
    "deployment": "vercel",
    "linting": "eslint",
    "formatting": "prettier"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": true,
      "formatting": true
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
      "dependencyScanning": true,
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
      "readmeCompleteness": 4,
      "setupInstructions": 4,
      "exampleCoverage": 4
    }
  },
  "other": {}
};
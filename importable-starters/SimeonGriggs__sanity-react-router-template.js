export default {
  "metadata": {
    "name": "sanity-react-router-template",
    "source": "github",
    "url": "https://github.com/SimeonGriggs/sanity-react-router-template",
    "stars": 168,
    "forks": 37,
    "lastUpdate": "2025-01-25"
  },
  "technologies": [
    "react",
    "typescript",
    "tailwindcss",
    "sanity",
    "remix",
    "vite",
    "eslint",
    "prettier",
    "@sanity/image-url",
    "@sanity/client",
    "@portabletext/react",
    "zod"
  ],
  "purposes": {
    "frontend": "react",
    "cssFramework": "tailwindcss",
    "backend": "sanity",
    "routing": "remix",
    "bundler": "vite",
    "standardization": "eslint, prettier",
    "dataFetching": "@sanity/client",
    "schemaValidation": "zod"
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
      "unitTests": false,
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
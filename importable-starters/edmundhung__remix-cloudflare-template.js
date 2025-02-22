export default {
  "metadata": {
    "name": "remix-cloudflare-template",
    "source": "github",
    "url": "https://github.com/edmundhung/remix-cloudflare-template",
    "stars": 319,
    "forks": 61,
    "lastUpdate": "2025-02-13"
  },
  "technologies": [
    "Vite",
    "Cloudflare Workers",
    "Static Assets",
    "GitHub Actions",
    "Workers Build",
    "Markdoc",
    "Tailwind",
    "Playwright",
    "MSW",
    "Prettier",
    "ESLint",
    "TypeScript"
  ],
  "purposes": {
    "bundling": "Vite",
    "hosting": "Cloudflare Workers",
    "ci": "GitHub Actions",
    "markdown-rendering": "Markdoc",
    "styling": "Tailwind",
    "e2eTesting": "Playwright",
    "mocking": "MSW",
    "formatting": "Prettier",
    "linting": "ESLint",
    "typing": "TypeScript"
  },
  "features": {
    "development": {
      "hotReload": true,
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
      "e2eTests": true,
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
      "commitFrequency": 3,
      "issueResponseTime": 3
    },
    "documentation": {
      "readmeCompleteness": 4,
      "setupInstructions": 5,
      "exampleCoverage": 4
    }
  },
  "other": {}
};
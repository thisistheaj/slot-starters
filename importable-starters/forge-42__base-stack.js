export default {
  "metadata": {
    "name": "base-stack",
    "source": "github",
    "url": "https://github.com/forge-42/base-stack",
    "stars": 198,
    "forks": 24,
    "lastUpdate": "2025-02-18"
  },
  "technologies": [
    "React",
    "TypeScript",
    "TailwindCSS",
    "Vite",
    "Vitest",
    "Hono",
    "React Router v7",
    "i18next",
    "Lefthook",
    "Biome",
    "react-compiler"
  ],
  "purposes": {
    "frontend framework": "React",
    "router": "React Router v7",
    "styling": "TailwindCSS",
    "bundler": "Vite",
    "unit testing": "Vitest",
    "server": "Hono",
    "internationalization": "i18next",
    "compiler": "react-compiler",
    "linter & formatter": "Biome",
    "git hooks manager": "Lefthook"
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
      "commitFrequency": 3,
      "issueResponseTime": 3
    },
    "documentation": {
      "readmeCompleteness": 4,
      "setupInstructions": 4,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
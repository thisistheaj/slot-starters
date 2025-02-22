export default {
  "metadata": {
    "name": "cloudflare-starter-kit",
    "source": "github",
    "url": "https://github.com/kriasoft/cloudflare-starter-kit",
    "stars": 122,
    "forks": 18,
    "lastUpdate": "2025-02-05"
  },
  "technologies": [
    "TypeScript",
    "Cloudflare Workers",
    "Hono",
    "Vite",
    "Rollup",
    "Miniflare",
    "Wrangler CLI",
    "ESLint",
    "Prettier",
    "Vitest",
    "Yarn",
    "React.js",
    "Babel",
    "GitHub Actions"
  ],
  "purposes": {
    "scripting": "TypeScript",
    "frontend": "React.js",
    "bundling": "Rollup",
    "localTesting": "Miniflare",
    "deploy": "Wrangler CLI",
    "codeQuality": "ESLint",
    "codeFormatting": "Prettier",
    "unitTesting": "Vitest",
    "dependencyManagement": "Yarn"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": true,
      "debugConfig": true,
      "devContainer": false,
      "typeChecking": true,
      "linting": true,
      "formatting": true
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
      "secretManagement": true,
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
export default {
  "metadata": {
    "name": "multi-tenant-starter-template",
    "source": "github",
    "url": "https://github.com/stack-auth/multi-tenant-starter-template",
    "stars": 101,
    "forks": 38,
    "lastUpdate": "2025-02-16T18:33:13Z"
  },
  "technologies": [
    "typescript",
    "nextjs",
    "tailwind",
    "shadcn-ui",
    "stack-auth"
  ],
  "purposes": {
    "ui": "react",
    "styling": "tailwind",
    "authentication": "stack-auth"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": false,
      "formatting": false
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
      "exampleCoverage": 3
    }
  },
  "other": {}
};
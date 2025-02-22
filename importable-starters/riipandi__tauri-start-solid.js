export default {
  "metadata": {
    "name": "tauri-start-solid",
    "source": "enum",
    "url": "https://github.com/riipandi/tauri-start-solid",
    "stars": 153,
    "forks": 11,
    "lastUpdate": "2025-02-18T20:40:23Z"
  },
  "technologies": [
    "tauri",
    "solidjs",
    "typescript",
    "tailwindcss",
    "vite",
    "rust",
    "nanostores",
    "libsql"
  ],
  "purposes": {
    "ui": "solidjs",
    "styling": "tailwindcss",
    "bundling": "vite",
    "language": "typescript",
    "backend": "rust",
    "stateManagement": "nanostores"
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
      "unitTests": false,
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
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 4
    }
  },
  "other": {}
};
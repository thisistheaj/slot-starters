export default {
  "metadata": {
    "name": "fast-vite-electron",
    "source": "github",
    "url": "https://github.com/ArcherGu/fast-vite-electron",
    "stars": 200,
    "forks": 19,
    "lastUpdate": "2025-02-18"
  },
  "technologies": [
    "Vite",
    "Electron",
    "esbuild",
    "TypeScript",
    "Vue",
    "tsup",
    "electron-builder",
    "Doubleshot",
    "einf",
    "pnpm"
  ],
  "purposes": {
    "framework": "Electron",
    "language": "TypeScript",
    "bundling": "Vite",
    "builder": "esbuild",
    "template": "fast-vite-electron",
    "ipc": "einf",
    "quickStart": "Doubleshot",
    "packageManager": "pnpm"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": true,
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
      "envConfig": false,
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
      "commitFrequency": 5,
      "issueResponseTime": 3
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 5
    }
  },
  "other": {}
};
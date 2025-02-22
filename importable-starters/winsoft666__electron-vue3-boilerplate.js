export default {
  "metadata": {
    "name": "electron-vue3-boilerplate",
    "source": "github",
    "url": "https://github.com/winsoft666/electron-vue3-boilerplate",
    "stars": 200,
    "forks": 30,
    "lastUpdate": "2025-02-18"
  },
  "technologies": [
    "Electron",
    "Vue3",
    "TypeScript",
    "Vite",
    "ESLint",
    "NSIS"
  ],
  "purposes": {
    "frontendFramework": "Vue3",
    "language": "TypeScript",
    "buildTool": "Vite",
    "codeLinter": "ESLint",
    "installerPackage": "NSIS"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": true,
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
      "secretManagement": false,
      "authentication": false
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
  "other": {
    "license": "MIT License",
    "isTemplate": true
  }
};
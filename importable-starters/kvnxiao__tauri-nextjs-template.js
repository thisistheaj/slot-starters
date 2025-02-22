export default {
  "metadata": {
    "name": "tauri-nextjs-template",
    "source": "github",
    "url": "https://github.com/kvnxiao/tauri-nextjs-template",
    "stars": 367,
    "forks": 31,
    "lastUpdate": "2025-02-18"
  },
  "technologies": [
    "TypeScript",
    "Next.js",
    "React",
    "Rust",
    "TailwindCSS",
    "Tauri",
    "pnpm",
    "ESLint",
    "Biome",
    "clippy",
    "rustfmt",
    "GitHub Actions"
  ],
  "purposes": {
    "frontend": "React",
    "styling": "TailwindCSS",
    "dependencyManagement": "pnpm",
    "linting": "ESLint",
    "formatting": "Biome",
    "framework": "Next.js",
    "desktopApplication": "Tauri"
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
      "cicd": true
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
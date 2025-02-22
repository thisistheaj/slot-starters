export default {
  "metadata": {
    "name": "ts-monorepo",
    "source": "github",
    "url": "https://github.com/NiGhTTraX/ts-monorepo",
    "stars": 1542,
    "forks": 174,
    "lastUpdate": "2025-02-16"
  },
  "technologies": [
    "TypeScript",
    "pnpm",
    "React",
    "Next.js",
    "NestJS",
    "Storybook",
    "Jest",
    "Webpack",
    "Vite",
    "Rollup",
    "ts-node",
    "babel",
    "tsconfig-paths",
    "npm",
    "yarn",
    "lerna",
    "eslint"
  ],
  "purposes": {
    "packageManager": "pnpm",
    "compilation": "TypeScript",
    "testing": "Jest",
    "ui": "React",
    "ssr": "Next.js",
    "backendFramework": "NestJS",
    "interactiveDocs": "Storybook",
    "pathManagement": "tsconfig-paths",
    "linting": "eslint"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": false,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": true,
      "formatting": false
    },
    "testing": {
      "unitTests": true,
      "integrationTests": false,
      "e2eTests": false,
      "cicd": true
    },
    "deployment": {
      "envConfig": false,
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
  "other": {}
};
export default {
  "metadata": {
    "name": "design-system-template",
    "source": "github",
    "url": "https://github.com/arevalolance/design-system-template",
    "stars": 167,
    "forks": 14,
    "lastUpdate": "2025-02-12"
  },
  "technologies": [
    "Turborepo",
    "TailwindCSS",
    "Storybook",
    "shadcn-ui",
    "TypeScript",
    "React",
    "Next.js",
    "ESLint",
    "Prettier"
  ],
  "purposes": {
    "ui": "React",
    "styling": "TailwindCSS",
    "storybook": "Storybook",
    "configurations": "ESLint & Prettier",
    "componentLibrary": "shadcn-ui"
  },
  "features": {
    "development": {
      "hotReload": false,
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
      "commitFrequency": 3,
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
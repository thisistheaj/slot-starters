export default {
  "metadata": {
    "name": "typescript-react-package-starter",
    "source": "github",
    "url": "https://github.com/TimMikeladze/typescript-react-package-starter",
    "stars": 195,
    "forks": 20,
    "lastUpdate": "2025-02-14"
  },
  "technologies": [
    "TypeScript",
    "React",
    "PostCSS",
    "Vitest",
    "Biome",
    "Storybook",
    "Lefthook",
    "Release-it",
    "Github Actions",
    "Dependabot",
    "TSX",
    "tsup"
  ],
  "purposes": {
    "building and bundling": "tsup",
    "UI development": "React",
    "UI component isolation": "Storybook",
    "testing": "Vitest",
    "linting and formatting": "Biome",
    "pre-commit hooks": "Lefthook",
    "release automation": "Release-it",
    "CI/CD": "Github Actions",
    "dependency management": "Dependabot",
    "execution": "TSX",
    "CSS processing": "PostCSS"
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
      "cicd": true
    },
    "deployment": {
      "envConfig": false,
      "dockerfile": false,
      "infraAsCode": false,
      "productionOptimized": true
    },
    "security": {
      "dependencyScanning": true,
      "secretManagement": true,
      "authentication": false
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 4,
      "issueResponseTime": 4
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 5
    }
  },
  "other": {}
};
export default {
  "metadata": {
    "name": "generator-typescript-react-lib",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-typescript-react-lib",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2024-09-03"
  },
  "technologies": [
    "typescript",
    "react",
    "yeoman-generator",
    "rollup",
    "jest",
    "github-actions",
    "codecov",
    "renovate",
    "unpkg",
    "git",
    "npm"
  ],
  "purposes": {
    "ui": "react",
    "bundling": "rollup",
    "testing": "jest",
    "ci/cd": "github-actions",
    "coverage": "codecov",
    "dependencyManagement": "renovate",
    "packageDistribution": "npm",
    "sourceControl": "git",
    "moduleDistribution": "unpkg"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
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
      "exampleCoverage": 3
    }
  },
  "other": {
    "multiPlatformSupport": {
      "commonjs": true,
      "esm": true,
      "umd": true
    }
  }
};
export default {
  "metadata": {
    "name": "generator-node-bahmutov",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-node-bahmutov",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2018-07-03"
  },
  "technologies": [
    "Yeoman",
    "Node.js",
    "npm",
    "Git",
    "GitHub",
    "GitLab",
    "standard",
    "prettier-standard",
    "eslint-plugin-immutable",
    "Mocha",
    "Node Security Project",
    "license-checker",
    "deps-ok",
    "semantic-release",
    "docker",
    "dumb-init"
  ],
  "purposes": {
    "scaffolding": "Yeoman",
    "runtime": "Node.js",
    "package_management": "npm",
    "source_control": "Git",
    "code_style": "standard, prettier-standard",
    "linting": "eslint-plugin-immutable",
    "unit_testing": "Mocha",
    "security_scanning": "Node Security Project",
    "license_management": "license-checker",
    "dependency_management": "deps-ok",
    "release_management": "semantic-release",
    "containerization": "docker"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
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
      "cicd": false
    },
    "deployment": {
      "envConfig": false,
      "dockerfile": true,
      "infraAsCode": false,
      "productionOptimized": true
    },
    "security": {
      "dependencyScanning": true,
      "secretManagement": false,
      "authentication": false
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 1,
      "issueResponseTime": 1
    },
    "documentation": {
      "readmeCompleteness": 4,
      "setupInstructions": 5,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
export default {
  "metadata": {
    "name": "generator-ruby-starter-kit",
    "source": "npm",
    "url": "https://www.npmjs.com/package/generator-ruby-starter-kit",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2017-08-01"
  },
  "technologies": [
    "Ruby",
    "Bundler",
    "Guard",
    "ActiveSupport Logger",
    "Rubocop",
    "RSpec",
    "WebMock",
    "Travis",
    "CodeClimate"
  ],
  "purposes": {
    "language": "Ruby",
    "dependency_management": "Bundler",
    "development_tools": "Guard",
    "logging": "ActiveSupport Logger",
    "code_quality": "Rubocop",
    "testing": "RSpec",
    "mocking": "WebMock",
    "continuous_integration": "Travis",
    "code_analysis": "CodeClimate"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": false,
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
      "commitFrequency": 2,
      "issueResponseTime": 3
    },
    "documentation": {
      "readmeCompleteness": 4,
      "setupInstructions": 5,
      "exampleCoverage": 2
    }
  },
  "other": {
    "last_version": "0.2.39",
    "popularity_score": 1
  }
};
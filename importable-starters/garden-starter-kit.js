export default {
  "metadata": {
    "name": "garden-starter-kit",
    "source": "npm",
    "url": "https://www.npmjs.com/package/garden-starter-kit",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2017-11-18"
  },
  "technologies": [
    "Git",
    "Docker",
    "NodeJS",
    "Ruby",
    "Rubygems",
    "Bundler",
    "Gulp",
    "Sass",
    "Twig",
    "Webpack",
    "NPM",
    "KSS",
    "Browsersync"
  ],
  "purposes": {
    "versionControl": "Git",
    "containerization": "Docker",
    "runtime": "NodeJS",
    "serverSideScriptingLanguage": "Ruby",
    "packageManagement": "Rubygems, NPM",
    "projectDependencyManagement": "Bundler",
    "taskRunner": "Gulp",
    "cssPreprocessing": "Sass",
    "templating": "Twig",
    "bundling": "Webpack",
    "documentation": "KSS"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": true,
      "typeChecking": false,
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
      "envConfig": true,
      "dockerfile": true,
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
      "commitFrequency": 1,
      "issueResponseTime": 1
    },
    "documentation": {
      "readmeCompleteness": 4,
      "setupInstructions": 4,
      "exampleCoverage": 2
    }
  },
  "other": {
    "additionalContext": "The kit is based on older technology stacks and may require updates to work with current systems."
  }
};
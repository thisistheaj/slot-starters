export default {
  "metadata": {
    "name": "django-project-template",
    "source": "github",
    "url": "https://github.com/thorgate/django-project-template",
    "stars": 124,
    "forks": 16,
    "lastUpdate": "2025-01-01T01:32:06Z"
  },
  "technologies": [
    "django",
    "react",
    "javascript",
    "sass",
    "docker",
    "docker-compose",
    "webpack",
    "babel",
    "postcss",
    "autoprefixer",
    "razzle",
    "ansible",
    "py.test",
    "coverage",
    "black",
    "prettier",
    "eslint",
    "stylelint",
    "cookiecutter"
  ],
  "purposes": {
    "ui": "react",
    "styling": "sass",
    "backend": "django",
    "orm": "django",
    "testing": "pytest",
    "buildTool": "webpack",
    "containerization": "docker",
    "dependencyManagement": "poetry"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
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
      "envConfig": true,
      "dockerfile": true,
      "infraAsCode": true,
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
      "commitFrequency": 4,
      "issueResponseTime": 3
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 4,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
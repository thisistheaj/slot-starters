export default {
  "metadata": {
    "name": "php-docker-boilerplate",
    "source": "github",
    "url": "https://github.com/webdevops/php-docker-boilerplate",
    "stars": 558,
    "forks": 186,
    "lastUpdate": "2025-02-11"
  },
  "technologies": [
    "apache2",
    "boilerplate",
    "docker",
    "elasticsearch",
    "ftp",
    "mail-sandbox",
    "mysql",
    "nginx",
    "php",
    "php-fpm",
    "solr",
    "symfony",
    "javascript"
  ],
  "purposes": {
    "webserver": "nginx, apache2",
    "database": "mysql, solr, elasticsearch",
    "scripting": "php",
    "containerization": "docker"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": true,
      "devContainer": true,
      "typeChecking": false,
      "linting": false,
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
      "dockerfile": true,
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
      "readmeCompleteness": 4,
      "setupInstructions": 4,
      "exampleCoverage": 3
    }
  },
  "other": {}
};
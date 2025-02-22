export default {
  "metadata": {
    "name": "node-express-boilerplate",
    "source": "github",
    "url": "https://github.com/hagopj13/node-express-boilerplate",
    "stars": 7128,
    "forks": 2104,
    "lastUpdate": "2025-02-18"
  },
  "technologies": [
    "Node.js",
    "Express",
    "Mongoose",
    "MongoDB",
    "passport",
    "Joi",
    "winston",
    "morgan",
    "Jest",
    "swagger-jsdoc",
    "swagger-ui-express",
    "PM2",
    "Yarn",
    "dotenv",
    "cross-env",
    "helmet",
    "cors",
    "compression",
    "Travis CI",
    "docker",
    "coveralls",
    "Codacy",
    "husky",
    "lint-staged",
    "ESLint",
    "Prettier",
    "EditorConfig"
  ],
  "purposes": {
    "webFramework": "Express",
    "database": "MongoDB",
    "orm": "Mongoose",
    "authentication": "passport",
    "validation": "Joi",
    "logging": "winston & morgan",
    "testing": "Jest",
    "apiDocumentation": "swagger-jsdoc & swagger-ui-express",
    "processManagement": "PM2",
    "dependencyManagement": "Yarn",
    "environmentVariables": "dotenv & cross-env",
    "security": "helmet",
    "sanitization": "cors & compression",
    "continuousIntegration": "Travis CI",
    "containerization": "docker",
    "codeCoverage": "coveralls",
    "codeQuality": "Codacy",
    "gitHooks": "husky & lint-staged",
    "linting": "ESLint",
    "formatting": "Prettier",
    "editorConfig": "EditorConfig"
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
      "integrationTests": true,
      "e2eTests": false,
      "cicd": true
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
      "authentication": true
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
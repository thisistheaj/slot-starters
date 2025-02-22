export default {
  "metadata": {
    "name": "react-native-template-strong",
    "source": "enum",
    "url": "https://github.com/svbutko/react-native-template-strong",
    "stars": 117,
    "forks": 15,
    "lastUpdate": "2025-01-07T01:56:12Z"
  },
  "technologies": [
    "react-native",
    "typescript",
    "redux",
    "react-native-navigation",
    "reanimated",
    "jest",
    "detox",
    "storybook",
    "eslint",
    "prettier"
  ],
  "purposes": {
    "ui": "react-native",
    "stateManagement": "redux",
    "navigation": "react-native-navigation",
    "animation": "reanimated",
    "testing": "jest",
    "e2eTesting": "detox",
    "developmentTools": "storybook",
    "linting": "eslint",
    "formatting": "prettier"
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
      "e2eTests": true,
      "cicd": false
    },
    "deployment": {
      "envConfig": true,
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
  "other": {}
};
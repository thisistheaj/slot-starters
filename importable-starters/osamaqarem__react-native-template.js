export default {
  "metadata": {
    "name": "react-native-template",
    "source": "enum",
    "url": "https://github.com/osamaqarem/react-native-template",
    "stars": 217,
    "forks": 50,
    "lastUpdate": "2025-02-14T05:38:24Z"
  },
  "technologies": [
    "typescript",
    "react",
    "redux",
    "redux-toolkit",
    "swr",
    "redux-observable",
    "react-navigation",
    "reactotron",
    "sentry",
    "react-native-bootsplash",
    "react-native-svg",
    "react-native-config",
    "reanimated",
    "redash",
    "asyncstorage",
    "fastimage",
    "detox",
    "miragejs",
    "fastlane"
  ],
  "purposes": {
    "ui": "react",
    "stateManagement": "redux",
    "dataFetching": "swr",
    "globalState": "redux-toolkit",
    "navigation": "react-navigation",
    "debugging": "reactotron",
    "productionErrorTracking": "sentry",
    "splashScreen": "react-native-bootsplash",
    "svgSupport": "react-native-svg",
    "environmentVariableManagement": "react-native-config",
    "animations": "reanimated",
    "apiMocking": "miragejs",
    "endToEndTesting": "detox",
    "automation": "fastlane"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": false,
      "debugConfig": true,
      "devContainer": false,
      "typeChecking": true,
      "linting": false,
      "formatting": false
    },
    "testing": {
      "unitTests": false,
      "integrationTests": false,
      "e2eTests": true,
      "cicd": true
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
      "commitFrequency": 4,
      "issueResponseTime": 4
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 5,
      "exampleCoverage": 4
    }
  },
  "other": {}
};
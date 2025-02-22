export default {
  "metadata": {
    "name": "create-webassembly-app",
    "source": "github",
    "url": "https://github.com/MiladHajiShafiee/create-web-assembly",
    "stars": 0,
    "forks": 0,
    "lastUpdate": "2022-09-05"
  },
  "technologies": [
    "Node.js",
    "WebAssembly",
    "Emscripten",
    "WABT",
    "Make",
    "JavaScript",
    "C",
    "C++"
  ],
  "purposes": {
    "webAssemblyCompilation": "Emscripten",
    "localServer": "Node.js",
    "assemblyScriptCompilation": "WABT",
    "scriptAutomation": "Make"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
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
      "issueResponseTime": 2
    },
    "documentation": {
      "readmeCompleteness": 3,
      "setupInstructions": 4,
      "exampleCoverage": 3
    }
  },
  "other": {
    "additionalNotes": "Template supports initialization and development of WebAssembly application using JavaScript. C++ support is noted as 'coming soon'.",
    "detailedSetup": "The template requires users to install Emscripten, WABT, Node.js and Make for full functionality."
  }
};
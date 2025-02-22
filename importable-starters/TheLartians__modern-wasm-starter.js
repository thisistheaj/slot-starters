export default {
  "metadata": {
    "name": "modern-wasm-starter",
    "source": "github",
    "url": "https://github.com/TheLartians/modern-wasm-starter",
    "stars": 247,
    "forks": 13,
    "lastUpdate": "2025-02-12"
  },
  "technologies": [
    "C++",
    "TypeScript",
    "WebAssembly",
    "npm",
    "jest",
    "Webpack",
    "CMake",
    "Emscripten",
    "prettier",
    "clang-format"
  ],
  "purposes": {
    "webAssemblyCompilation": "Emscripten",
    "dependencyManagement": "CPM.cmake",
    "testFramework": "jest",
    "packageManagement": "npm",
    "codeFormatting": "prettier, clang-format"
  },
  "features": {
    "development": {
      "hotReload": false,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": false,
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
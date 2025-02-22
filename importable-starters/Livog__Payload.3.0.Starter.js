export default {
  "metadata": {
    "name": "Payload.3.0.Starter",
    "source": "github",
    "url": "https://github.com/Livog/Payload.3.0.Starter",
    "stars": 100,
    "forks": 25,
    "lastUpdate": "2025-02-14"
  },
  "technologies": [
    "Next.js",
    "Payload",
    "NextAuth.js",
    "Tailwind CSS",
    "Prettier",
    "Lexical Component (RSC)",
    "SVGR",
    "Email with Resend",
    "S3/Cloudflare R2 Cloud Storage",
    "shadcn/ui",
    "MongoDB"
  ],
  "purposes": {
    "frontendFramework": "Next.js",
    "cms": "Payload",
    "authentication": "NextAuth.js",
    "styling": "Tailwind CSS",
    "formatting": "Prettier",
    "uiLibrary": "shadcn/ui",
    "database": "MongoDB",
    "emailService": "Email with Resend",
    "cloudStorage": "S3/Cloudflare R2"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": false,
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
      "dockerfile": false,
      "infraAsCode": false,
      "productionOptimized": false
    },
    "security": {
      "dependencyScanning": false,
      "secretManagement": true,
      "authentication": true
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 3,
      "issueResponseTime": 3
    },
    "documentation": {
      "readmeCompleteness": 4,
      "setupInstructions": 5,
      "exampleCoverage": 3
    }
  },
  "other": {
    "license": "No license",
    "isTemplate": false
  }
};
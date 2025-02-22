export default {
  "metadata": {
    "name": "ultimate-backend",
    "source": "github",
    "url": "https://github.com/juicycleff/ultimate-backend",
    "stars": 2738,
    "forks": 418,
    "lastUpdate": "2025-02-18"
  },
  "technologies": [
    "TypeScript",
    "Apollo",
    "GraphQL",
    "NestJS",
    "CQRS",
    "Event Sourcing",
    "Consul",
    "Redis",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "etcd",
    "Stripe",
    "NATS",
    "ExpressJS",
    "Fastify",
    "GRPC"
  ],
  "purposes": {
    "backendFramework": "NestJS",
    "database": "MongoDB, Redis, ArangoDB",
    "authentication": "OAuth2, GraphQL, Sessions",
    "api": "GraphQL, GRPC",
    "eventSourcing": "Event Store, NATS Streaming",
    "serviceDiscovery": "Consul",
    "cache": "Redis",
    "payment": "Stripe",
    "queue": "Redis",
    "orchestration": "Docker, Kubernetes"
  },
  "features": {
    "development": {
      "hotReload": true,
      "watchMode": true,
      "debugConfig": false,
      "devContainer": false,
      "typeChecking": true,
      "linting": false,
      "formatting": false
    },
    "testing": {
      "unitTests": true,
      "integrationTests": false,
      "e2eTests": true,
      "cicd": false
    },
    "deployment": {
      "envConfig": true,
      "dockerfile": true,
      "infraAsCode": true,
      "productionOptimized": true
    },
    "security": {
      "dependencyScanning": true,
      "secretManagement": true,
      "authentication": true
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 5,
      "issueResponseTime": 3
    },
    "documentation": {
      "readmeCompleteness": 5,
      "setupInstructions": 4,
      "exampleCoverage": 4
    }
  },
  "other": {}
};
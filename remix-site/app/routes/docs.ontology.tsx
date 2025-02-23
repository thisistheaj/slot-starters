import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Ontology - Slot Documentation" },
    { name: "description", content: "Learn about Slot's template analysis framework and how we understand starter templates" },
  ];
};

export default function Ontology() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Template Analysis Framework</h1>
      
      <div className="space-y-4">
        <p>
          Slot uses a comprehensive ontology to analyze and understand starter templates. This framework
          helps us categorize features, evaluate quality, and make intelligent recommendations based on
          your specific needs.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Schema Definition</h2>
        
        <div className="space-y-4">
          <p className="text-muted-foreground">
            The complete JSON schema that defines our template analysis framework:
          </p>

          <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
            <code className="text-sm font-mono">{`{
  "metadata": {
    "name": "string",
    "source": {
      "type": "enum",
      "values": ["github", "npm"]
    },
    "url": "string",
    "stars": "number",
    "forks": "number",
    "lastUpdate": "date"
  },
  "technologies": {
    "type": "array",
    "description": "Flat list of all technologies, tools, and frameworks used",
    "examples": [
      "react", "typescript", "tailwind", "jest", "vite", "docker",
      "postgres", "prisma", "next-auth", "eslint", "prettier"
    ]
  },
  "purposes": {
    "type": "object",
    "description": "Maps technologies to their roles in the template",
    "examples": {
      "ui": "react",
      "styling": "tailwind",
      "database": "postgres",
      "orm": "prisma",
      "testing": "jest",
      "bundling": "vite"
    }
  },
  "features": {
    "development": {
      "hotReload": "boolean",
      "watchMode": "boolean",
      "debugConfig": "boolean",
      "devContainer": "boolean",
      "typeChecking": "boolean",
      "linting": "boolean",
      "formatting": "boolean"
    },
    "testing": {
      "unitTests": "boolean",
      "integrationTests": "boolean",
      "e2eTests": "boolean",
      "cicd": "boolean"
    },
    "deployment": {
      "envConfig": "boolean",
      "dockerfile": "boolean",
      "infraAsCode": "boolean",
      "productionOptimized": "boolean"
    },
    "security": {
      "dependencyScanning": "boolean",
      "secretManagement": "boolean",
      "authentication": "boolean"
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": {
        "type": "scale",
        "range": [1, 5]
      },
      "issueResponseTime": {
        "type": "scale",
        "range": [1, 5]
      }
    },
    "documentation": {
      "readmeCompleteness": {
        "type": "scale",
        "range": [1, 5]
      },
      "setupInstructions": {
        "type": "scale",
        "range": [1, 5]
      },
      "exampleCoverage": {
        "type": "scale",
        "range": [1, 5]
      }
    }
  },
  "other": {
    "type": "object",
    "description": "Important information that doesn't fit elsewhere",
    "examples": {
      "unexpectedProperty": { "unexpected": "datastructure" }
    }
  }
}`}</code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Core Categories</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg">Technologies & Purposes</h3>
            <p className="text-muted-foreground mb-2">
              We analyze both the technology stack and how each technology is used:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium">Common Technologies</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>React, Vue, Angular</li>
                  <li>TypeScript, JavaScript</li>
                  <li>Tailwind, CSS-in-JS</li>
                  <li>Jest, Vitest, Cypress</li>
                  <li>Vite, Webpack</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium">Purpose Mapping</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>UI frameworks</li>
                  <li>Styling solutions</li>
                  <li>Database & ORM</li>
                  <li>Testing tools</li>
                  <li>Build tools</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Features</h3>
            <p className="text-muted-foreground mb-2">
              We identify key features across four main categories:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium">Development</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Hot reload support</li>
                  <li>Watch mode</li>
                  <li>Debug configuration</li>
                  <li>Dev containers</li>
                  <li>Type checking</li>
                  <li>Linting & formatting</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium">Testing</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Unit tests</li>
                  <li>Integration tests</li>
                  <li>E2E tests</li>
                  <li>CI/CD setup</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium">Deployment</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Environment config</li>
                  <li>Dockerfile</li>
                  <li>Infrastructure as code</li>
                  <li>Production optimization</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium">Security</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Dependency scanning</li>
                  <li>Secret management</li>
                  <li>Authentication</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Quality Metrics</h3>
            <p className="text-muted-foreground mb-2">
              We evaluate quality using 1-5 scale metrics across key dimensions:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium">Maintenance</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Commit frequency (1-5)</li>
                  <li>Issue response time (1-5)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium">Documentation</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>README completeness (1-5)</li>
                  <li>Setup instructions (1-5)</li>
                  <li>Example coverage (1-5)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Analysis Output</h2>
        
        <div className="space-y-4">
          <p className="text-muted-foreground">
            For each template, our analysis produces:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg">Core Data</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Technology list and purposes</li>
                <li>Feature presence (boolean flags)</li>
                <li>Quality scores (1-5 scales)</li>
                <li>Metadata (stars, forks, updates)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg">Extended Data</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Additional properties</li>
                <li>Unexpected data structures</li>
                <li>Template-specific information</li>
                <li>Custom metadata</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Next Steps</h2>
        <p className="text-muted-foreground">
          Learn more about how we use this framework to{" "}
          <a href="/docs/quality-metrics" className="underline hover:no-underline">evaluate template quality</a>
          {" "}and provide accurate recommendations.
        </p>
      </div>
    </div>
  );
} 
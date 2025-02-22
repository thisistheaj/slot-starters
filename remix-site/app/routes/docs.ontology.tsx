import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Analysis Ontology - Slot Documentation" },
    { name: "description", content: "Documentation for Slot's template analysis ontology schema" },
  ];
};

export default function OntologyDocs() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Template Analysis Ontology</h1>
      
      <div className="space-y-4">
        <p>
          The template analysis ontology is a comprehensive schema that defines how Slot analyzes and categorizes starter templates.
          This schema helps ensure consistent analysis across templates and enables AI assistants to make informed recommendations.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Schema Structure</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Metadata</h3>
            <p className="text-sm text-muted-foreground mt-1">Basic information about the template</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>name - Template name</li>
              <li>description - Brief description</li>
              <li>repository - Source repository URL</li>
              <li>author - Template author</li>
              <li>stars - GitHub stars count</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Technologies</h3>
            <p className="text-sm text-muted-foreground mt-1">Core technologies and frameworks used</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>language - Primary programming language</li>
              <li>framework - Main framework (e.g., React, Vue)</li>
              <li>runtime - Runtime environment</li>
              <li>buildTools - Build system and tools</li>
              <li>database - Database technologies</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Features</h3>
            <p className="text-sm text-muted-foreground mt-1">Development features and capabilities</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>authentication - Auth implementation</li>
              <li>testing - Testing frameworks and setup</li>
              <li>deployment - Deployment configuration</li>
              <li>ci - Continuous integration setup</li>
              <li>styling - CSS and styling approach</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Quality</h3>
            <p className="text-sm text-muted-foreground mt-1">Code quality and maintainability metrics</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>documentation - Documentation quality score</li>
              <li>testCoverage - Test coverage percentage</li>
              <li>dependencies - Dependency health score</li>
              <li>security - Security audit score</li>
              <li>maintenance - Maintenance activity score</li>
            </ul>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Example Analysis</h2>
        
        <pre className="p-4 rounded-lg bg-muted overflow-auto">
          <code>{JSON.stringify({
            "metadata": {
              "name": "next-enterprise",
              "description": "Enterprise-grade Next.js boilerplate",
              "repository": "https://github.com/Blazity/next-enterprise",
              "author": "Blazity",
              "stars": 2800
            },
            "technologies": {
              "language": "TypeScript",
              "framework": "Next.js",
              "runtime": "Node.js",
              "buildTools": ["Turbo", "ESBuild"],
              "database": "PostgreSQL"
            },
            "features": {
              "authentication": "NextAuth.js",
              "testing": ["Jest", "Cypress"],
              "deployment": "Vercel",
              "ci": "GitHub Actions",
              "styling": "Tailwind CSS"
            },
            "quality": {
              "documentation": 0.9,
              "testCoverage": 0.85,
              "dependencies": 0.95,
              "security": 0.9,
              "maintenance": 0.85
            }
          }, null, 2)}</code>
        </pre>

        <p className="mt-4">
          This schema is continuously evolving based on community feedback and emerging best practices.
          For the latest version and full details, check our{" "}
          <a 
            href="https://github.com/thisistheaj/slot-starters" 
            className="font-medium underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub repository
          </a>.
        </p>
      </div>
    </div>
  );
} 
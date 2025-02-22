import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Searching Starters - Slot CLI Documentation" },
    { name: "description", content: "Learn how to use Slot's CLI tools to search starter templates" },
  ];
};

export default function SearchingDocs() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Searching Starters</h1>
      
      <div className="space-y-4">
        <p>
          Slot's CLI search tools help you find the perfect starter template directly from your terminal.
          You can search by technologies, features, and quality criteria to discover templates that match your needs.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Basic Usage</h2>
        
        <p>
          Use the search command with various filters:
        </p>
        <pre className="p-4 rounded-lg bg-muted overflow-auto">
          <code>{`slot search [options]`}</code>
        </pre>

        <h3 className="text-xl font-semibold mt-6">Options</h3>
        <div className="space-y-3">
          <div>
            <code className="text-sm bg-muted px-2 py-1 rounded">-t, --technologies &lt;items&gt;</code>
            <p className="text-sm text-muted-foreground mt-1">Technologies to search for (comma-separated)</p>
          </div>
          <div>
            <code className="text-sm bg-muted px-2 py-1 rounded">-p, --purposes &lt;items&gt;</code>
            <p className="text-sm text-muted-foreground mt-1">Purposes to search for (comma-separated key:value pairs)</p>
          </div>
          <div>
            <code className="text-sm bg-muted px-2 py-1 rounded">-f, --features &lt;items&gt;</code>
            <p className="text-sm text-muted-foreground mt-1">Features to search for (comma-separated paths)</p>
          </div>
          <div>
            <code className="text-sm bg-muted px-2 py-1 rounded">-q, --quality &lt;number&gt;</code>
            <p className="text-sm text-muted-foreground mt-1">Minimum quality score (1-5)</p>
          </div>
          <div>
            <code className="text-sm bg-muted px-2 py-1 rounded">-l, --limit &lt;number&gt;</code>
            <p className="text-sm text-muted-foreground mt-1">Maximum number of results (default: 10)</p>
          </div>
          <div>
            <code className="text-sm bg-muted px-2 py-1 rounded">--json</code>
            <p className="text-sm text-muted-foreground mt-1">Output results in JSON format</p>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Search Examples</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Search by Technologies</h3>
            <pre className="p-4 rounded-lg bg-muted overflow-auto mt-2">
              <code>{`# Find React starters
slot search -t react

# Find TypeScript and Next.js templates
slot search -t typescript,nextjs

# Find full-stack templates
slot search -t react,express,postgresql`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Search by Features</h3>
            <pre className="p-4 rounded-lg bg-muted overflow-auto mt-2">
              <code>{`# Find templates with testing setup
slot search -f testing.unit,testing.e2e

# Find templates with authentication
slot search -f security.authentication

# Find templates with Docker support
slot search -f deployment.docker`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Combined Search</h3>
            <pre className="p-4 rounded-lg bg-muted overflow-auto mt-2">
              <code>{`# React templates with testing and Docker
slot search -t react -f testing.unit,deployment.docker

# High-quality Next.js templates
slot search -t nextjs -q 4

# Full-featured React templates
slot search -t react -f testing.unit,deployment.docker,security.authentication -q 4 -l 5`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Purpose-Based Search</h3>
            <pre className="p-4 rounded-lg bg-muted overflow-auto mt-2">
              <code>{`# Find UI component libraries
slot search -p framework:react,ui:component

# Find API server templates
slot search -p backend:express,database:postgresql

# Find full-stack applications
slot search -p frontend:react,backend:node`}</code>
            </pre>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Output Format</h2>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Default Output</h3>
          <p>
            By default, results are displayed in a human-readable format:
          </p>
          <pre className="p-4 rounded-lg bg-muted overflow-auto mt-2">
            <code>{`Search Results:

next-enterprise
Matches: 3/4 (Quality Score: 4.5)
URL: https://github.com/Blazity/next-enterprise
Technologies: nextjs, typescript, tailwind

t3-app
Matches: 2/4 (Quality Score: 4.8)
URL: https://github.com/t3-oss/create-t3-app
Technologies: nextjs, typescript, prisma`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-6">JSON Output</h3>
          <p>
            Use the <code className="text-sm bg-muted px-2 py-1 rounded">--json</code> flag for machine-readable output:
          </p>
          <pre className="p-4 rounded-lg bg-muted overflow-auto mt-2">
            <code>{JSON.stringify({
              "results": [
                {
                  "name": "next-enterprise",
                  "url": "https://github.com/Blazity/next-enterprise",
                  "technologies": ["nextjs", "typescript", "tailwind"],
                  "matches": "3/4",
                  "score": 4.5
                },
                {
                  "name": "t3-app",
                  "url": "https://github.com/t3-oss/create-t3-app",
                  "technologies": ["nextjs", "typescript", "prisma"],
                  "matches": "2/4",
                  "score": 4.8
                }
              ]
            }, null, 2)}</code>
          </pre>
        </div>

        <div className="mt-6 rounded-md bg-muted p-4">
          <h3 className="text-sm font-medium">Search Tips</h3>
          <ul className="mt-2 text-sm space-y-2">
            <li>• Start with broad criteria and refine as needed</li>
            <li>• Use quality scores to filter for well-maintained templates</li>
            <li>• Combine technology and feature searches for precise results</li>
            <li>• Check both exact and partial matches in the results</li>
          </ul>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Related Tools</h2>
        
        <ul className="list-disc list-inside space-y-2">
          <li>
            Use the{" "}
            <a href="/explore" className="font-medium underline underline-offset-4">
              web interface
            </a>
            {" "}for a visual search experience
          </li>
          <li>
            Learn about{" "}
            <a href="/docs/search" className="font-medium underline underline-offset-4">
              search capabilities
            </a>
            {" "}and ranking algorithms
          </li>
          <li>
            Understand the{" "}
            <a href="/docs/ontology" className="font-medium underline underline-offset-4">
              template ontology
            </a>
            {" "}for better search queries
          </li>
        </ul>
      </div>
    </div>
  );
} 
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Search Engine - Slot Documentation" },
    { name: "description", content: "Learn how Slot's template search engine works" },
  ];
};

export default function SearchDocs() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Search Engine</h1>
      
      <div className="space-y-4">
        <p>
          Slot's search engine helps you find the perfect starter template by combining multiple search criteria
          with intelligent ranking algorithms. The search system understands both technical requirements and
          quality preferences to deliver the most relevant results.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Search Capabilities</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Technology Stack</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Search by specific technologies:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Programming languages (TypeScript, Python, etc.)</li>
              <li>Frameworks (React, Vue, Next.js, etc.)</li>
              <li>Build tools (Webpack, Vite, etc.)</li>
              <li>Testing frameworks (Jest, Cypress, etc.)</li>
              <li>Database technologies (PostgreSQL, MongoDB, etc.)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Features</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Filter by development features:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Hot reload support</li>
              <li>Type checking configuration</li>
              <li>Testing setup</li>
              <li>CI/CD configuration</li>
              <li>Docker support</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Quality Criteria</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Filter by quality metrics:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Documentation completeness</li>
              <li>Maintenance status</li>
              <li>Test coverage</li>
              <li>Code quality</li>
              <li>Security practices</li>
            </ul>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Search Algorithm</h2>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">1. Criteria Matching</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg border bg-card p-4">
              <h4 className="font-semibold">Exact Matching</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Technology names</li>
                <li>• Feature flags</li>
                <li>• Framework versions</li>
                <li>• Tool configurations</li>
              </ul>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h4 className="font-semibold">Fuzzy Matching</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Similar technologies</li>
                <li>• Alternative tools</li>
                <li>• Compatible versions</li>
                <li>• Related features</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-6">2. Result Ranking</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Results are ranked based on multiple factors:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="rounded-lg border bg-card p-4">
              <h4 className="font-semibold">Match Score</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Number of matched criteria</li>
                <li>• Criteria importance weight</li>
                <li>• Match precision</li>
              </ul>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h4 className="font-semibold">Quality Score</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Documentation quality</li>
                <li>• Maintenance status</li>
                <li>• Community metrics</li>
              </ul>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h4 className="font-semibold">Relevance Score</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Usage patterns</li>
                <li>• User feedback</li>
                <li>• Recent updates</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Using the Search</h2>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Through Claude Desktop</h3>
          <p>
            Simply describe what you're looking for in natural language:
          </p>
          <pre className="p-4 rounded-lg bg-muted overflow-auto">
            <code>{`"Find me a React starter template with TypeScript and testing setup"
"I need a Next.js template with authentication and PostgreSQL"
"Show me well-documented Vue.js starters with Tailwind CSS"`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-6">Using the CLI</h3>
          <p>
            Use the search command with specific criteria:
          </p>
          <pre className="p-4 rounded-lg bg-muted overflow-auto">
            <code>{`# Search by technologies
slot search -t react,typescript

# Search by features
slot search -f testing.unit,auth.oauth

# Combine multiple criteria
slot search -t nextjs,prisma -f deployment.docker -q 4`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-6">Web Interface</h3>
          <p>
            Use the{" "}
            <a href="/explore" className="font-medium underline underline-offset-4">
              template explorer
            </a>
            {" "}to search visually:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Select technologies from the tag cloud</li>
            <li>Filter by features and capabilities</li>
            <li>Set minimum quality requirements</li>
            <li>Sort and compare results</li>
          </ul>
        </div>

        <div className="mt-6 rounded-md bg-muted p-4">
          <h3 className="text-sm font-medium">Search Tips</h3>
          <ul className="mt-2 text-sm space-y-2">
            <li>• Start with essential requirements to get more results</li>
            <li>• Use quality filters to focus on well-maintained templates</li>
            <li>• Consider alternative technologies suggested by fuzzy matching</li>
            <li>• Check both exact and partial matches in the results</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 
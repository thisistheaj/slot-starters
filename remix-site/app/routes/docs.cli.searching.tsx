import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Searching Starters - Slot Documentation" },
    { name: "description", content: "Learn how to search through templates using Slot's CLI tools" },
  ];
};

export default function CliSearching() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Searching Starters</h1>
      
      <div className="space-y-4">
        <p>
          While the MCP server provides a natural language interface for searching templates, you can
          also use the CLI tools to search directly from the command line. This guide shows you how
          to effectively search through your template index.
        </p>

        <div className="rounded-lg border bg-muted/50 p-4">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> The CLI tools are optional. For most users, searching through
            AI conversations with the MCP server will be more convenient and powerful.
          </p>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Basic Usage</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg">Search Options</h3>
            <p className="text-muted-foreground mb-2">
              The search command supports several filtering options:
            </p>
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code className="text-sm font-mono">{`# Search by technologies
slot search -t react,typescript

# Search by purposes
slot search -p frontend:web,backend:api

# Search by features
slot search -f authentication,testing

# Limit results
slot search -t react -l 5`}</code>
            </pre>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Available Options</h3>
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
                <p className="text-sm text-muted-foreground mt-1">Features to search for (comma-separated)</p>
              </div>
              <div>
                <code className="text-sm bg-muted px-2 py-1 rounded">-l, --limit &lt;number&gt;</code>
                <p className="text-sm text-muted-foreground mt-1">Maximum number of results (default: 10)</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Search Results</h2>
        
        <div className="space-y-4">
          <p className="text-muted-foreground">
            For each matching template, the search results will show:
          </p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
            <li>Template name</li>
            <li>Number of matches and quality score</li>
            <li>Repository URL</li>
            <li>Technologies used</li>
            <li>Project purposes</li>
          </ul>

          <div className="mt-4">
            <h3 className="font-semibold text-lg">Example Output</h3>
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code className="text-sm font-mono">{`template-name
Matches: 3 (Quality Score: 4.50)
URL: https://github.com/user/repo
Technologies: react, typescript, tailwind
Purposes:
  frontend: web
  backend: api`}</code>
            </pre>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Next Steps</h2>
        <p className="text-muted-foreground">
          Learn how to configure the CLI tools in the{" "}
          <a href="/docs/cli/config" className="underline hover:no-underline">Configuration guide</a>.
        </p>
      </div>
    </div>
  );
} 
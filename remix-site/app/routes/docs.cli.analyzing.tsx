import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Analyzing Starters - Slot Documentation" },
    { name: "description", content: "Learn how to analyze templates and generate quality metrics using Slot's CLI tools" },
  ];
};

export default function CliAnalyzing() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Analyzing Starters</h1>
      
      <div className="space-y-4">
        <p>
          After scraping templates, you can use Slot's analysis tools to evaluate their quality,
          identify features, and generate comprehensive reports. This guide shows you how to run
          and customize template analysis.
        </p>

        <div className="rounded-lg border bg-muted/50 p-4">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> The CLI tools are optional. You only need them if you want to
            customize your template index. The MCP server works out of the box with our pre-analyzed
            template collection.
          </p>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Basic Usage</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg">Analyze Templates</h3>
            <p className="text-muted-foreground mb-2">
              Run analysis on all templates in your index:
            </p>
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code className="text-sm font-mono">slot analyze</code>
            </pre>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Force Reanalysis</h3>
            <p className="text-muted-foreground mb-2">
              Force reanalysis of all templates, ignoring cached results:
            </p>
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code className="text-sm font-mono">slot analyze --force</code>
            </pre>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Analysis Process</h2>
        
        <div className="space-y-4">
          <p className="text-muted-foreground">
            The analysis process uses OpenAI's LLM to evaluate templates across multiple dimensions:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg">Features Analysis</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Technology stack identification</li>
                <li>Project structure evaluation</li>
                <li>Development tooling detection</li>
                <li>Feature set assessment</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg">Quality Assessment</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Code quality evaluation</li>
                <li>Documentation completeness</li>
                <li>Maintenance status</li>
                <li>Best practices adherence</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Analysis Options</h2>
        
        <div className="space-y-4">
          <table className="w-full text-muted-foreground">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Option</th>
                <th className="text-left py-2">Description</th>
                <th className="text-left py-2">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2"><code className="text-sm font-mono">--features</code></td>
                <td>Features to analyze</td>
                <td><code className="text-sm font-mono">--features auth,testing</code></td>
              </tr>
              <tr className="border-b">
                <td className="py-2"><code className="text-sm font-mono">--metrics</code></td>
                <td>Quality metrics to evaluate</td>
                <td><code className="text-sm font-mono">--metrics docs,maintenance</code></td>
              </tr>
              <tr className="border-b">
                <td className="py-2"><code className="text-sm font-mono">--depth</code></td>
                <td>Analysis depth level</td>
                <td><code className="text-sm font-mono">--depth full</code></td>
              </tr>
              <tr className="border-b">
                <td className="py-2"><code className="text-sm font-mono">--cache</code></td>
                <td>Use cached results</td>
                <td><code className="text-sm font-mono">--cache false</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Analysis Categories</h2>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg">Features</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>authentication</li>
                <li>testing</li>
                <li>deployment</li>
                <li>ci</li>
                <li>styling</li>
                <li>state</li>
                <li>api</li>
                <li>database</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg">Metrics</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>documentation</li>
                <li>maintenance</li>
                <li>code-quality</li>
                <li>testing</li>
                <li>security</li>
                <li>performance</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Custom Analysis Rules</h2>
        
        <div className="space-y-4">
          <p className="text-muted-foreground">
            You can define custom analysis rules in a configuration file:
          </p>

          <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
            <code className="text-sm font-mono">{`# analysis.yml
rules:
  features:
    auth:
      files: ["auth/**", "**/auth.*"]
      imports: ["next-auth", "auth0", "firebase/auth"]
    testing:
      files: ["**/*.test.*", "**/*.spec.*"]
      imports: ["jest", "vitest", "cypress"]
  
  metrics:
    documentation:
      weight: 0.3
      criteria:
        - readme-length
        - setup-instructions
        - api-docs
    maintenance:
      weight: 0.4
      criteria:
        - commit-frequency
        - issue-response-time
        - dependency-freshness

# Run analysis with custom rules
slot analyze --config analysis.yml`}</code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Next Steps</h2>
        <p className="text-muted-foreground">
          After analyzing templates, learn how to{" "}
          <a href="/docs/cli/searching" className="underline hover:no-underline">search through them</a>
          {" "}using the CLI tools.
        </p>
      </div>
    </div>
  );
} 
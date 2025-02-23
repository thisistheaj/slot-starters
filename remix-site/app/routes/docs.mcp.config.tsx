import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "MCP Configuration - Slot Documentation" },
    { name: "description", content: "Learn how to configure and customize Slot's MCP server for your needs" },
  ];
};

export default function McpConfig() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Configuration</h1>
      
      <div className="space-y-4">
        <p>
          Slot's MCP server can be configured to match your team's needs and preferences. This guide covers
          the available configuration options and how to customize your template index.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Configuration File</h2>
        
        <div className="space-y-4">
          <p className="text-muted-foreground">
            The MCP server is configured through a <code className="text-sm font-mono bg-muted px-1 py-0.5 rounded">slot.config.json</code> file
            in your project root. Here's a complete example:
          </p>

          <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
            <code>{`{
  "mcp": {
    "server": {
      "port": 3000,
      "host": "localhost",
      "cors": {
        "origin": "*",
        "methods": ["GET", "POST"]
      }
    },
    "search": {
      "maxResults": 10,
      "minScore": 0.5,
      "timeout": 5000
    },
    "templates": {
      "sources": [
        {
          "type": "github",
          "owner": "your-org",
          "repo": "templates"
        }
      ],
      "exclude": [
        "**/*.test.*",
        "**/*.spec.*"
      ]
    },
    "analysis": {
      "features": ["all"],
      "metrics": ["all"],
      "cache": true
    }
  }
}`}</code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Server Options</h2>
        
        <div className="space-y-4">
          <table className="w-full text-muted-foreground">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Option</th>
                <th className="text-left py-2">Description</th>
                <th className="text-left py-2">Default</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2"><code className="text-sm font-mono">port</code></td>
                <td>Port number for the MCP server</td>
                <td>3000</td>
              </tr>
              <tr className="border-b">
                <td className="py-2"><code className="text-sm font-mono">host</code></td>
                <td>Host address to bind to</td>
                <td>localhost</td>
              </tr>
              <tr className="border-b">
                <td className="py-2"><code className="text-sm font-mono">cors</code></td>
                <td>CORS configuration options</td>
                <td>See example</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Search Configuration</h2>
        
        <div className="space-y-4">
          <table className="w-full text-muted-foreground">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Option</th>
                <th className="text-left py-2">Description</th>
                <th className="text-left py-2">Default</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2"><code className="text-sm font-mono">maxResults</code></td>
                <td>Maximum number of results per query</td>
                <td>10</td>
              </tr>
              <tr className="border-b">
                <td className="py-2"><code className="text-sm font-mono">minScore</code></td>
                <td>Minimum relevance score (0-1)</td>
                <td>0.5</td>
              </tr>
              <tr className="border-b">
                <td className="py-2"><code className="text-sm font-mono">timeout</code></td>
                <td>Search timeout in milliseconds</td>
                <td>5000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Template Sources</h2>
        
        <div className="space-y-4">
          <p className="text-muted-foreground">
            You can configure multiple template sources to include in your index:
          </p>

          <div className="space-y-2">
            <h3 className="font-semibold text-lg">GitHub Source</h3>
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code>{`{
  "type": "github",
  "owner": "your-org",
  "repo": "templates",
  "branch": "main",           // optional
  "path": "starters",         // optional
  "token": "YOUR_TOKEN"       // optional
}`}</code>
            </pre>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Local Source</h3>
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code>{`{
  "type": "local",
  "path": "./templates",
  "patterns": ["**/*"]        // optional
}`}</code>
            </pre>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Analysis Options</h2>
        
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Configure which features and metrics to analyze:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Features</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>technologies</li>
                <li>dependencies</li>
                <li>structure</li>
                <li>tooling</li>
                <li>documentation</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Metrics</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>maintenance</li>
                <li>community</li>
                <li>quality</li>
                <li>security</li>
                <li>performance</li>
              </ul>
            </div>
          </div>

          <p className="text-muted-foreground">
            Use <code className="text-sm font-mono">["all"]</code> to enable all features or metrics, or specify
            individual items as needed.
          </p>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Environment Variables</h2>
        
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Some configuration can be overridden with environment variables:
          </p>

          <table className="w-full text-muted-foreground">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Variable</th>
                <th className="text-left py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2"><code className="text-sm font-mono">SLOT_MCP_PORT</code></td>
                <td>Override server port</td>
              </tr>
              <tr className="border-b">
                <td className="py-2"><code className="text-sm font-mono">SLOT_GITHUB_TOKEN</code></td>
                <td>GitHub API token for private repos</td>
              </tr>
              <tr className="border-b">
                <td className="py-2"><code className="text-sm font-mono">SLOT_CACHE_DIR</code></td>
                <td>Custom cache directory location</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Next Steps</h2>
        <p className="text-muted-foreground">
          Now that you've configured your MCP server, learn how to effectively search for templates in the{" "}
          <a href="/docs/mcp/search" className="underline hover:no-underline">Search guide</a>.
        </p>
      </div>
    </div>
  );
} 
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "CLI Configuration - Slot Documentation" },
    { name: "description", content: "Learn how to configure Slot's CLI tools for template management" },
  ];
};

export default function CliConfig() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">CLI Configuration</h1>
      
      <div className="space-y-4">
        <p>
          Slot's CLI tools can be configured to match your template management needs. This guide covers
          the available configuration options and how to customize the CLI behavior.
        </p>

        <div className="rounded-lg border bg-muted/50 p-4">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> The CLI tools are optional. You only need them if you want to
            customize your template index. The MCP server works out of the box with our curated
            template collection.
          </p>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Configuration File</h2>
        
        <div className="space-y-4">
          <p className="text-muted-foreground">
            The CLI tools are configured through a <code className="text-sm font-mono bg-muted px-1 py-0.5 rounded">slot.config.json</code> file
            in your project root. Here's a complete example:
          </p>

          <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
            <code className="text-sm font-mono">{`{
  "cli": {
    "scraping": {
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
      ],
      "concurrency": 4
    },
    "analysis": {
      "features": ["all"],
      "metrics": ["all"],
      "cache": true,
      "timeout": 30000
    },
    "search": {
      "maxResults": 10,
      "minScore": 0.5,
      "presets": {
        "react-prod": {
          "tech": ["react", "typescript"],
          "features": ["authentication", "testing"],
          "min_quality": 4
        }
      }
    }
  }
}`}</code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Scraping Options</h2>
        
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
                <td className="py-2"><code className="text-sm font-mono">sources</code></td>
                <td>Template sources to scrape</td>
                <td>[]</td>
              </tr>
              <tr className="border-b">
                <td className="py-2"><code className="text-sm font-mono">exclude</code></td>
                <td>Files to exclude</td>
                <td>["*.test.*"]</td>
              </tr>
              <tr className="border-b">
                <td className="py-2"><code className="text-sm font-mono">concurrency</code></td>
                <td>Number of parallel operations</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Analysis Options</h2>
        
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
                <td className="py-2"><code className="text-sm font-mono">features</code></td>
                <td>Features to analyze</td>
                <td>["all"]</td>
              </tr>
              <tr className="border-b">
                <td className="py-2"><code className="text-sm font-mono">metrics</code></td>
                <td>Quality metrics to evaluate</td>
                <td>["all"]</td>
              </tr>
              <tr className="border-b">
                <td className="py-2"><code className="text-sm font-mono">cache</code></td>
                <td>Enable result caching</td>
                <td>true</td>
              </tr>
              <tr className="border-b">
                <td className="py-2"><code className="text-sm font-mono">timeout</code></td>
                <td>Analysis timeout (ms)</td>
                <td>30000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Search Options</h2>
        
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
                <td>Maximum search results</td>
                <td>10</td>
              </tr>
              <tr className="border-b">
                <td className="py-2"><code className="text-sm font-mono">minScore</code></td>
                <td>Minimum match score</td>
                <td>0.5</td>
              </tr>
              <tr className="border-b">
                <td className="py-2"><code className="text-sm font-mono">presets</code></td>
                <td>Search presets</td>
                <td>{}</td>
              </tr>
            </tbody>
          </table>
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
                <td className="py-2"><code className="text-sm font-mono">SLOT_CONFIG_PATH</code></td>
                <td>Custom config file path</td>
              </tr>
              <tr className="border-b">
                <td className="py-2"><code className="text-sm font-mono">SLOT_GITHUB_TOKEN</code></td>
                <td>GitHub API token</td>
              </tr>
              <tr className="border-b">
                <td className="py-2"><code className="text-sm font-mono">SLOT_CACHE_DIR</code></td>
                <td>Custom cache directory</td>
              </tr>
              <tr className="border-b">
                <td className="py-2"><code className="text-sm font-mono">SLOT_LOG_LEVEL</code></td>
                <td>Logging verbosity</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Configuration Tips</h2>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg">Performance</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Adjust concurrency based on system</li>
                <li>Enable caching for faster analysis</li>
                <li>Use specific feature/metric lists</li>
                <li>Exclude unnecessary files</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg">Organization</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Group related templates in sources</li>
                <li>Create search presets for teams</li>
                <li>Document custom configurations</li>
                <li>Version control your config</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Next Steps</h2>
        <p className="text-muted-foreground">
          Now that you've configured the CLI tools, learn how to{" "}
          <a href="/docs/cli/scraping" className="underline hover:no-underline">scrape templates</a>
          {" "}and add them to your index.
        </p>
      </div>
    </div>
  );
} 
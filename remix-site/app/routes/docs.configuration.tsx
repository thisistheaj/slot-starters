import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Configuration - Slot Documentation" },
    { name: "description", content: "Learn how to configure Slot for your needs" },
  ];
};

export default function ConfigurationDocs() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Configuration</h1>
      
      <div className="space-y-4">
        <p>
          Slot can be configured through environment variables and configuration files to customize its behavior,
          set API limits, and define default settings for various operations.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Environment Variables</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Required Variables</h3>
            <div className="space-y-3 mt-2">
              <div>
                <code className="text-sm bg-muted px-2 py-1 rounded">OPENAI_API_KEY</code>
                <p className="text-sm text-muted-foreground mt-1">Your OpenAI API key for template analysis</p>
              </div>
              <div>
                <code className="text-sm bg-muted px-2 py-1 rounded">GITHUB_TOKEN</code>
                <p className="text-sm text-muted-foreground mt-1">GitHub personal access token for repository access</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mt-6">Optional Variables</h3>
            <div className="space-y-3 mt-2">
              <div>
                <code className="text-sm bg-muted px-2 py-1 rounded">SLOT_OUTPUT_DIR</code>
                <p className="text-sm text-muted-foreground mt-1">Custom directory for analysis output (default: ./analyzed-starters)</p>
              </div>
              <div>
                <code className="text-sm bg-muted px-2 py-1 rounded">SLOT_CACHE_DIR</code>
                <p className="text-sm text-muted-foreground mt-1">Custom directory for caching (default: ./.cache)</p>
              </div>
              <div>
                <code className="text-sm bg-muted px-2 py-1 rounded">SLOT_LOG_LEVEL</code>
                <p className="text-sm text-muted-foreground mt-1">Logging level (default: info)</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Configuration File</h2>
        
        <p>
          Create a <code className="text-sm bg-muted px-2 py-1 rounded">config.js</code> file in your project root:
        </p>

        <pre className="p-4 rounded-lg bg-muted overflow-auto mt-4">
          <code>{`export default {
  // API rate limiting
  github: {
    requestsPerHour: 1000,
    requestDelay: 100,
    minStars: 50
  },

  // NPM registry settings
  npm: {
    requestsPerHour: 500,
    requestDelay: 200,
    minDownloads: 1000
  },

  // Analysis settings
  analysis: {
    concurrency: 4,
    timeout: 30000,
    retries: 3
  },

  // Search defaults
  search: {
    maxResults: 10,
    minQualityScore: 3,
    sortBy: "quality"
  },

  // Output directories
  paths: {
    output: "./analyzed-starters",
    cache: "./.cache",
    temp: "./tmp"
  },

  // Logging configuration
  logging: {
    level: "info",
    format: "json",
    file: "slot.log"
  }
}`}</code>
        </pre>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Claude Desktop Configuration</h2>
        
        <p>
          Configure the MCP server in Claude Desktop's configuration file:
        </p>

        <pre className="p-4 rounded-lg bg-muted overflow-auto mt-4">
          <code>{`{
  "mcpServers": {
    "slot-starters": {
      "command": "node",
      "args": [
        "$(pwd)/server.js"
      ],
      "env": {
        "OPENAI_API_KEY": "$OPENAI_API_KEY"
      }
    }
  }
}`}</code>
        </pre>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Configuration Options</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">API Rate Limiting</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="rounded-lg border bg-card p-4">
                <h4 className="font-semibold">GitHub API</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Requests per hour limit</li>
                  <li>• Delay between requests</li>
                  <li>• Minimum star count</li>
                  <li>• Authentication settings</li>
                </ul>
              </div>
              <div className="rounded-lg border bg-card p-4">
                <h4 className="font-semibold">NPM Registry</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Request rate limits</li>
                  <li>• Request timeout</li>
                  <li>• Download thresholds</li>
                  <li>• Registry mirrors</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Analysis Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="rounded-lg border bg-card p-4">
                <h4 className="font-semibold">Performance</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Concurrent analyses</li>
                  <li>• Analysis timeout</li>
                  <li>• Retry attempts</li>
                  <li>• Cache settings</li>
                </ul>
              </div>
              <div className="rounded-lg border bg-card p-4">
                <h4 className="font-semibold">Quality Thresholds</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Minimum scores</li>
                  <li>• Required features</li>
                  <li>• Update frequency</li>
                  <li>• Documentation requirements</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Search Configuration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="rounded-lg border bg-card p-4">
                <h4 className="font-semibold">Results</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Maximum results</li>
                  <li>• Sort criteria</li>
                  <li>• Filter defaults</li>
                  <li>• Output format</li>
                </ul>
              </div>
              <div className="rounded-lg border bg-card p-4">
                <h4 className="font-semibold">Matching</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Match thresholds</li>
                  <li>• Fuzzy matching</li>
                  <li>• Score weights</li>
                  <li>• Ranking factors</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-md bg-muted p-4">
          <h3 className="text-sm font-medium">Configuration Tips</h3>
          <ul className="mt-2 text-sm space-y-2">
            <li>• Use environment variables for sensitive values</li>
            <li>• Adjust rate limits based on your API quotas</li>
            <li>• Configure concurrency based on system resources</li>
            <li>• Set appropriate quality thresholds for your needs</li>
          </ul>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Next Steps</h2>
        
        <p>
          After configuring Slot, you can:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a href="/docs/cli/scraping" className="font-medium underline underline-offset-4">
              Start scraping templates
            </a>
            {" "}from various sources
          </li>
          <li>
            <a href="/docs/cli/analyzing" className="font-medium underline underline-offset-4">
              Analyze templates
            </a>
            {" "}with your configured settings
          </li>
          <li>
            <a href="/docs/cli/searching" className="font-medium underline underline-offset-4">
              Search for templates
            </a>
            {" "}using the configured defaults
          </li>
        </ul>
      </div>
    </div>
  );
} 
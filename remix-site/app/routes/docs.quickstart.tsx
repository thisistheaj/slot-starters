import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Quickstart - Slot Documentation" },
    { name: "description", content: "Get started with Slot's MCP server in minutes" },
  ];
};

export default function Quickstart() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Quickstart</h1>
      
      <div className="space-y-4">
        <p>
          Get started with Slot's MCP server in just a few minutes. This guide will help you set up
          the server and start finding templates through AI conversations.
        </p>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Prerequisites</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Node.js 18 or later</li>
              <li>Claude Desktop installed</li>
              <li>Git (for cloning the repository)</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Installation Steps</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg">1. Clone the Repository</h3>
                <p className="text-muted-foreground mb-2">First, clone the Slot repository and install dependencies:</p>
                <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
                  <code className="text-sm font-mono">{`git clone https://github.com/thisistheaj/slot-starters.git
cd slot-starters
npm install`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold text-lg">2. Configure Claude Desktop</h3>
                <p className="text-muted-foreground mb-2">Add the Slot MCP server to your Claude Desktop configuration:</p>
                <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
                  <code className="text-sm font-mono">{`mkdir -p ~/Library/Application\\ Support/Claude
cat > ~/Library/Application\\ Support/Claude/claude_desktop_config.json << EOL
{
  "mcpServers": {
    "slot-starters": {
      "command": "node",
      "args": [
        "$(pwd)/server.js"
      ]
    }
  }
}
EOL`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold text-lg">3. Start Using Slot</h3>
                <p className="text-muted-foreground">
                  That's it! Now you can:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Open Claude Desktop</li>
                  <li>Start a new conversation</li>
                  <li>Describe your project needs and requirements</li>
                  <li>Get personalized template recommendations</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Example Conversation</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="italic">You: "I need a React starter template for building a B2B SaaS dashboard. We want good TypeScript support and built-in authentication."</p>
              <p className="italic">Claude: "I'll help you find the perfect template. Let me search through the available options..."</p>
              <p>
                The AI assistant will analyze your requirements and search through the template index,
                providing detailed recommendations based on your specific needs.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Optional: CLI Tools</h2>
            <p className="text-muted-foreground">
              The MCP server comes pre-configured with a curated set of templates. If you want to customize
              your template index or add your own templates, you can use our CLI tools.
              Learn more in the{" "}
              <a href="/docs/cli/scraping" className="underline hover:no-underline">CLI documentation</a>.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Next Steps</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>
                Learn about our{" "}
                <a href="/docs/ontology" className="underline hover:no-underline">template analysis framework</a>
              </li>
              <li>
                Understand how we{" "}
                <a href="/docs/quality-metrics" className="underline hover:no-underline">evaluate template quality</a>
              </li>
              <li>
                Read the{" "}
                <a href="/docs/mcp/search" className="underline hover:no-underline">search guide</a>
                {" "}for tips on getting the best recommendations
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 
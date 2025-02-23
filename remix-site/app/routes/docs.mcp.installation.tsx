import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "MCP Installation - Slot Documentation" },
    { name: "description", content: "Learn how to install and set up Slot's MCP server" },
  ];
};

export default function McpInstallation() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">MCP Installation</h1>
      
      <div className="space-y-4">
        <p>
          Get started with Slot's MCP server by following these installation steps.
          The MCP server enables AI assistants to help you find and understand starter templates.
        </p>

        <div className="space-y-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Prerequisites</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
            <li>Node.js 18 or later</li>
            <li>Claude Desktop installed</li>
            <li>Git (for cloning the repository)</li>
          </ul>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Installation Steps</h2>
          
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
                <li>Describe your project needs</li>
                <li>Get personalized template recommendations</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Next Steps</h2>
        <p className="text-muted-foreground">
          Learn how to effectively search for templates through AI conversations in the{" "}
          <a href="/docs/mcp/search" className="underline hover:no-underline">Search guide</a>, or
          explore the available configuration options in the{" "}
          <a href="/docs/mcp/config" className="underline hover:no-underline">Configuration guide</a>.
        </p>
      </div>
    </div>
  );
} 
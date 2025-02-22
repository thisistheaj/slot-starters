import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Installation - Slot Documentation" },
    { name: "description", content: "Installation guide for Slot" },
  ];
};

export default function InstallationDocs() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Installation</h1>
      
      <div className="space-y-4">
        <p>
          Setting up Slot involves a few simple steps to get the MCP server running and configured with Claude Desktop.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Prerequisites</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Node.js 20.0.0 or higher</li>
          <li>Claude Desktop application</li>
          <li>OpenAI API key for template analysis</li>
        </ul>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Step 1: Clone the Repository</h2>
        <p>First, clone the Slot repository and install its dependencies:</p>
        <pre className="p-4 rounded-lg bg-muted overflow-auto">
          <code>{`git clone https://github.com/thisistheaj/slot-starters.git
cd slot-starters
npm install`}</code>
        </pre>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Step 2: Configure Environment</h2>
        <p>Set up your OpenAI API key as an environment variable:</p>
        <pre className="p-4 rounded-lg bg-muted overflow-auto">
          <code>{`# Set your OpenAI API key
export OPENAI_API_KEY="your-api-key-here"`}</code>
        </pre>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Step 3: Configure Claude Desktop</h2>
        <p>Create the Claude Desktop configuration file to enable the MCP server:</p>
        <pre className="p-4 rounded-lg bg-muted overflow-auto">
          <code>{`# Create Claude Desktop config with the key
mkdir -p ~/Library/Application\\ Support/Claude && cat > ~/Library/Application\\ Support/Claude/claude_desktop_config.json << EOL
{
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
}
EOL`}</code>
        </pre>

        <div className="mt-6 rounded-md bg-muted p-4">
          <h3 className="text-sm font-medium">Note</h3>
          <p className="mt-2 text-sm">
            Make sure to replace <code className="text-xs">your-api-key-here</code> with your actual OpenAI API key.
            The key is used for analyzing template features and generating structured data.
          </p>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Step 4: Restart Claude Desktop</h2>
        <p>
          After setting up the configuration, restart Claude Desktop to load the new MCP server settings.
          You should now be able to use Slot's template discovery features directly within Claude.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Verifying Installation</h2>
        <p>To verify that Slot is working correctly:</p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Open Claude Desktop</li>
          <li>Start a new conversation</li>
          <li>Ask about finding a starter template (e.g., "Find me a React starter with TypeScript")</li>
          <li>Claude should respond with relevant template suggestions</li>
        </ol>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Next Steps</h2>
        <p>
          Now that you have Slot installed, you can:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Learn about <a href="/docs/discovery" className="font-medium underline underline-offset-4">template discovery</a></li>
          <li>Explore the <a href="/docs/cli/searching" className="font-medium underline underline-offset-4">CLI tools</a></li>
          <li>Understand the <a href="/docs/ontology" className="font-medium underline underline-offset-4">template analysis schema</a></li>
        </ul>
      </div>
    </div>
  );
} 
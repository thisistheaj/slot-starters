import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "CLI Installation - Slot Documentation" },
    { name: "description", content: "Learn how to install and set up Slot's CLI tools" },
  ];
};

export default function CliInstallation() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">CLI Installation</h1>
      
      <div className="space-y-4">
        <p>
          Get started with Slot's CLI tools by following these installation steps.
          The CLI tools enable advanced template management capabilities like scraping and custom analysis.
        </p>

        <div className="rounded-lg border bg-muted/50 p-4">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> The CLI tools are optional. You only need them if you want to customize your
            template index or add your own templates. For most users, the MCP server is sufficient.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Prerequisites</h2>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
            <li>Node.js 18 or later</li>
            <li>Git (for repository access)</li>
            <li>GitHub token (for template scraping)</li>
            <li>OpenAI API key (for template analysis)</li>
          </ul>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Installation Steps</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg">1. Install the CLI</h3>
              <p className="text-muted-foreground mb-2">
                Install the Slot CLI globally using npm:
              </p>
              <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
                <code className="text-sm font-mono">npm install -g slot-starters</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold text-lg">2. Configure API Keys</h3>
              <p className="text-muted-foreground mb-2">
                Set up your GitHub token and OpenAI API key:
              </p>
              <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
                <code className="text-sm font-mono">{`# Set GitHub token for template scraping
export SLOT_GITHUB_TOKEN=your_github_token_here

# Set OpenAI API key for template analysis
export OPENAI_API_KEY=your_openai_key_here`}</code>
              </pre>

              <p className="text-muted-foreground mb-2">
                You can also add them to your .env file:
              </p>
              <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
                <code className="text-sm font-mono">{`SLOT_GITHUB_TOKEN=your_github_token_here
OPENAI_API_KEY=your_openai_key_here`}</code>
              </pre>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Next Steps</h2>
        <p className="text-muted-foreground">
          Learn how to scrape templates in the{" "}
          <a href="/docs/cli/scraping" className="underline hover:no-underline">Scraping guide</a>, or
          explore template analysis in the{" "}
          <a href="/docs/cli/analyzing" className="underline hover:no-underline">Analysis guide</a>.
        </p>
      </div>
    </div>
  );
} 
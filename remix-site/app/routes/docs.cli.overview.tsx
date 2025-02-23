import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "CLI Overview - Slot Documentation" },
    { name: "description", content: "Learn about Slot's CLI tools for template management and customization" },
  ];
};

export default function CliOverview() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">CLI Overview</h1>
      
      <div className="space-y-4">
        <p>
          The Slot CLI tools provide powerful capabilities for managing your template index. With these tools, you can:
        </p>

        <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
          <li>Scrape new templates from GitHub and NPM</li>
          <li>Run custom analysis on templates</li>
          <li>Build and maintain your template index</li>
        </ul>

        <div className="rounded-lg border bg-muted/50 p-4">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> The CLI tools are optional. You only need them if you want to customize your
            template index or add your own templates. For most users, the MCP server is sufficient.
          </p>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Features</h2>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg">Template Discovery</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>GitHub repository scraping</li>
                <li>NPM package analysis</li>
                <li>Customizable search criteria</li>
                <li>Batch processing</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Analysis Tools</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Feature detection</li>
                <li>Quality metrics</li>
                <li>Dependency analysis</li>
                <li>Pattern recognition</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Next Steps</h2>
        <p className="text-muted-foreground">
          Learn how to install and set up the CLI tools in the{" "}
          <a href="/docs/cli/installation" className="underline hover:no-underline">Installation guide</a>, or
          explore how to scrape templates in the{" "}
          <a href="/docs/cli/scraping" className="underline hover:no-underline">Scraping guide</a>.
        </p>
      </div>
    </div>
  );
} 
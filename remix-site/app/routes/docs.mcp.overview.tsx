import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "MCP Overview - Slot Documentation" },
    { name: "description", content: "Learn how Slot's MCP server enables AI assistants to help you find the perfect starter template" },
  ];
};

export default function McpOverview() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">MCP Overview</h1>
      
      <div className="space-y-4">
        <p>
          The Model Context Protocol (MCP) server is the heart of Slot, enabling AI assistants to help you find
          and understand starter templates through natural conversation. This guide explains how the MCP server works
          and how to get started.
        </p>

        <div className="rounded-lg border bg-muted/50 p-4">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> The MCP server is the recommended way to use Slot. You don't need the CLI tools
            unless you want to customize your template index or add your own templates.
          </p>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">How It Works</h2>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg">Template Analysis</h3>
              <p className="text-muted-foreground">
                The MCP server maintains an index of analyzed templates, each processed through our
                comprehensive ontology to understand:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Technology stack and dependencies</li>
                <li>Project structure and patterns</li>
                <li>Development tooling</li>
                <li>Quality metrics</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg">AI Integration</h3>
              <p className="text-muted-foreground">
                When you chat with Claude about your project needs, it can:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Search for matching templates</li>
                <li>Compare template features</li>
                <li>Explain technical tradeoffs</li>
                <li>Make recommendations</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-lg">Example Conversation</h3>
            <div className="space-y-4 text-muted-foreground mt-2">
              <p className="italic">
                You: "I need a React starter for a B2B SaaS dashboard. We want TypeScript support
                and built-in authentication."
              </p>
              <p className="italic">
                Claude: "I'll help you find the perfect template. Let me search through the available
                options that match your requirements..."
              </p>
              <p>
                The AI assistant will analyze your requirements and search through the template index,
                providing detailed recommendations based on your specific needs.
              </p>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Benefits</h2>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg">For Developers</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Natural language template discovery</li>
                <li>Contextual explanations</li>
                <li>Faster decision making</li>
                <li>Better understanding of options</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg">For Teams</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Consistent template evaluation</li>
                <li>Knowledge sharing</li>
                <li>Template standardization</li>
                <li>Reduced onboarding time</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Next Steps</h2>
        <p className="text-muted-foreground">
          Learn how to install and set up the MCP server in the{" "}
          <a href="/docs/mcp/installation" className="underline hover:no-underline">Installation guide</a>, or
          explore how to effectively search for templates in the{" "}
          <a href="/docs/mcp/search" className="underline hover:no-underline">Search guide</a>.
        </p>
      </div>
    </div>
  );
} 
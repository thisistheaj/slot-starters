import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Documentation - Slot" },
    { name: "description", content: "Documentation for Slot - A Place to Put Your Tokens" },
  ];
};

export default function DocsIndex() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Documentation</h1>
      
      <div className="space-y-4">
        <p>
          Slot is an MCP (Model Context Protocol) server that enables AI assistants to help you find the perfect starter template for your next project.
          Through natural conversations with your AI assistant, you can discover relevant templates, understand their features, and make informed decisions about your project setup.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">MCP Server vs CLI</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">MCP Server</h3>
            <p className="text-muted-foreground">
              The primary way to use Slot is through its MCP server, which integrates with AI assistants like Claude Desktop.
              This lets you have natural conversations about your project needs and get intelligent template recommendations.
            </p>
            <p className="text-muted-foreground mt-2">
              <strong>You only need the MCP server</strong> to start finding templates - the CLI tools are optional.
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">CLI Tools</h3>
            <p className="text-muted-foreground">
              The CLI tools are for advanced users who want to customize their template index.
              You can use them to scrape additional templates, run your own analysis, or search directly from the command line.
            </p>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Documentation Structure</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg">Getting Started</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><Link to="/docs/quickstart" className="underline hover:no-underline">Quickstart</Link> - Set up the MCP server in minutes</li>
              <li><Link to="/docs/quality-metrics" className="underline hover:no-underline">Quality Metrics</Link> - Understand how templates are evaluated</li>
              <li><Link to="/docs/ontology" className="underline hover:no-underline">Ontology</Link> - Learn about the template analysis framework</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">MCP Server</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><Link to="/docs/mcp/overview" className="underline hover:no-underline">Overview</Link> - Learn how the MCP server works</li>
              <li><Link to="/docs/mcp/search" className="underline hover:no-underline">Search</Link> - Discover templates through AI conversations</li>
              <li><Link to="/docs/mcp/config" className="underline hover:no-underline">Configuration</Link> - Configure the MCP server</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">CLI Tools</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><Link to="/docs/cli/scraping" className="underline hover:no-underline">Scraping</Link> - Add new templates to the index</li>
              <li><Link to="/docs/cli/analyzing" className="underline hover:no-underline">Analysis</Link> - Run template analysis</li>
              <li><Link to="/docs/cli/searching" className="underline hover:no-underline">Search</Link> - Search from the command line</li>
              <li><Link to="/docs/cli/config" className="underline hover:no-underline">Configuration</Link> - Configure the CLI tools</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 
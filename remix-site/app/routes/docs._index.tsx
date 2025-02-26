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

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Documentation Structure</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg">Documentation Structure</h3>
            <p className="text-muted-foreground">
              The documentation is organized into sections covering each aspect of Slot:
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Tools Overview</h3>
            <p className="text-muted-foreground mb-4">
              Slot provides three ways to interact with starter templates, each designed for different use cases:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-lg border p-4">
                <h4 className="font-semibold">MCP Server</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm mt-2">
                  <li>Natural language interface</li>
                  <li>AI-powered recommendations</li>
                  <li>Interactive exploration</li>
                  <li>Best for: Most users</li>
                </ul>
              </div>

              <div className="rounded-lg border p-4">
                <h4 className="font-semibold">CLI Tools</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm mt-2">
                  <li>Template scraping</li>
                  <li>Custom analysis</li>
                  <li>Local management</li>
                  <li>Best for: Template maintainers</li>
                </ul>
              </div>

              <div className="rounded-lg border p-4">
                <h4 className="font-semibold">REST API</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm mt-2">
                  <li>Programmatic access</li>
                  <li>Advanced filtering</li>
                  <li>Integration support</li>
                  <li>Best for: Developers building tools</li>
                </ul>
              </div>
            </div>
          </div>

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

          <div>
            <h3 className="font-semibold text-lg">API</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><Link to="/docs/api/overview" className="underline hover:no-underline">Overview</Link> - Learn about the REST API</li>
              <li><Link to="/docs/api/starters" className="underline hover:no-underline">List Starters</Link> - Get and filter templates</li>
              <li><Link to="/docs/api/starters/id" className="underline hover:no-underline">Get Starter</Link> - Get template details</li>
              <li><Link to="/docs/api/recommendation" className="underline hover:no-underline">Get Recommendation</Link> - AI-powered template suggestions</li>
            </ul>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">REST API</h2>
        
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Slot provides a RESTful API for programmatically accessing and filtering starter templates.
            The API follows REST conventions and returns JSON responses.
          </p>

          <div className="rounded-lg border bg-muted/50 p-4">
            <p className="text-sm text-muted-foreground">
              <strong>Base URL:</strong> All API endpoints are relative to:
              <code className="mx-2 rounded bg-muted px-2 py-1">https://slotstarters.com/api</code>
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold text-lg">List Starters</h3>
              <p className="text-muted-foreground mt-1">Get a paginated list of starter templates with optional filtering.</p>
              <code className="mt-2 block rounded bg-muted px-3 py-2">GET /starters</code>
              <Link to="/docs/api/starters" className="text-sm text-primary hover:underline mt-2 inline-block">
                View Documentation →
              </Link>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-semibold text-lg">Get Starter</h3>
              <p className="text-muted-foreground mt-1">Get detailed information about a specific starter template.</p>
              <code className="mt-2 block rounded bg-muted px-3 py-2">GET /starters/:id</code>
              <Link to="/docs/api/starters/id" className="text-sm text-primary hover:underline mt-2 inline-block">
                View Documentation →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
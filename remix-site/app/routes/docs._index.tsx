import type { MetaFunction } from "@remix-run/node";

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
          Slot is an MCP (Model Context Protocol) server that enables developers to search and discover starter templates directly from within Claude Desktop and other LLM applications.
          By integrating with AI assistants, Slot helps you find relevant starter templates, understand their tradeoffs, and make informed decisions about your project setup.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Key Features</h2>
        
        <ul className="list-disc list-inside space-y-2">
          <li><strong>AI-Powered Discovery</strong> - Find relevant templates through natural conversations with your AI assistant</li>
          <li><strong>Smart Analysis</strong> - Understand template features, quality metrics, and tradeoffs</li>
          <li><strong>Search Engine</strong> - Search across multiple template sources with rich filtering options</li>
          <li><strong>CLI Tools</strong> - Scrape, analyze, and search templates from the command line</li>
        </ul>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Getting Started</h2>
        
        <p>
          To get started with Slot, follow our{" "}
          <a href="/docs/installation" className="font-medium underline underline-offset-4">
            installation guide
          </a>
          . Once installed, you can begin exploring templates through Claude Desktop or use our CLI tools directly.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">How It Works</h2>
        
        <p>
          Slot works by analyzing starter templates using a comprehensive ontology that captures various aspects like:
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li>Technologies and frameworks used</li>
          <li>Project structure and architecture</li>
          <li>Development features and tooling</li>
          <li>Code quality and maintainability</li>
          <li>Documentation and examples</li>
        </ul>

        <p className="mt-4">
          This analysis is then made available through our MCP server, allowing AI assistants to provide intelligent recommendations based on your specific needs and requirements.
        </p>
      </div>
    </div>
  );
} 
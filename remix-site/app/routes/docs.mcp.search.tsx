import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "MCP Search - Slot Documentation" },
    { name: "description", content: "Learn how to effectively search for templates through AI conversations using Slot's MCP server" },
  ];
};

export default function McpSearch() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Template Search</h1>
      
      <div className="space-y-4">
        <p>
          Slot's MCP server enables natural language template search through AI assistants. This guide shows you
          how to effectively communicate your requirements and get the most relevant template recommendations.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Search Strategies</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg">Describe Your Project</h3>
            <p className="text-muted-foreground">
              Start by describing your project goals and requirements. The more context you provide, the better
              the recommendations will be. Consider including:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>Project type (web app, API, mobile app, etc.)</li>
              <li>Key features or functionality needed</li>
              <li>Technology preferences or constraints</li>
              <li>Team size and experience level</li>
              <li>Development priorities (speed, scalability, etc.)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Example Queries</h3>
            <div className="space-y-3 text-muted-foreground">
              <p className="italic">
                "I need a React starter for a small team building a B2B SaaS dashboard. We want good TypeScript
                support and built-in authentication."
              </p>
              <p className="italic">
                "Looking for a minimal Express API template with OpenAPI documentation and testing setup.
                Must be production-ready and well maintained."
              </p>
              <p className="italic">
                "What's a good Next.js starter for an e-commerce site? We need good SEO, image optimization,
                and Stripe integration."
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Refine Results</h3>
            <p className="text-muted-foreground">
              After getting initial recommendations, you can refine your search by:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>Asking for specific feature comparisons</li>
              <li>Requesting more details about setup and configuration</li>
              <li>Inquiring about maintenance and community support</li>
              <li>Exploring alternative approaches or technologies</li>
            </ul>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Understanding Results</h2>
        
        <div className="space-y-4">
          <p className="text-muted-foreground">
            For each recommended template, the AI assistant can provide detailed information about:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Technical Details</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Core technologies and frameworks</li>
                <li>Development tools and setup</li>
                <li>Project structure and organization</li>
                <li>Build and deployment configuration</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Quality Metrics</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Maintenance status and updates</li>
                <li>Community size and activity</li>
                <li>Documentation quality</li>
                <li>Test coverage and reliability</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Best Practices</h2>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg">Do</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Be specific about your requirements</li>
                <li>Ask follow-up questions</li>
                <li>Compare multiple options</li>
                <li>Consider maintenance implications</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg">Don't</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Be too vague or general</li>
                <li>Ignore quality metrics</li>
                <li>Skip reading documentation</li>
                <li>Forget about team constraints</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Next Steps</h2>
        <p className="text-muted-foreground">
          Learn how to configure the MCP server and customize your template index in the{" "}
          <a href="/docs/mcp/config" className="underline hover:no-underline">Configuration guide</a>.
        </p>
      </div>
    </div>
  );
} 
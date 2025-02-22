import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Analyzing Starters - Slot CLI Documentation" },
    { name: "description", content: "Learn how to use Slot's CLI tools to analyze starter templates" },
  ];
};

export default function AnalyzingDocs() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Analyzing Starters</h1>
      
      <div className="space-y-4">
        <p>
          After scraping starter templates, you can use Slot's analysis tools to extract features,
          evaluate quality metrics, and generate structured data about each template.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Basic Usage</h2>
        
        <p>
          Run the analyze command on your scraped templates:
        </p>
        <pre className="p-4 rounded-lg bg-muted overflow-auto">
          <code>{`slot analyze [options]`}</code>
        </pre>

        <h3 className="text-xl font-semibold mt-6">Options</h3>
        <div className="space-y-3">
          <div>
            <code className="text-sm bg-muted px-2 py-1 rounded">-f, --force</code>
            <p className="text-sm text-muted-foreground mt-1">Force reanalysis of all templates</p>
          </div>
          <div>
            <code className="text-sm bg-muted px-2 py-1 rounded">-c, --concurrency &lt;number&gt;</code>
            <p className="text-sm text-muted-foreground mt-1">Number of templates to analyze concurrently</p>
          </div>
          <div>
            <code className="text-sm bg-muted px-2 py-1 rounded">-o, --output &lt;dir&gt;</code>
            <p className="text-sm text-muted-foreground mt-1">Output directory for analysis results</p>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Analysis Process</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">1. Content Analysis</h3>
            <p className="text-sm text-muted-foreground mt-1">
              The analyzer examines:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>README and documentation files</li>
              <li>Package configuration files</li>
              <li>Source code structure</li>
              <li>Test files and coverage</li>
              <li>Configuration files</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">2. Feature Detection</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Identifies implemented features:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Development tools and configurations</li>
              <li>Testing frameworks and setup</li>
              <li>Deployment configurations</li>
              <li>Security features</li>
              <li>Performance optimizations</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">3. Quality Assessment</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Evaluates template quality:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Documentation completeness</li>
              <li>Code organization</li>
              <li>Test coverage</li>
              <li>Dependency health</li>
              <li>Maintenance status</li>
            </ul>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Example Usage</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Basic Analysis</h3>
            <pre className="p-4 rounded-lg bg-muted overflow-auto mt-2">
              <code>{`# Analyze all new templates
slot analyze

# Force reanalysis of all templates
slot analyze --force

# Analyze with higher concurrency
slot analyze --concurrency 4`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Custom Output</h3>
            <pre className="p-4 rounded-lg bg-muted overflow-auto mt-2">
              <code>{`# Output to specific directory
slot analyze --output ./analyzed-templates

# Combine with force option
slot analyze --force --output ./fresh-analysis`}</code>
            </pre>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Output Format</h2>
        
        <p>
          Analysis results are saved in JSON format following our{" "}
          <a href="/docs/ontology" className="font-medium underline underline-offset-4">
            template ontology
          </a>
          :
        </p>

        <pre className="p-4 rounded-lg bg-muted overflow-auto mt-4">
          <code>{JSON.stringify({
            "metadata": {
              "name": "example-starter",
              "description": "Example starter template",
              "url": "https://github.com/example/starter"
            },
            "technologies": [
              "react",
              "typescript",
              "tailwind"
            ],
            "features": {
              "development": {
                "hotReload": true,
                "typeChecking": true
              },
              "testing": {
                "jest": true,
                "cypress": true
              }
            },
            "quality": {
              "documentation": 0.85,
              "maintenance": 0.9,
              "testing": 0.75
            }
          }, null, 2)}</code>
        </pre>

        <div className="mt-6 rounded-md bg-muted p-4">
          <h3 className="text-sm font-medium">Analysis Tips</h3>
          <ul className="mt-2 text-sm space-y-2">
            <li>• Run analysis after each scraping session to keep data fresh</li>
            <li>• Use force option when template structure changes significantly</li>
            <li>• Adjust concurrency based on your system's capabilities</li>
            <li>• Check analysis logs for any detection issues</li>
          </ul>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Next Steps</h2>
        
        <p>
          After analyzing templates, you can:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a href="/docs/cli/searching" className="font-medium underline underline-offset-4">
              Search through analyzed templates
            </a>
            {" "}to find ones that match your needs
          </li>
          <li>
            <a href="/docs/search" className="font-medium underline underline-offset-4">
              Use the search engine
            </a>
            {" "}to explore templates through the web interface
          </li>
          <li>
            <a href="/docs/ontology" className="font-medium underline underline-offset-4">
              Learn more about the ontology
            </a>
            {" "}to understand the analysis structure
          </li>
        </ul>
      </div>
    </div>
  );
} 
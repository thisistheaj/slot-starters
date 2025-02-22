import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Template Discovery - Slot Documentation" },
    { name: "description", content: "Learn how Slot discovers and analyzes starter templates" },
  ];
};

export default function DiscoveryDocs() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Template Discovery</h1>
      
      <div className="space-y-4">
        <p>
          Slot's template discovery system automatically finds, analyzes, and indexes starter templates from multiple sources.
          This process ensures that you always have access to high-quality, up-to-date templates that match your needs.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Discovery Sources</h2>
        
        <h3 className="text-xl font-semibold mt-6">GitHub Repositories</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Slot scans GitHub for repositories that match specific criteria:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Tagged with relevant topics (e.g., "starter", "boilerplate", "template")</li>
          <li>Minimum star count to ensure quality</li>
          <li>Recent activity to ensure maintenance</li>
          <li>Well-documented with README files</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">NPM Packages</h3>
        <p className="text-sm text-muted-foreground mt-1">
          The system also indexes NPM packages that are:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Tagged as starters or templates</li>
          <li>Have significant download counts</li>
          <li>Regularly maintained</li>
          <li>Well-documented with usage instructions</li>
        </ul>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Analysis Process</h2>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">1. Initial Scraping</h3>
          <p>
            For each discovered template, Slot collects:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Repository metadata (stars, forks, last update)</li>
            <li>README content and documentation</li>
            <li>Package configurations</li>
            <li>Directory structure</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">2. AI Analysis</h3>
          <p>
            The collected data is analyzed using AI to extract:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Core technologies and frameworks</li>
            <li>Development features and capabilities</li>
            <li>Project structure patterns</li>
            <li>Quality metrics</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">3. Structured Data Generation</h3>
          <p>
            Analysis results are converted into a structured format following our{" "}
            <a href="/docs/ontology" className="font-medium underline underline-offset-4">
              template ontology
            </a>
            .
          </p>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Quality Metrics</h2>
        
        <p>
          Each template is scored across multiple dimensions:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="rounded-lg border bg-card p-4">
            <h3 className="font-semibold">Documentation Quality</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>• README completeness</li>
              <li>• Setup instructions</li>
              <li>• Code comments</li>
              <li>• Example coverage</li>
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-4">
            <h3 className="font-semibold">Maintenance Status</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>• Commit frequency</li>
              <li>• Issue response time</li>
              <li>• Recent updates</li>
              <li>• Community activity</li>
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-4">
            <h3 className="font-semibold">Code Quality</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>• Testing coverage</li>
              <li>• Linting configuration</li>
              <li>• Type safety</li>
              <li>• Best practices</li>
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-4">
            <h3 className="font-semibold">Dependencies</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>• Update frequency</li>
              <li>• Security status</li>
              <li>• Version compatibility</li>
              <li>• Bundle size impact</li>
            </ul>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Continuous Updates</h2>
        
        <p>
          The discovery system runs periodically to:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Find new templates</li>
          <li>Update existing template information</li>
          <li>Remove outdated or unmaintained templates</li>
          <li>Refresh quality metrics</li>
        </ul>

        <div className="mt-6 rounded-md bg-muted p-4">
          <h3 className="text-sm font-medium">Contributing Templates</h3>
          <p className="mt-2 text-sm">
            If you have a high-quality starter template you'd like to include, please submit it through our{" "}
            <a 
              href="https://github.com/thisistheaj/slot-starters" 
              className="font-medium underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub repository
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
} 
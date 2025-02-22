import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "AI Analysis - Slot Documentation" },
    { name: "description", content: "Learn how Slot uses AI to analyze starter templates" },
  ];
};

export default function AnalysisDocs() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">AI Analysis</h1>
      
      <div className="space-y-4">
        <p>
          Slot uses advanced AI models to analyze starter templates, extracting structured information about their features,
          capabilities, and quality metrics. This automated analysis ensures consistent evaluation across templates and
          enables intelligent template recommendations.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Analysis Pipeline</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">1. Content Extraction</h3>
            <p className="text-sm text-muted-foreground mt-1">
              The first stage involves extracting relevant content from the template:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>README and documentation files</li>
              <li>Package configuration files (package.json, etc.)</li>
              <li>Configuration files (tsconfig.json, .eslintrc, etc.)</li>
              <li>Source code structure and patterns</li>
              <li>Test files and coverage reports</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">2. Natural Language Processing</h3>
            <p className="text-sm text-muted-foreground mt-1">
              AI models process the documentation to understand:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Project purpose and target use cases</li>
              <li>Feature descriptions and capabilities</li>
              <li>Setup and configuration instructions</li>
              <li>Architecture decisions and patterns</li>
              <li>Best practices and conventions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">3. Code Analysis</h3>
            <p className="text-sm text-muted-foreground mt-1">
              The system analyzes code patterns to identify:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Technology stack and dependencies</li>
              <li>Development tooling setup</li>
              <li>Testing frameworks and coverage</li>
              <li>Security practices and configurations</li>
              <li>Performance optimizations</li>
            </ul>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Feature Detection</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="rounded-lg border bg-card p-4">
            <h3 className="font-semibold">Development Features</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>• Hot reload configuration</li>
              <li>• Type checking setup</li>
              <li>• Linting and formatting</li>
              <li>• Debug configurations</li>
              <li>• Development containers</li>
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-4">
            <h3 className="font-semibold">Testing Features</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>• Unit testing framework</li>
              <li>• Integration tests</li>
              <li>• End-to-end testing</li>
              <li>• Test coverage tools</li>
              <li>• CI/CD configuration</li>
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-4">
            <h3 className="font-semibold">Deployment Features</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>• Environment configuration</li>
              <li>• Docker setup</li>
              <li>• Cloud deployment</li>
              <li>• Infrastructure as code</li>
              <li>• Production optimizations</li>
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-4">
            <h3 className="font-semibold">Security Features</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>• Authentication setup</li>
              <li>• Authorization patterns</li>
              <li>• Security scanning</li>
              <li>• Secret management</li>
              <li>• Secure defaults</li>
            </ul>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Quality Assessment</h2>
        
        <p>
          The AI performs a comprehensive quality assessment across multiple dimensions:
        </p>

        <div className="space-y-4 mt-4">
          <div>
            <h3 className="text-xl font-semibold">Documentation Quality</h3>
            <div className="mt-2 space-y-2">
              <p className="text-sm">The system evaluates documentation completeness and clarity:</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-muted p-3">
                  <div className="font-medium">High Quality</div>
                  <ul className="mt-2 text-sm space-y-1">
                    <li>✓ Clear project overview</li>
                    <li>✓ Detailed setup guide</li>
                    <li>✓ Architecture explanation</li>
                    <li>✓ Usage examples</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-muted p-3">
                  <div className="font-medium">Low Quality</div>
                  <ul className="mt-2 text-sm space-y-1">
                    <li>✗ Missing overview</li>
                    <li>✗ Unclear instructions</li>
                    <li>✗ No examples</li>
                    <li>✗ Outdated information</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Code Quality</h3>
            <div className="mt-2 space-y-2">
              <p className="text-sm">Analysis of code organization and best practices:</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-muted p-3">
                  <div className="font-medium">High Quality</div>
                  <ul className="mt-2 text-sm space-y-1">
                    <li>✓ Consistent patterns</li>
                    <li>✓ Type safety</li>
                    <li>✓ Error handling</li>
                    <li>✓ Performance optimizations</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-muted p-3">
                  <div className="font-medium">Low Quality</div>
                  <ul className="mt-2 text-sm space-y-1">
                    <li>✗ Inconsistent code</li>
                    <li>✗ Type errors</li>
                    <li>✗ Poor error handling</li>
                    <li>✗ Performance issues</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Continuous Learning</h2>
        
        <p>
          The AI analysis system continuously improves through:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Analysis of new templates and patterns</li>
          <li>Feedback from template usage</li>
          <li>Updates to quality metrics</li>
          <li>Community contributions</li>
        </ul>

        <div className="mt-6 rounded-md bg-muted p-4">
          <h3 className="text-sm font-medium">Analysis Feedback</h3>
          <p className="mt-2 text-sm">
            If you notice any issues with template analysis or have suggestions for improvement, please submit feedback through our{" "}
            <a 
              href="https://github.com/thisistheaj/slot-starters/issues" 
              className="font-medium underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub issues
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
} 
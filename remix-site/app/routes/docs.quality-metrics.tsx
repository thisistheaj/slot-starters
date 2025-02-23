import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Quality Metrics - Slot Documentation" },
    { name: "description", content: "Learn how Slot evaluates template quality and maintainability" },
  ];
};

export default function QualityMetrics() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Quality Metrics</h1>
      
      <div className="space-y-4">
        <p>
          Slot uses a comprehensive set of quality metrics to evaluate templates and help you make
          informed decisions. Our analysis considers both automated metrics and manual review criteria
          to provide a holistic quality assessment.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Core Metrics</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg">Maintenance Score</h3>
            <p className="text-muted-foreground mb-2">
              Evaluates how actively maintained the template is:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>Commit frequency (last 6 months)</li>
              <li>Time since last update</li>
              <li>Issue response time</li>
              <li>Pull request activity</li>
              <li>Number of contributors</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Documentation Score</h3>
            <p className="text-muted-foreground mb-2">
              Assesses the quality and completeness of documentation:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>README completeness</li>
              <li>Setup instructions clarity</li>
              <li>API documentation (if applicable)</li>
              <li>Code comments</li>
              <li>Example coverage</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Code Quality Score</h3>
            <p className="text-muted-foreground mb-2">
              Evaluates the technical quality of the codebase:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>Type safety coverage</li>
              <li>Linting configuration</li>
              <li>Code formatting</li>
              <li>Error handling</li>
              <li>Code organization</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Testing Score</h3>
            <p className="text-muted-foreground mb-2">
              Measures the testing setup and coverage:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>Test framework setup</li>
              <li>Unit test coverage</li>
              <li>Integration tests</li>
              <li>E2E testing</li>
              <li>CI configuration</li>
            </ul>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Scoring System</h2>
        
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Each metric is scored on a scale of 1-5, with clear criteria for each level:
          </p>

          <div className="space-y-4">
            <div className="rounded-lg border bg-muted/50 p-4">
              <h4 className="font-semibold text-green-600">5 - Excellent</h4>
              <ul className="list-disc list-inside text-muted-foreground mt-2">
                <li>Actively maintained with frequent updates</li>
                <li>Comprehensive documentation with examples</li>
                <li>Strong type safety and error handling</li>
                <li>Extensive test coverage</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-muted/50 p-4">
              <h4 className="font-semibold text-green-500">4 - Very Good</h4>
              <ul className="list-disc list-inside text-muted-foreground mt-2">
                <li>Regular updates and maintenance</li>
                <li>Good documentation coverage</li>
                <li>Good type safety and practices</li>
                <li>Good test coverage</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-muted/50 p-4">
              <h4 className="font-semibold text-yellow-500">3 - Good</h4>
              <ul className="list-disc list-inside text-muted-foreground mt-2">
                <li>Occasional updates</li>
                <li>Basic documentation</li>
                <li>Basic type safety</li>
                <li>Some tests</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-muted/50 p-4">
              <h4 className="font-semibold text-orange-500">2 - Fair</h4>
              <ul className="list-disc list-inside text-muted-foreground mt-2">
                <li>Infrequent updates</li>
                <li>Minimal documentation</li>
                <li>Limited type safety</li>
                <li>Few or no tests</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-muted/50 p-4">
              <h4 className="font-semibold text-red-500">1 - Poor</h4>
              <ul className="list-disc list-inside text-muted-foreground mt-2">
                <li>No recent updates</li>
                <li>Poor or no documentation</li>
                <li>No type safety</li>
                <li>No tests</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Overall Quality Score</h2>
        
        <div className="space-y-4">
          <p className="text-muted-foreground">
            The overall quality score is a weighted average of the core metrics:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg">Metric Weights</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Maintenance: 35%</li>
                <li>Documentation: 25%</li>
                <li>Code Quality: 25%</li>
                <li>Testing: 15%</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg">Score Interpretation</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>4.5-5.0: Production-ready</li>
                <li>3.5-4.4: Production-capable</li>
                <li>2.5-3.4: Development-ready</li>
                <li>1.5-2.4: Needs work</li>
                <li>1.0-1.4: Not recommended</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Next Steps</h2>
        <p className="text-muted-foreground">
          Now that you understand how we evaluate templates, learn how to{" "}
          <a href="/docs/mcp/search" className="underline hover:no-underline">search for templates</a>
          {" "}that meet your quality requirements.
        </p>
      </div>
    </div>
  );
} 
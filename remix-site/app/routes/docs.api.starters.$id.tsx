import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Get Starter API - Slot Documentation" },
    { name: "description", content: "Documentation for the Get Starter API endpoint" },
  ];
};

export default function GetStarterApi() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Get Starter</h1>
      
      <div className="space-y-4">
        <div className="rounded-lg border bg-muted/50 p-4">
          <code className="text-lg font-semibold">GET /api/starters/:id</code>
          <p className="text-muted-foreground mt-2">
            Returns detailed information about a specific starter template, including its metadata,
            technologies, features, and quality metrics.
          </p>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Path Parameters</h2>
        
        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <code className="font-semibold">id</code>
            <p className="text-muted-foreground mt-1">
              The unique identifier of the starter template. This is typically the repository name
              or a unique slug.
            </p>
            <p className="text-sm text-muted-foreground mt-1">Example: <code>/api/starters/create-t3-app</code></p>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Response</h2>
        
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Success Response</h3>
          <pre className="rounded-lg bg-muted p-4 overflow-x-auto">
            <code className="text-sm">{`{
  "metadata": {
    "name": "starter-name",
    "url": "https://github.com/user/repo"
  },
  "technologies": [
    "react",
    "typescript",
    "tailwind"
  ],
  "features": {
    "development": {
      "testing": true,
      "linting": true
    },
    "security": {
      "authentication": true
    }
  },
  "quality": {
    "maintenance": {
      "commitFrequency": 4,
      "issueResponseTime": 5
    },
    "documentation": {
      "readmeCompleteness": 4,
      "setupInstructions": 5,
      "exampleCoverage": 4
    }
  },
  "quality_score": 4.4
}`}</code>
          </pre>

          <h3 className="font-semibold text-lg">Error Responses</h3>
          <div className="grid gap-4">
            <div>
              <h4 className="font-medium">Not Found</h4>
              <pre className="mt-2 rounded-lg bg-muted p-4 overflow-x-auto">
                <code className="text-sm">{`{
  "error": {
    "status": 404,
    "message": "Starter not found"
  }
}`}</code>
              </pre>
            </div>

            <div>
              <h4 className="font-medium">Server Error</h4>
              <pre className="mt-2 rounded-lg bg-muted p-4 overflow-x-auto">
                <code className="text-sm">{`{
  "error": {
    "status": 500,
    "message": "An error occurred while processing your request"
  }
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Example Request</h2>
        
        <div className="space-y-4">
          <pre className="rounded-lg bg-muted p-4 overflow-x-auto">
            <code className="text-sm">curl http://localhost:3000/api/starters/create-t3-app</code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Response Fields</h2>
        
        <div className="space-y-4">
          <div className="grid gap-4">
            <div className="rounded-lg border p-4">
              <code className="font-semibold">quality_score</code>
              <p className="text-muted-foreground mt-1">
                A calculated score between 1-5 that represents the overall quality of the starter template.
                This is derived from various quality metrics including maintenance and documentation scores.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <code className="font-semibold">quality.maintenance</code>
              <p className="text-muted-foreground mt-1">
                Metrics related to repository maintenance:
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground mt-1 space-y-1">
                <li><code>commitFrequency</code>: Score based on how frequently the repository is updated</li>
                <li><code>issueResponseTime</code>: Score based on how quickly issues are addressed</li>
              </ul>
            </div>

            <div className="rounded-lg border p-4">
              <code className="font-semibold">quality.documentation</code>
              <p className="text-muted-foreground mt-1">
                Metrics related to project documentation:
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground mt-1 space-y-1">
                <li><code>readmeCompleteness</code>: Score based on README.md completeness</li>
                <li><code>setupInstructions</code>: Score based on setup/installation documentation</li>
                <li><code>exampleCoverage</code>: Score based on example code and usage documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
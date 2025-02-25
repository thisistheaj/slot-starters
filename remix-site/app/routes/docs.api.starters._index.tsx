import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "List Starters API - Slot Documentation" },
    { name: "description", content: "Documentation for the List Starters API endpoint" },
  ];
};

export default function ListStartersApi() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">List Starters</h1>
      
      <div className="space-y-4">
        <div className="rounded-lg border bg-muted/50 p-4">
          <code className="text-lg font-semibold">GET /api/starters</code>
          <p className="text-muted-foreground mt-2">
            Returns a paginated list of starter templates. The results can be filtered by technologies,
            features, and quality scores.
          </p>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Query Parameters</h2>
        
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Pagination</h3>
          <div className="grid gap-4">
            <div className="rounded-lg border p-4">
              <code className="font-semibold">page</code>
              <p className="text-muted-foreground mt-1">Page number (1-based). Defaults to 1.</p>
              <p className="text-sm text-muted-foreground mt-1">Example: <code>?page=2</code></p>
            </div>

            <div className="rounded-lg border p-4">
              <code className="font-semibold">per_page</code>
              <p className="text-muted-foreground mt-1">Number of items per page. Defaults to 20, maximum 100.</p>
              <p className="text-sm text-muted-foreground mt-1">Example: <code>?per_page=50</code></p>
            </div>
          </div>

          <h3 className="font-semibold text-lg">Filtering</h3>
          <div className="grid gap-4">
            <div className="rounded-lg border p-4">
              <code className="font-semibold">technologies</code>
              <p className="text-muted-foreground mt-1">
                Filter by technologies. Can be specified multiple times or as comma-separated values.
                Returns starters that use ANY of the specified technologies.
              </p>
              <p className="text-sm text-muted-foreground mt-1">Examples:</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground mt-1 space-y-1">
                <li><code>?technologies=react,typescript</code></li>
                <li><code>?technologies=react&technologies=typescript</code></li>
              </ul>
            </div>

            <div className="rounded-lg border p-4">
              <code className="font-semibold">features</code>
              <p className="text-muted-foreground mt-1">
                Filter by features. Can be specified multiple times or as comma-separated values.
                Returns starters that have ANY of the specified features.
              </p>
              <p className="text-sm text-muted-foreground mt-1">Examples:</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground mt-1 space-y-1">
                <li><code>?features=authentication,testing</code></li>
                <li><code>?features=development.testing&features=security.authentication</code></li>
              </ul>
            </div>

            <div className="rounded-lg border p-4">
              <code className="font-semibold">min_quality</code>
              <p className="text-muted-foreground mt-1">
                Filter by minimum quality score (1-5). Returns starters with a quality score greater than
                or equal to the specified value.
              </p>
              <p className="text-sm text-muted-foreground mt-1">Example: <code>?min_quality=4</code></p>
            </div>

            <div className="rounded-lg border p-4">
              <code className="font-semibold">min_matched</code>
              <p className="text-muted-foreground mt-1">
                Filter by minimum number of matched filters. Only applies when technologies or features
                are specified. Returns starters that match at least this many of the specified filters.
              </p>
              <p className="text-sm text-muted-foreground mt-1">Example: <code>?technologies=react,typescript&min_matched=2</code></p>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Response</h2>
        
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Success Response</h3>
          <pre className="rounded-lg bg-muted p-4 overflow-x-auto">
            <code className="text-sm">{`{
  "items": [
    {
      "metadata": {
        "name": "starter-name",
        "url": "https://github.com/user/repo"
      },
      "technologies": ["react", "typescript"],
      "features": {
        "development": {
          "testing": true
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
      "match_score": {
        "matched": 2,
        "total": 3
      }
    }
  ],
  "pagination": {
    "total_items": 100,
    "total_pages": 5,
    "current_page": 1,
    "per_page": 20,
    "has_next": true,
    "has_previous": false
  }
}`}</code>
          </pre>

          <h3 className="font-semibold text-lg">Error Response</h3>
          <pre className="rounded-lg bg-muted p-4 overflow-x-auto">
            <code className="text-sm">{`{
  "error": {
    "status": 400,
    "message": "Invalid parameter value"
  }
}`}</code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Example Requests</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg">Basic Pagination</h3>
            <pre className="mt-2 rounded-lg bg-muted p-4 overflow-x-auto">
              <code className="text-sm">GET /api/starters?page=2&per_page=50</code>
            </pre>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Technology Filter</h3>
            <pre className="mt-2 rounded-lg bg-muted p-4 overflow-x-auto">
              <code className="text-sm">GET /api/starters?technologies=react,typescript&min_quality=4</code>
            </pre>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Feature Filter</h3>
            <pre className="mt-2 rounded-lg bg-muted p-4 overflow-x-auto">
              <code className="text-sm">GET /api/starters?features=development.testing,security.authentication&min_matched=2</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
} 
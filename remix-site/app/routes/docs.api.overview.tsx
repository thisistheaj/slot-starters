import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "API Documentation - Slot" },
    { name: "description", content: "API documentation for Slot's starter template endpoints" },
  ];
};

export default function ApiOverview() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">API Documentation</h1>
      
      <div className="space-y-4">
        <p>
          Slot provides a RESTful API for programmatically accessing and filtering starter templates.
          The API follows REST conventions and returns JSON responses.
        </p>

        <div className="rounded-lg border bg-muted/50 p-4">
          <p className="text-sm text-muted-foreground">
            <strong>Base URL:</strong> All API endpoints are relative to:
            <code className="mx-2 rounded bg-muted px-2 py-1">https://slotstarters.com/api</code>
          </p>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Available Endpoints</h2>
        
        <div className="space-y-4">
          <div className="grid gap-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold text-lg">List Starters</h3>
              <p className="text-muted-foreground mt-1">Get a paginated list of starter templates with optional filtering.</p>
              <code className="mt-2 block rounded bg-muted px-3 py-2">GET /starters</code>
              <a href="/docs/api/starters" className="text-sm text-primary hover:underline mt-2 inline-block">
                View Documentation →
              </a>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-semibold text-lg">Get Starter</h3>
              <p className="text-muted-foreground mt-1">Get detailed information about a specific starter template.</p>
              <code className="mt-2 block rounded bg-muted px-3 py-2">GET /starters/:id</code>
              <a href="/docs/api/starters/id" className="text-sm text-primary hover:underline mt-2 inline-block">
                View Documentation →
              </a>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Response Format</h2>
        
        <div className="space-y-4">
          <p className="text-muted-foreground">
            All responses are returned in JSON format. Successful responses will contain the requested data,
            while error responses will include an error object with details about what went wrong.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Success Response</h3>
              <pre className="mt-2 rounded-lg bg-muted p-4 overflow-x-auto">
                <code className="text-sm">{`{
  "items": [...],
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
            </div>

            <div>
              <h3 className="font-semibold text-lg">Error Response</h3>
              <pre className="mt-2 rounded-lg bg-muted p-4 overflow-x-auto">
                <code className="text-sm">{`{
  "error": {
    "status": 400,
    "message": "Invalid parameter value"
  }
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Rate Limiting</h2>
        <p className="text-muted-foreground">
          Currently, the API does not implement rate limiting. However, we recommend clients to
          implement reasonable request rates to ensure service stability.
        </p>
      </div>
    </div>
  );
} 
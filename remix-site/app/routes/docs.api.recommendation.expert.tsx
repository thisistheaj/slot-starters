import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "API: Expert Recommendation - Slot Documentation" },
    { name: "description", content: "Documentation for the AI-powered expert recommendation API endpoint" },
  ];
};

export default function DocsApiRecommendationExpert() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Get Expert Recommendation</h1>
      
      <p className="text-muted-foreground">
        Get opinionated, AI-powered starter template recommendations based on natural language queries and expert rules.
        This endpoint enhances the standard recommendation with expert knowledge about best practices and common misconceptions.
      </p>

      <div className="rounded-lg border bg-muted/50 p-4">
        <code className="text-sm">GET /api/recommendation/expert?question=string</code>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Query Parameters</h2>
        
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">question</h3>
          <p className="text-muted-foreground mt-1">A natural language description of your requirements.</p>
          <div className="mt-2 text-sm">
            <p className="font-semibold">Type: <code className="text-xs">string</code></p>
            <p className="font-semibold">Required: <code className="text-xs">true</code></p>
          </div>
          <div className="mt-2 space-y-2">
            <p className="text-sm text-muted-foreground">Example queries:</p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>"I want a minimal React starter that I can build up from scratch"</li>
              <li>"Looking for a backend with websockets for realtime updates"</li>
              <li>"Need a starter with NoSQL database for flexibility"</li>
            </ul>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Expert Rules</h2>
        
        <div className="rounded-lg border p-4 space-y-4">
          <p className="text-muted-foreground">
            The expert recommendation system incorporates knowledge about best practices and common misconceptions
            in starter template selection. It can provide additional recommendations and insights that are not covered by the standard recommendation algorithm.
          </p>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Response</h2>
        
        <div className="rounded-lg border p-4 space-y-4">
          <div>
            <h3 className="font-semibold">Response Fields</h3>
            <div className="mt-2 space-y-2">
              <div>
                <code className="text-sm">question</code>
                <p className="text-sm text-muted-foreground mt-1">The original query string.</p>
              </div>
              <div>
                <code className="text-sm">extracted_query</code>
                <p className="text-sm text-muted-foreground mt-1">The structured query parameters extracted by GPT.</p>
              </div>
              <div>
                <code className="text-sm">starters</code>
                <p className="text-sm text-muted-foreground mt-1">Array of matching starter templates.</p>
              </div>
              <div>
                <code className="text-sm">recommendation</code>
                <p className="text-sm text-muted-foreground mt-1">Expert recommendation explaining matches and addressing potential misconceptions.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Example Response</h3>
            <pre className="mt-2 rounded bg-muted p-4 overflow-x-auto text-sm">
{`{
  "question": "I want a minimal React starter that I can build up from scratch",
  "extracted_query": {
    "technologies": ["React"],
    "features": ["minimal"],
    "min_quality": 3,
    "minMatched": 1,
    "limit": 3
  },
  "starters": [...],
  "recommendation": "While you might be tempted to start with a minimal template and build it up yourself, this approach often leads to reinventing the wheel and missing important best practices. Instead, I recommend the 'comprehensive-react-starter' which comes with a well-thought-out structure and essential features like testing and Docker setup. You can always remove features you don't need, but having them properly configured from the start will save you time and help you follow best practices..."
}`}
            </pre>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Error Responses</h2>
        
        <div className="rounded-lg border p-4 space-y-4">
          <div className="space-y-2">
            <div>
              <p className="font-semibold">400 Bad Request</p>
              <p className="text-sm text-muted-foreground">Returned when the question parameter is missing.</p>
            </div>
            <div>
              <p className="font-semibold">500 Internal Server Error</p>
              <p className="text-sm text-muted-foreground">Returned when there's an error processing the request or communicating with OpenAI.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
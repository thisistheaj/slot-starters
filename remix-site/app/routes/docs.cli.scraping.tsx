import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Scraping Starters - Slot CLI Documentation" },
    { name: "description", content: "Learn how to use Slot's CLI tools to scrape starter templates" },
  ];
};

export default function ScrapingDocs() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Scraping Starters</h1>
      
      <div className="space-y-4">
        <p>
          Slot provides powerful CLI commands for scraping starter templates from various sources.
          These tools help you build and maintain your own collection of templates.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">GitHub Scraping</h2>
        
        <p>
          The GitHub scraper finds repositories that match specific criteria and downloads their contents for analysis.
        </p>

        <h3 className="text-xl font-semibold mt-6">Basic Usage</h3>
        <pre className="p-4 rounded-lg bg-muted overflow-auto">
          <code>{`slot scrape github <token> [options]`}</code>
        </pre>

        <h3 className="text-xl font-semibold mt-6">Options</h3>
        <div className="space-y-3">
          <div>
            <code className="text-sm bg-muted px-2 py-1 rounded">-s, --stars &lt;number&gt;</code>
            <p className="text-sm text-muted-foreground mt-1">Minimum stars (default: 50)</p>
          </div>
          <div>
            <code className="text-sm bg-muted px-2 py-1 rounded">-t, --topics &lt;items&gt;</code>
            <p className="text-sm text-muted-foreground mt-1">Topics to search for (comma-separated)</p>
          </div>
          <div>
            <code className="text-sm bg-muted px-2 py-1 rounded">-L, --languages &lt;items&gt;</code>
            <p className="text-sm text-muted-foreground mt-1">Languages to search for (comma-separated)</p>
          </div>
          <div>
            <code className="text-sm bg-muted px-2 py-1 rounded">-b, --batch &lt;size&gt;</code>
            <p className="text-sm text-muted-foreground mt-1">Batch size for parallel processing</p>
          </div>
          <div>
            <code className="text-sm bg-muted px-2 py-1 rounded">-d, --delay &lt;ms&gt;</code>
            <p className="text-sm text-muted-foreground mt-1">Delay between requests</p>
          </div>
          <div>
            <code className="text-sm bg-muted px-2 py-1 rounded">-r, --rph &lt;limit&gt;</code>
            <p className="text-sm text-muted-foreground mt-1">Requests per hour limit</p>
          </div>
          <div>
            <code className="text-sm bg-muted px-2 py-1 rounded">-l, --limit &lt;number&gt;</code>
            <p className="text-sm text-muted-foreground mt-1">Maximum results to fetch</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-6">Examples</h3>
        <pre className="p-4 rounded-lg bg-muted overflow-auto">
          <code>{`# Scrape React starters with minimum 100 stars
slot scrape github $GITHUB_TOKEN -s 100 -t react-starter,react-boilerplate -L typescript

# Scrape Next.js templates with rate limiting
slot scrape github $GITHUB_TOKEN -t nextjs,starter -r 100 -d 1000

# Scrape top 50 Vue.js starters
slot scrape github $GITHUB_TOKEN -t vue,starter -l 50 -s 200`}</code>
        </pre>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">NPM Scraping</h2>
        
        <p>
          The NPM scraper finds starter template packages based on keywords and download counts.
        </p>

        <h3 className="text-xl font-semibold mt-6">Basic Usage</h3>
        <pre className="p-4 rounded-lg bg-muted overflow-auto">
          <code>{`slot scrape npm [options]`}</code>
        </pre>

        <h3 className="text-xl font-semibold mt-6">Options</h3>
        <div className="space-y-3">
          <div>
            <code className="text-sm bg-muted px-2 py-1 rounded">-k, --keywords &lt;items&gt;</code>
            <p className="text-sm text-muted-foreground mt-1">Keywords to search for (comma-separated)</p>
          </div>
          <div>
            <code className="text-sm bg-muted px-2 py-1 rounded">-b, --batch &lt;size&gt;</code>
            <p className="text-sm text-muted-foreground mt-1">Batch size for parallel processing</p>
          </div>
          <div>
            <code className="text-sm bg-muted px-2 py-1 rounded">-d, --delay &lt;ms&gt;</code>
            <p className="text-sm text-muted-foreground mt-1">Delay between requests</p>
          </div>
          <div>
            <code className="text-sm bg-muted px-2 py-1 rounded">-r, --rph &lt;limit&gt;</code>
            <p className="text-sm text-muted-foreground mt-1">Requests per hour limit</p>
          </div>
          <div>
            <code className="text-sm bg-muted px-2 py-1 rounded">-l, --limit &lt;number&gt;</code>
            <p className="text-sm text-muted-foreground mt-1">Maximum results to fetch</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-6">Examples</h3>
        <pre className="p-4 rounded-lg bg-muted overflow-auto">
          <code>{`# Search for React starter kits
slot scrape npm -k react-starter,react-boilerplate

# Find Next.js templates with limits
slot scrape npm -k nextjs-starter -l 50 -r 100

# Search for Vue.js starters in batches
slot scrape npm -k vue-starter,vue-template -b 10`}</code>
        </pre>

        <div className="mt-6 rounded-md bg-muted p-4">
          <h3 className="text-sm font-medium">Rate Limiting</h3>
          <p className="mt-2 text-sm">
            Be mindful of API rate limits when scraping. Use the <code className="text-xs">--rph</code> and <code className="text-xs">--delay</code> options
            to avoid hitting rate limits. For GitHub, authenticate with a token that has appropriate permissions.
          </p>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Next Steps</h2>
        
        <p>
          After scraping templates, you can:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a href="/docs/cli/analyzing" className="font-medium underline underline-offset-4">
              Analyze the templates
            </a>
            {" "}to extract features and quality metrics
          </li>
          <li>
            <a href="/docs/cli/searching" className="font-medium underline underline-offset-4">
              Search through the templates
            </a>
            {" "}to find ones that match your needs
          </li>
        </ul>
      </div>
    </div>
  );
} 
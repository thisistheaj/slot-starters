import { cn } from "~/lib/utils";

interface TemplateCardProps {
  template: {
    metadata: {
      name: string;
      url: string;
    };
    technologies: string[];
    quality?: {
      maintenance?: {
        commitFrequency?: number;
        issueResponseTime?: number;
      };
      documentation?: {
        readmeCompleteness?: number;
        setupInstructions?: number;
        exampleCoverage?: number;
      };
    };
  };
  qualityScore: number;
  selectedTechs: Set<string>;
  matchScore?: {
    matched: number;
    total: number;
  };
}

export function TemplateCard({ template, qualityScore, selectedTechs, matchScore }: TemplateCardProps) {
  return (
    <div className="rounded-lg border bg-card">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">{template.metadata.name}</h3>
          <div className="flex items-center gap-2">
            {matchScore && (
              <div 
                className={cn(
                  "text-sm font-medium rounded-full px-2 py-1",
                  matchScore.matched === matchScore.total 
                    ? "bg-green-500/20 text-green-500"
                    : matchScore.matched > matchScore.total / 2
                    ? "bg-yellow-500/20 text-yellow-500"
                    : "bg-red-500/20 text-red-500"
                )}
              >
                {matchScore.matched}/{matchScore.total} matches
              </div>
            )}
            <div 
              className={cn(
                "text-sm font-medium rounded-full px-2 py-1",
                qualityScore >= 4 
                  ? "bg-green-500/20 text-green-500"
                  : qualityScore >= 3
                  ? "bg-yellow-500/20 text-yellow-500"
                  : "bg-red-500/20 text-red-500"
              )}
            >
              Quality: {qualityScore}/5
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {template.technologies?.map(tech => (
            <span
              key={tech}
              className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
                selectedTechs.has(tech) && "border-primary text-primary"
              )}
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={template.metadata.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
        >
          View Template
        </a>
      </div>
    </div>
  );
} 
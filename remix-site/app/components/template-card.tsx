import { cn } from "~/lib/utils";
import { ExternalLink } from "lucide-react";
import { Avatar } from "./avatar";

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
    <div className="rounded-lg border bg-[#F5F1EA] h-full">
      <div className="flex flex-col h-full p-6">
        {/* Header section with avatar and metadata */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          <Avatar name={template.metadata.name} className="flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <h3 className="font-semibold break-words">{template.metadata.name}</h3>
              <div className="flex flex-wrap gap-2 flex-shrink-0">
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
          </div>
        </div>

        {/* Technologies cloud */}
        <div className="flex flex-wrap gap-2 mt-4 flex-1">
          {template.technologies?.map(tech => (
            <span
              key={tech}
              className={cn(
                "inline-flex h-6 items-center whitespace-nowrap rounded-full border px-2.5 text-xs font-semibold transition-colors",
                selectedTechs.has(tech)
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-muted bg-muted/50 text-muted-foreground hover:bg-muted/80"
              )}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View button */}
        <div className="flex justify-end mt-4 pt-4 border-t">
          <a
            href={template.metadata.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary hover:bg-primary/90 px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors"
          >
            View
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
} 
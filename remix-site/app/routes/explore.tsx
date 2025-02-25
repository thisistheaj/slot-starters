import { useEffect, useState } from "react";
import type { MetaFunction } from "@remix-run/node";
import { Header } from "~/components/header";
import { QualitySelector } from "~/components/quality-selector";
import { TagCloud } from "~/components/tag-cloud";
import { FeatureTagCloud } from "~/components/feature-tag-cloud";
import { TemplateCard } from "~/components/template-card";

const MIN_QUALITY_SCORE = 3;

export const meta: MetaFunction = () => {
  return [
    { title: "Explore Templates - Slot" },
    { name: "description", content: "Discover and explore starter templates" },
  ];
};

type Template = {
  metadata: {
    name: string;
    url: string;
  };
  technologies: string[];
  features?: {
    [category: string]: {
      [feature: string]: boolean;
    };
  };
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

function getQualityScore(quality: Template["quality"]) {
  if (!quality) return MIN_QUALITY_SCORE;
  const scores = [
    quality.maintenance?.commitFrequency || MIN_QUALITY_SCORE,
    quality.maintenance?.issueResponseTime || MIN_QUALITY_SCORE,
    quality.documentation?.readmeCompleteness || MIN_QUALITY_SCORE,
    quality.documentation?.setupInstructions || MIN_QUALITY_SCORE,
    quality.documentation?.exampleCoverage || MIN_QUALITY_SCORE,
  ];
  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
}

function getMatchScore(template: Template, selectedTechs: Set<string>, selectedFeatures: Set<string>) {
  let matched = 0;
  let total = selectedTechs.size + selectedFeatures.size;

  // Count technology matches
  selectedTechs.forEach(tech => {
    if (template.technologies?.includes(tech)) {
      matched++;
    }
  });

  // Count feature matches
  selectedFeatures.forEach(feature => {
    const [category, featureName] = feature.split(".");
    if (template.features?.[category]?.[featureName]) {
      matched++;
    }
  });

  return { matched, total };
}

export default function Explore() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTechs, setSelectedTechs] = useState<Set<string>>(new Set());
  const [selectedFeatures, setSelectedFeatures] = useState<Set<string>>(new Set());
  const [min_quality, setMinQuality] = useState(MIN_QUALITY_SCORE);

  // Load templates
  useEffect(() => {
    async function loadTemplates() {
      try {
        const module = await import("/importable-starters/index.js");
        const templateData = Object.values(module);
        setTemplates(templateData as Template[]);
      } catch (error) {
        console.error("Error loading templates:", error);
      } finally {
        setLoading(false);
      }
    }
    loadTemplates();
  }, []);

  // Get unique technologies and features
  const technologies = new Set<string>();
  const features = new Set<string>();

  templates.forEach(template => {
    template.technologies?.forEach(tech => technologies.add(tech));
    if (template.features) {
      Object.entries(template.features).forEach(([category, categoryFeatures]) => {
        Object.entries(categoryFeatures).forEach(([feature, hasFeature]) => {
          if (hasFeature) {
            features.add(`${category}.${feature}`);
          }
        });
      });
    }
  });

  // Filter and group templates
  const filteredTemplates = templates.filter(template => {
    const qualityScore = getQualityScore(template.quality);
    if (qualityScore < min_quality) return false;
    
    // If no filters are selected, show all templates that meet quality threshold
    if (selectedTechs.size === 0 && selectedFeatures.size === 0) return true;

    const { matched, total } = getMatchScore(template, selectedTechs, selectedFeatures);
    return matched > 0;
  });

  // Group templates by match score
  const groupedTemplates = filteredTemplates.reduce((groups, template) => {
    const { matched, total } = getMatchScore(template, selectedTechs, selectedFeatures);
    const key = total === 0 ? "all" : matched;
    if (!groups[key]) groups[key] = [];
    groups[key].push(template);
    return groups;
  }, {} as Record<string | number, Template[]>);

  // Sort groups by match count (descending)
  const sortedGroups = Object.entries(groupedTemplates)
    .sort(([a], [b]) => {
      if (a === "all") return -1;
      if (b === "all") return 1;
      return Number(b) - Number(a);
    });

  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-8">
          <h1 className="text-4xl font-bold tracking-tight mb-8">Explore Templates</h1>

          {/* Filters */}
          <div className="mb-8">
            <div className="rounded-lg border bg-[#F5F1EA] p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TagCloud
                  title="Technologies"
                  tags={Array.from(technologies)}
                  selectedTags={selectedTechs}
                  onTagToggle={(tech) => {
                    const newSelected = new Set(selectedTechs);
                    if (newSelected.has(tech)) {
                      newSelected.delete(tech);
                    } else {
                      newSelected.add(tech);
                    }
                    setSelectedTechs(newSelected);
                  }}
                />

                <FeatureTagCloud
                  features={features}
                  selectedTags={selectedFeatures}
                  onTagToggle={(feature) => {
                    const newSelected = new Set(selectedFeatures);
                    if (newSelected.has(feature)) {
                      newSelected.delete(feature);
                    } else {
                      newSelected.add(feature);
                    }
                    setSelectedFeatures(newSelected);
                  }}
                />
              </div>

              <div className="max-w-xl">
                <QualitySelector
                  value={min_quality}
                  onChange={setMinQuality}
                />
              </div>
            </div>
          </div>

          {/* Templates Grid */}
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="space-y-8">
              {sortedGroups.map(([matchCount, templates]) => (
                <div key={matchCount} className="space-y-4">
                  <h2 className="text-xl font-semibold">
                    {matchCount === "all" 
                      ? "All Templates"
                      : Number(matchCount) === selectedTechs.size + selectedFeatures.size
                      ? `Perfect Match (${matchCount}/${selectedTechs.size + selectedFeatures.size}):`
                      : `Partial Match (${matchCount}/${selectedTechs.size + selectedFeatures.size}):`}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {templates.map((template, index) => (
                      <TemplateCard
                        key={index}
                        template={template}
                        qualityScore={getQualityScore(template.quality)}
                        selectedTechs={selectedTechs}
                        matchScore={
                          matchCount !== "all"
                            ? getMatchScore(template, selectedTechs, selectedFeatures)
                            : undefined
                        }
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 
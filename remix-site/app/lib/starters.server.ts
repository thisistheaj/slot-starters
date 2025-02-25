import type { Starter } from "~/types/starter";

export const MIN_QUALITY_SCORE = 3;

export async function loadStarters(): Promise<Starter[]> {
  try {
    const module = await import("../../public/importable-starters/index.js");
    return Object.values(module) as Starter[];
  } catch (error) {
    console.error("Failed to load starters:", error);
    return [];
  }
}

export function getQualityScore(quality: Starter["quality"]) {
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

export function getMatchScore(starter: Starter, technologies: string[], features: string[]) {
  let matched = 0;
  let total = technologies.length + features.length;

  // Count technology matches
  technologies.forEach(tech => {
    if (starter.technologies?.includes(tech)) {
      matched++;
    }
  });

  // Count feature matches
  features.forEach(feature => {
    const [category, featureName] = feature.split(".");
    if (starter.features?.[category]?.[featureName]) {
      matched++;
    }
  });

  return { matched, total };
}

export function filterStarters(starters: Starter[], filters: {
  technologies?: string[];
  features?: string[];
  min_quality?: number;
}): Starter[] {
  return starters.filter(starter => {
    // Filter by minimum quality
    if (typeof filters.min_quality === "number") {
      const qualityScore = getQualityScore(starter.quality);
      if (qualityScore < filters.min_quality) return false;
    }

    // If no filters are selected, show all starters that meet quality threshold
    if (!filters.technologies?.length && !filters.features?.length) return true;

    const { matched } = getMatchScore(
      starter,
      filters.technologies || [],
      filters.features || []
    );
    return matched > 0;
  });
} 
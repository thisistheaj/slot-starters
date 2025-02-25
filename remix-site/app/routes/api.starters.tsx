import { json } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { getPaginationParams, paginateArray, createErrorResponse } from "~/lib/api-utils";
import { loadStarters, filterStarters, getMatchScore } from "~/lib/starters.server";
import type { Starter } from "~/types/starter";

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const url = new URL(request.url);
    const searchParams = url.searchParams;

    // Get pagination params
    const paginationParams = getPaginationParams({
      page: Number(searchParams.get("page")),
      per_page: Number(searchParams.get("per_page"))
    });

    // Get filter params
    const technologies = searchParams.getAll("technologies")
      .flatMap(t => t.split(","))
      .filter(Boolean);
    const features = searchParams.getAll("features")
      .flatMap(f => f.split(","))
      .filter(Boolean);

    const filters = {
      technologies,
      features,
      min_quality: Number(searchParams.get("min_quality")) || undefined,
      min_matched: Number(searchParams.get("min_matched")) || undefined
    };

    // Load and filter starters
    const allStarters = await loadStarters();
    const filteredStarters = filterStarters(allStarters, filters);

    // Add match scores if filters are applied
    const startersWithScores = filteredStarters.map(starter => {
      const matchScore = filters.technologies.length || filters.features.length
        ? getMatchScore(starter, filters.technologies, filters.features)
        : undefined;
      
      // Validate match score
      if (matchScore && matchScore.matched > matchScore.total) {
        throw new Error(`Invalid match score: matched (${matchScore.matched}) cannot exceed total (${matchScore.total})`);
      }

      // Filter out starters below minimum matches
      if (filters.min_matched && (!matchScore || matchScore.matched < filters.min_matched)) {
        return null;
      }

      return {
        ...starter,
        ...(matchScore ? { match_score: matchScore } : {})
      };
    }).filter((s): s is (Starter & { match_score?: { matched: number; total: number } }) => s !== null);
    
    // Sort by match count if filters are applied
    const sortedStarters = filters.technologies.length || filters.features.length
      ? startersWithScores.sort((a, b) => {
          const matchedA = a.match_score?.matched || 0;
          const matchedB = b.match_score?.matched || 0;
          return matchedB - matchedA;
        })
      : startersWithScores;
    
    // Paginate results
    const response = paginateArray(sortedStarters, paginationParams);
    
    return json(response);
  } catch (error) {
    console.error("API Error:", error);
    const message = error instanceof Error ? error.message : "An error occurred while processing your request";
    return json(createErrorResponse(500, message), { status: 500 });
  }
} 
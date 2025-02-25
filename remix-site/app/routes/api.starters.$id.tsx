import { json } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { createErrorResponse } from "~/lib/api-utils";
import { loadStarters, getQualityScore } from "~/lib/starters.server";

export async function loader({ params }: LoaderFunctionArgs) {
  try {
    const { id } = params;
    if (!id) {
      return json(
        createErrorResponse(400, "Starter ID is required"),
        { status: 400 }
      );
    }

    const starters = await loadStarters();
    const starter = starters.find(s => s.metadata.name === id);
    
    if (!starter) {
      return json(
        createErrorResponse(404, "Starter not found"),
        { status: 404 }
      );
    }

    // Add calculated quality score to response
    const response = {
      ...starter,
      quality_score: getQualityScore(starter.quality)
    };

    return json(response);
  } catch (error) {
    console.error("API Error:", error);
    return json(
      createErrorResponse(500, "An error occurred while processing your request"),
      { status: 500 }
    );
  }
} 
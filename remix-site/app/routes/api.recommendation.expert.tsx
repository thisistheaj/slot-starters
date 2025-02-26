import { json } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { OpenAI } from "openai";
import { createErrorResponse } from "~/lib/api-utils";
import { loadStarters, filterStarters } from "~/lib/starters.server";
import type { StarterFilters } from "~/types/starter";
import { expertRules } from "~/lib/brainlift";

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type RecommendationQuery = StarterFilters & {
  minMatched?: number;
  limit?: number;
};

async function extractQueryFromQuestion(question: string): Promise<RecommendationQuery> {
  const prompt = `Given the following question about starter templates, extract the relevant technologies, features, and requirements into a JSON object.
  Format the response as a valid JSON object with the following structure:
  {
    "technologies": string[], // List of programming languages, frameworks, or tools mentioned
    "features": string[],    // List of features or capabilities requested
    "min_quality": number,    // Minimum quality score (1-5), default to 3 if not specified
    "minMatched": number,    // Minimum number of matched criteria, default to 1
    "limit": number         // Maximum number of results to return, default to 3
  }

  Question: "${question}"`;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.1,
  });

  const content = response.choices[0]?.message?.content;
  if (!content) {
    throw new Error("Failed to get response from OpenAI");
  }

  try {
    return JSON.parse(content) as RecommendationQuery;
  } catch (error) {
    throw new Error("Failed to parse OpenAI response as JSON");
  }
}

async function generateExpertRecommendation(question: string, starters: any[]) {
  // Separate truths and myths for clearer prompting
  const truths = expertRules
    .filter(rule => rule.kind === "truth")
    .map(rule => rule.content);
  
  const myths = expertRules
    .filter(rule => rule.kind === "myth")
    .map(rule => rule.content);

  const prompt = `You are an opinionated expert on starter templates and project architecture.
  Your task is to provide a recommendation based on the user's question and available templates.
  
  Consider these established truths about starter templates:
  ${truths.map(truth => `- ${truth}`).join('\n')}
  
  And be aware of these common myths to avoid:
  ${myths.map(myth => `- ${myth}`).join('\n')}
  
  Question: "${question}"
  
  Available Templates:
  ${JSON.stringify(starters, null, 2)}
  
  Provide a detailed recommendation that:
  1. Explains which template(s) best fit the requirements
  2. Justifies your choices using the established truths
  3. Addresses and corrects any misconceptions if the user's question suggests belief in any myths
  4. Highlights key features and potential tradeoffs
  Keep the response conversational but authoritative.`;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
  });

  return response.choices[0]?.message?.content || "No recommendation available.";
}

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const url = new URL(request.url);
    const question = url.searchParams.get("question");

    if (!question) {
      return json(createErrorResponse(400, "Missing required 'question' parameter"), { status: 400 });
    }

    // Extract query parameters from the natural language question
    const query = await extractQueryFromQuestion(question);

    // Load and filter starters using the extracted query
    const allStarters = await loadStarters();
    const filteredStarters = filterStarters(allStarters, {
      technologies: query.technologies,
      features: query.features,
      min_quality: query.min_quality || 3,
    });

    // Apply additional minMatched filter if specified
    const matchedStarters = query.minMatched 
      ? filteredStarters.filter(starter => {
          const techMatches = query.technologies?.filter(tech => 
            starter.technologies.includes(tech)
          ).length || 0;
          
          const featureMatches = query.features?.filter(feature => {
            const [category, featureName] = feature.split(".");
            return starter.features?.[category]?.[featureName];
          }).length || 0;

          return (techMatches + featureMatches) >= (query.minMatched || 1);
        })
      : filteredStarters;

    // Limit the number of results
    const limitedStarters = matchedStarters.slice(0, query.limit || 3);

    // Generate expert recommendation based on the question, filtered starters, and expert rules
    const recommendation = await generateExpertRecommendation(question, limitedStarters);

    return json({
      question,
      extracted_query: query,
      starters: limitedStarters,
      recommendation,
    });

  } catch (error) {
    console.error("API Error:", error);
    const message = error instanceof Error ? error.message : "An error occurred while processing your request";
    return json(createErrorResponse(500, message), { status: 500 });
  }
} 
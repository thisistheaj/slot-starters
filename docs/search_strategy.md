# Starter Template Search Strategy

## Overview

This document outlines our approach to searching and recommending starter templates as part of the MCP (Model Context Protocol) integration. The goal is to help Claude find the most relevant starter templates during architecture discussions with users.

## System Context

The search system is part of a larger workflow:

1. Initial scraping of GitHub and NPM for starter templates
2. Analysis of each template using our ontology
3. User discussion with Claude about project requirements
4. MCP-based search request from Claude
5. Return of relevant templates with context
6. Claude's analysis and recommendation to user

## Search Requirements

### Input
- List of desired technologies
- Optional feature requirements
- Derived from Claude's understanding of user needs

### Output
- 5-30 relevant templates
- Rich context about each template
- Information about missing/alternative technologies
- Quality and maintenance metrics

### Key Constraints
- Must handle partial matches intelligently
- Should consider template quality and maintenance
- Need to provide enough context for Claude's analysis
- Should favor recent, well-maintained templates

## Storage Strategy

### Directory Structure
```
analyzed-starters/
  index.json        # Main search index
  github/
    {full_name}/    # e.g. "vercel/next.js"
      analysis.json # Ontology-based analysis
      original/     
        metadata.json
        readme.md
  npm/
    {name}/         # e.g. "create-expo"
      analysis.json
      original/
        metadata.json
        readme.md
```

### Search Index Structure
```typescript
interface SearchIndex {
  projects: {
    id: string;           
    technologies: string[];
    features: {
      development: string[];
      testing: string[];
      deployment: string[];
      security: string[];
    };
    qualityScore: number;  
    lastUpdate: Date;
    stars: number;
  }[];
  
  techRelationships: {
    [tech: string]: {
      similar: string[];
      commonlyUsedWith: string[];
    };
  };
}
```

## Search Implementation

### Scoring System
Templates are scored based on multiple factors:
- Technical match (40%)
- Feature match (20%)
- Quality score (20%)
- Recency (10%)
- Popularity (10%)

### Match Results
```typescript
interface StarterMatch {
  starter: StarterTemplate;
  scores: {
    technicalMatch: number;     // 0-1
    featureMatch: number;       // 0-1
    qualityScore: number;       // 0-1
    popularity: number;         // 0-1
    finalScore: number;        
  };
  missingTechnologies: string[];
  alternativeTechnologies: {
    required: string;
    present: string;
    confidence: number;
  }[];
}
```

### Result Set Control
- Dynamic threshold based on best match (70% of top score)
- Hard cap at 30 results
- Natural clustering around 10-15 results
- Minimum of 5 results when possible

## LLM Context Generation

The system provides rich context to Claude about each match:
```typescript
function generateLLMContext(matches: StarterMatch[]): string {
  return `
Here are the top matching starter templates:

${matches.map(match => `
## ${match.starter.name}
Technical match: ${match.scores.technicalMatch * 100}%
- Missing: ${match.missingTechnologies.join(', ')}
- Alternatives: ${match.alternativeTechnologies.map(alt => 
    `${alt.required} -> ${alt.present}`).join(', ')}

Quality indicators:
- Maintenance: ${match.starter.quality.maintenance}
- Documentation: ${match.starter.quality.documentation}
- Stars: ${match.starter.metadata.stars}
- Last updated: ${match.starter.metadata.lastUpdate}

Features present:
${Object.entries(match.starter.features)
  .map(([k,v]) => `- ${k}: ${v}`).join('\n')}
`).join('\n')}
`;
}
```

## Rationale

### Why Flat Files?
- Simple to maintain and inspect
- Good for version control
- Sufficient performance at our scale (~1200 templates)
- Easy to modify and evolve

### Why Fuzzy Matching?
- Perfect matches are rare
- Quality matters more than exact tech match
- Alternative technologies might be better
- Maintenance and documentation are critical factors

### Why Rich Context?
- Enables Claude to make nuanced recommendations
- Provides explanation of alternative technologies
- Helps identify potential integration work needed
- Supports better user decision making

## Future Considerations

1. **Index Evolution**
   - Add more technology relationships
   - Refine scoring weights
   - Add more quality metrics

2. **Performance Optimization**
   - Add caching if needed
   - Implement more sophisticated indexing
   - Consider database if scale increases significantly

3. **Search Refinement**
   - Tune scoring algorithms based on feedback
   - Add more context about alternatives
   - Improve technology relationship mapping 
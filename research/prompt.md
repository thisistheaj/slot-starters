# Starter Template Ontology Analysis

You are an expert in software architecture and project scaffolding. Your task is to analyze a set of starter templates and create a comprehensive ontology for classifying and understanding them.

## Context
We have collected metadata and documentation from 20 popular starter templates across GitHub and NPM. These templates represent different approaches to bootstrapping projects. We need a structured way to classify and compare them.

## Task
1. Analyze the provided sample templates in sample.md
2. Create a comprehensive ontology that captures:
   - Core architectural patterns
   - Technology stacks and dependencies
   - Project structure and organization
   - Development workflow features
   - Deployment and infrastructure setup
   - Integration points and extensibility
   - Learning curve and complexity level

## Output Format
Provide your analysis in the following sections:

### 1. Ontology Structure
Define the main classification categories and their hierarchical relationships. Each category should include:
- Description
- Possible values/scale
- How to determine from template data
- Examples from the sample set

### 2. Feature Detection
Explain how to reliably identify:
- Primary framework/stack
- Key architectural decisions
- Infrastructure requirements
- Development tooling
- Testing approach
- Deployment targets

### 3. Complexity Metrics
Define quantifiable metrics for:
- Setup complexity
- Learning curve
- Maintenance burden
- Integration effort
- Customization flexibility

### 4. Template Patterns
Identify common patterns across templates:
- Folder structures
- Configuration approaches
- Development workflows
- Integration strategies
- Extension mechanisms

### 5. Classification Examples
Demonstrate the ontology by classifying 3-4 diverse templates from the sample set, showing how to:
- Apply the categories
- Score the metrics
- Identify patterns
- Assess suitability for different use cases

## Special Considerations
- Focus on attributes that help developers choose between templates
- Consider both technical and non-technical factors
- Account for different skill levels and team sizes
- Include maintenance and evolution aspects
- Consider how to handle template variations and forks

## Output Requirements
- Categories must be objectively determinable from template data
- Metrics should be consistently measurable
- Classifications should be useful for template comparison
- Structure should support automated analysis
- Format should enable integration with search and recommendation systems 

use your knowledhge of the most popular templates as a control, so that this sample is not oveerfit in a way that would not be useful for all starter templates in general.

put your analysis in analysis.md and put a JSON structure of the ontology in ontology.json
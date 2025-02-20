# GitHub Starter Project Scraper

This script collects data about starter/boilerplate/template projects from GitHub to help developers choose appropriate base projects for their needs.

## Purpose

The code scrapes GitHub for high-quality starter projects by:
1. Searching for repositories tagged as starters, templates, or boilerplates
2. Filtering by language, star count, and other quality metrics
3. Collecting detailed metadata and documentation
4. Organizing the data for easy consumption by an LLM

## Key Functions

### `searchStarterProjects(token, options)`

Searches GitHub's API for starter projects with configurable criteria:
- Language filtering
- Minimum star count
- Topic filtering (starter/template/boilerplate)
- Pagination handling
- Rate limit management

```javascript
const projects = await searchStarterProjects(token, {
    language: 'javascript',
    minStars: 1000,
    limit: 20
});
```

### `getRepositoryDetails(token, fullName)`

Fetches detailed information about a specific repository:
- Full repository metadata
- README content
- License information
- Other repository details

### Rate Limiting

The script implements polite API consumption:
- Adds 1-second delay between requests
- Tracks rolling window of requests per hour
- Proactively pauses when approaching limits
- Uses `MAX_REQUESTS_PER_HOUR = 4500` (below GitHub's 5000/hour limit)

## Data Organization

Output is structured as follows:
```
github-starters/
├── summary.json               # All projects basic info
└── details/                   # Detailed data for each project
    ├── owner1__repo1/
    │   ├── metadata.json     # Full project metadata
    │   └── README.md         # Project README
    └── ...
```

### Data Files

1. `summary.json`: Contains basic info about all projects:
   - Repository name and full name
   - Description
   - Stars and forks
   - Language
   - Topics
   - Last update time
   - License info
   - Template status

2. `details/[owner]__[repo]/metadata.json`: Full repository metadata
3. `details/[owner]__[repo]/README.md`: Original README content

## Usage for LLM

This data is structured to help an LLM:
1. Understand the purpose and scope of each starter project
2. Compare features and capabilities across projects
3. Match projects to user requirements
4. Provide context about project maturity and maintenance

When analyzing the data, consider:
- README content for project purpose and setup instructions
- Star count and last update time for project health
- Topics and description for project categorization
- License for usage restrictions
- Template status for ease of getting started

### Example Analysis Tasks

The collected data enables the LLM to:
1. Match language/framework requirements
2. Assess project maintenance status
3. Compare feature sets
4. Evaluate documentation quality
5. Check compatibility with user's needs
6. Identify best practices in project structure

## Future Enhancements

Potential areas for expansion:
1. Collect package.json/requirements.txt for dependency analysis
2. Add commit history for maintenance assessment
3. Include issue/PR stats for community health
4. Analyze directory structure for project organization
5. Extract example code for capability assessment

# Slot Website Requirements

## Overview
Slot's website serves two primary purposes:
1. Introduce and explain the project to new users
2. Provide an interface for exploring and discovering starter templates

## Core Pages

### Landing Page (/)

#### Purpose
- Communicate the value proposition of Slot
- Guide users through getting started with the tool
- Convert visitors into users

#### Key Functions
1. Project Introduction
   - Explain what Slot is and its core benefits
   - Highlight the integration with AI assistants
   - Demonstrate the main value propositions

2. Feature Showcase
   - Demonstrate the three core capabilities:
     - Template discovery through AI
     - Automated analysis of templates
     - Intelligent selection assistance

3. Installation Guide
   - Enable users to quickly set up Slot
   - Provide necessary configuration steps
   - Get users to a working state

### Explorer Page (/explore)

#### Purpose
- Enable efficient discovery of starter templates
- Help users find templates matching their needs
- Present template information in a digestible format

#### Key Functions

1. Template Filtering
   - Filter by technology stack
   - Filter by available features
   - Filter by quality metrics
   - Support combining multiple filters

2. Template Discovery
   - Display available templates
   - Show relevant metadata for each template
   - Provide access to template source
   - Present quality metrics

3. Data Processing
   - Load template data efficiently
   - Process filter combinations
   - Calculate template scores
   - Sort and rank results

## Core Requirements

### Data Handling
- Load and parse template data
- Process filter combinations efficiently
- Calculate quality scores
- Sort and rank templates

### Search and Filter Logic
- Combine multiple filter types
- Process technology matches
- Evaluate feature requirements
- Apply quality thresholds
- Update results in real-time

### Template Evaluation
- Score templates based on multiple factors:
  - Technology matches
  - Feature availability
  - Quality metrics
  - Documentation completeness
  - Maintenance status

### Performance Goals
- Quick initial page load
- Responsive filtering
- Smooth interactions
- Efficient data processing

### Technical Constraints
- Static site deployment
- No server-side requirements
- Modern browser support
- Mobile device support

## Design System
- Theme: Dark mode by default
- Color Scheme: Use a consistent color palette with:
  - Primary color for actions and highlights
  - Base colors for backgrounds and cards
  - Accent colors for badges and status indicators
- Typography:
  - Modern, clean font stack
  - Clear hierarchy with distinct sizes for headings and body text
  - Consistent spacing and line heights

## Pages

### Landing Page (/)

#### Header
- Logo/brand text "Slot"
- Navigation link to the explorer page
- Clean, minimal design

#### Hero Section
- Main heading: "A Place to Put Your Tokens"
- Subheading explaining the core value proposition
- Two call-to-action buttons:
  - Primary: "Get Started" (scrolls to installation)
  - Secondary: "Explore Templates" (links to explorer)

#### Features Section
- Title: "Why Slot?"
- Three feature cards in a grid layout:
  1. AI-Powered Discovery
  2. Smart Analysis
  3. Informed Decisions
- Each card should have:
  - Icon or visual element
  - Title
  - Brief description

#### Installation Section
- Clear step-by-step instructions
- Two copyable code blocks:
  1. Repository setup commands
  2. Configuration setup
- Copy buttons for each code block
- Success feedback when code is copied

#### Footer
- Simple footer with credits
- Consistent with the overall design

### Explorer Page (/explore)

#### Header
- Same as landing page for consistency
- Should indicate current page

#### Filters Panel
- Collapsible section containing all filters
- Expanded by default
- Three main filter types:

1. Technologies Filter
   - Interactive tag cloud
   - Clickable chips/badges for each technology
   - Visual feedback for selected state
   - Multiple selections allowed
   - Tags should be sorted alphabetically

2. Features Filter
   - Similar tag cloud interface
   - Features grouped by category (displayed as "category: feature")
   - Multiple selections allowed
   - Visual distinction from technology tags

3. Quality Score Filter
   - Slider input from 1 to 5
   - Clear visual scale
   - Numeric indicators for each step
   - Immediate feedback on change

#### Templates Grid
- Responsive grid layout (1/2/3 columns based on screen size)
- Template cards containing:
  - Template name
  - Quality score badge
  - Technology tags
  - "View Template" action button
- Consistent card sizing and spacing
- Clear visual hierarchy within cards

#### Loading State
- Centered spinner animation
- Visible while templates are being loaded
- Clear visual feedback during state changes

## Interaction Requirements

### Filter Behavior
- All filters should work in combination
- Real-time updates as filters change
- Clear visual feedback for active filters
- Smooth transitions between states

### Tag Selection
- Tags should be toggleable
- Selected state should be clearly visible
- Hover states for interactive elements
- Smooth transitions for state changes

### Responsive Design
- Fully responsive from mobile to desktop
- Appropriate layout changes at breakpoints
- Touch-friendly on mobile devices
- Accessible on all screen sizes

## Performance Requirements
- Fast initial page load
- Smooth filtering and sorting operations
- Efficient template data handling
- Responsive UI with no lag

## Accessibility Requirements
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- Sufficient color contrast
- Focus indicators for interactive elements

## Browser Support
- Modern browsers (last 2 versions)
- Graceful degradation for older browsers
- Consistent experience across platforms

## Build Requirements
- Static site with no server requirements
- Colocated assets and templates
- Simple build process
- Easy deployment 
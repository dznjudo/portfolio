# Case Study Template Implementation

This implementation creates interactive case study pages based on the Figma design, replacing static PDF files with rich, styled content.

## What Was Added

### 1. New Case Study Template ([src/templates/casestudy.js](src/templates/casestudy.js))

- Full-width hero section with tags, title, description, and metadata (timeline, team, role)
- Large hero image display
- Markdown content rendering with custom styling
- Feature cards with icons
- Metrics cards with custom gradients and colors
- "Next Project" navigation button
- Fully responsive design matching your portfolio's navy/slate color scheme

### 2. GraphQL Schema ([gatsby-node.js](gatsby-node.js))

- Added schema customization for optional fields (tags, timeline, team, role, heroImage, features, metrics, nextProject)
- Added page creation logic for case studies in `/case-studies/*` routes

### 3. Example Case Study ([content/featured/MobileBankingApp/index.md](content/featured/MobileBankingApp/index.md))

- Complete working example with all available fields
- Demonstrates features, metrics, and rich markdown content

## How to Create a Case Study

### 1. Create a Markdown File

Create a new file in `content/featured/YourProject/index.md`:

```markdown
---
date: '5'
title: 'Your Project Title'
description: 'A brief 1-2 sentence description of your project'
slug: '/case-studies/your-project-name'
cover: './hero-image.jpg'
company: 'Company Name'
tags:
  - UI/UX Design
  - Web Development
  - Product Design
timeline: '8 weeks'
team: '3 Designers, 2 Developers'
role: 'Lead Designer'
tech:
  - Figma
  - React
  - TypeScript
features:
  - title: 'Feature Name'
    description: 'Brief description of this key feature'
  - title: 'Another Feature'
    description: 'Another description'
metrics:
  - value: '+50%'
    label: 'Improvement metric'
    gradient: 'linear-gradient(160deg, rgba(87, 203, 255, 0.1) 0%, rgba(87, 203, 255, 0.05) 100%)'
    borderColor: 'rgba(87, 203, 255, 0.3)'
    textColor: '#57cbff'
---

## Your Section Title

Your markdown content here...

### Subsection

More content with **bold** and _italic_ text.
```

### 2. Add a Hero Image (Optional)

Place an image file (e.g., `hero-image.jpg`) in the same directory as your markdown file. The template will automatically display it below the hero section.

If you don't want a hero image, simply remove the `cover` field from the frontmatter.

### 3. Customize Metrics Colors

Three color presets are available:

**Blue:**

```yaml
gradient: 'linear-gradient(160deg, rgba(87, 203, 255, 0.1) 0%, rgba(87, 203, 255, 0.05) 100%)'
borderColor: 'rgba(87, 203, 255, 0.3)'
textColor: '#57cbff'
```

**Green:**

```yaml
gradient: 'linear-gradient(160deg, rgba(100, 255, 218, 0.1) 0%, rgba(100, 255, 218, 0.05) 100%)'
borderColor: 'rgba(100, 255, 218, 0.3)'
textColor: '#64ffda'
```

**Pink:**

```yaml
gradient: 'linear-gradient(160deg, rgba(245, 125, 255, 0.1) 0%, rgba(245, 125, 255, 0.05) 100%)'
borderColor: 'rgba(245, 125, 255, 0.3)'
textColor: '#f57dff'
```

## Updating Featured Projects to Use Case Studies

To link your featured projects to case study pages instead of PDFs:

### Option 1: Update Existing Projects

Edit your featured project markdown files (e.g., `content/featured/Portal/index.md`):

**Before:**

```yaml
external: '/portal.pdf'
```

**After:**

```yaml
external: '/case-studies/portal' # Link to case study page
slug: '/case-studies/portal' # Add this field
```

Then add the case study content (features, metrics, etc.) to the same file.

### Option 2: Keep PDFs, Add Case Studies

You can keep your PDFs and add new case studies alongside them. Just create new case study files with unique slugs.

## Available Fields

### Required

- `title`: Project title
- `slug`: URL path (e.g., `/case-studies/project-name`)

### Optional

- `description`: Hero description
- `tags`: Array of tags (displayed as pills)
- `timeline`: Project duration
- `team`: Team composition
- `role`: Your role
- `cover`: Hero image file path
- `company`: Company/client name
- `tech`: Array of technologies (for project cards)
- `features`: Array of feature objects with `title` and `description`
- `metrics`: Array of metric objects with `value`, `label`, and optional colors
- `nextProject`: Object with `title` and `url` for navigation

## Testing

View your case study by:

1. Running `npm run develop`
2. Navigating to the slug URL (e.g., `http://localhost:8000/case-studies/mobile-banking-app`)

## Tips

- Keep descriptions concise (1-2 sentences)
- Use high-quality hero images (1400px+ wide recommended)
- Limit metrics to 3-4 for best visual impact
- Write detailed content in markdown for sections like "The Challenge", "Research & Discovery", "The Solution"
- Use H2 (`##`) for main sections in markdown content
- The template is backwards compatible - simple case studies without advanced fields will still work

## File Structure

```
content/
  featured/
    YourProject/
      index.md          # Case study content
      hero-image.jpg    # Hero image
      image-1.jpg       # Other images referenced in markdown
```

## Next Steps

1. Add hero images to your case study directories
2. Update existing featured projects to link to case study pages
3. Customize the template styling in [src/templates/casestudy.js](src/templates/casestudy.js) if needed
4. Add more case studies!

## Example Case Study

See [content/featured/MobileBankingApp/index.md](content/featured/MobileBankingApp/index.md) for a complete working example.

Built at: `/case-studies/mobile-banking-app/`

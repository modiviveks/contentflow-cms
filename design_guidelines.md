# Content Management System - Design Guidelines

## Design Approach
**Selected Approach:** Hybrid - Drawing from Notion's clean content-focus + Linear's modern typography + WordPress's familiar patterns

**Core Principle:** Create a professional, portfolio-worthy CMS that balances powerful functionality with visual sophistication. The design should feel polished enough to showcase in interviews while remaining practical for content management.

## Color Palette

**Dark Mode (Primary):**
- Background: 222 15% 10% (deep charcoal)
- Surface: 222 12% 14% (elevated panels)
- Border: 222 10% 24% (subtle dividers)
- Primary: 217 91% 60% (vibrant blue for CTAs)
- Text: 0 0% 98% (primary text)
- Text Secondary: 0 0% 70% (muted text)
- Success: 142 71% 45% (green for publish actions)
- Accent: 271 76% 53% (purple for highlights)

**Light Mode:**
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Border: 220 13% 91%
- Primary: 217 91% 50%
- Text: 222 47% 11%

## Typography

**Font Stack:**
- Headings: 'Inter', system-ui, sans-serif (weights: 600, 700)
- Body: 'Inter', system-ui, sans-serif (weights: 400, 500)
- Code/Mono: 'JetBrains Mono', monospace

**Scale:**
- H1: text-3xl (dashboard headings)
- H2: text-2xl (section titles)
- H3: text-xl (card headers)
- Body: text-base
- Small: text-sm (metadata, timestamps)

## Layout System

**Spacing Units:** 2, 4, 6, 8, 12, 16 (e.g., p-4, gap-6, mb-8)

**Grid Structure:**
- Sidebar: 280px fixed width (navigation)
- Main content: flex-1 with max-w-7xl container
- Content editor: max-w-4xl (optimal reading/writing width)

## Component Library

**Navigation:**
- Collapsible sidebar with sections: Dashboard, Content, Media, Users, Settings
- Top bar: Search, notifications, user menu
- Breadcrumbs for deep navigation

**Dashboard Cards:**
- Stats cards: Grid of 4 (2x2 on mobile) showing post count, views, drafts, scheduled
- Recent activity feed with avatars and timestamps
- Quick actions panel with icon buttons

**Content Listing:**
- Table view with sortable columns: Title, Author, Status, Date, Actions
- Card/grid view toggle option
- Filters: Status (published, draft, scheduled), Author, Date range
- Bulk actions toolbar when items selected

**Editor Interface:**
- Full-width toolbar with formatting options
- Clean writing area with max-w-4xl
- Right sidebar: Post settings (status, visibility, categories, tags, featured image)
- Auto-save indicator
- Preview/Publish buttons in top-right

**Forms & Inputs:**
- Consistent input styling with focus states
- Labels above inputs (not floating)
- Helper text below fields
- Validation states with inline error messages
- Toggle switches for boolean settings

**Modals & Overlays:**
- Backdrop blur with dark overlay
- Centered modal with max-w-2xl
- Close button top-right
- Actions aligned right in footer

## Images

**Hero Section:** None - CMS dashboards prioritize functionality over marketing visuals

**Key Images to Include:**
1. **Empty States:** Illustrations for "No posts yet," "No media," etc. - place in content areas when data is empty
2. **User Avatars:** Throughout the UI for author attribution (32px-48px circles)
3. **Featured Images:** Thumbnail previews in content listings (16:9 aspect ratio, 120px-200px wide)
4. **Media Library:** Grid of uploaded images with hover overlays showing actions

## Key Interactions

**Micro-interactions:**
- Hover states on sidebar items (subtle background change)
- Button press effects (scale-95 active state)
- Loading skeletons for content fetching
- Toast notifications for success/error states (top-right)

**Content States:**
- Draft badge: subtle gray
- Published badge: green
- Scheduled badge: blue with clock icon

## Responsive Breakpoints

- Mobile (< 768px): Sidebar becomes drawer, single column layouts
- Tablet (768px-1024px): Sidebar visible, 2-column grids
- Desktop (> 1024px): Full layout with 3-column grids where appropriate

## Authentication Pages

**Login/Register:**
- Centered card design (max-w-md)
- Logo at top
- Clean form with social login options
- "Remember me" and "Forgot password" links
- Illustration or gradient background (not distracting)

This CMS design creates a professional, modern interface that demonstrates full-stack capabilities while remaining intuitive for content management workflows.
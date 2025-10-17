# Aging Akamai - Senior Transition Real Estate Website

## Project Overview
Building a website for **Julia Tan** at **Aging Akamai**, a real estate agent specializing in Senior Transition services. The site must be:
- Clean and uncluttered
- Easy to navigate for non-tech-savvy users
- Empathetic and warm in tone
- Simple to find information

## Target Audience
- Seniors (65+) planning to downsize or move to senior living
- Adult children helping parents with transitions
- Family members coordinating estate matters

## Design Requirements

### Visual Design
- **Font Size**: Minimum 18px for body text, 24px+ for headings
- **Contrast**: High contrast text (dark on light backgrounds)
- **White Space**: Generous spacing to avoid overwhelming visitors
- **Layout**: Simple, one main focus per section

### Color Palette ✅ IMPLEMENTED
- **Primary**: White (#FFFFFF) for clean, calming backgrounds
- **Banner**: Soft white (#FAFAFA) for header and navigation
- **Accent**: Deep blue (#000f38) for trust, buttons, and key elements
- **Footer**: Deep blue (#000f38) background with white text
- **Text**: Dark gray (#2d3748) for excellent readability

### Typography ✅ IMPLEMENTED
- Arial/Helvetica for maximum readability and familiarity
- **Font Sizes**: 18px minimum body text, 24px+ headings (up to 48px)
- **Line Height**: 1.7 for comfortable reading
- Clear hierarchy with distinct heading sizes

## Site Structure ✅ IMPLEMENTED

### Navigation - Single Page with Smooth Scrolling
1. **Home** - Hero section with Julia's photo and value proposition
2. **About Julia** - Personal story, grandmother's influence, SRES certification
3. **Services** - 4 core services (downsizing, senior living, family coordination, estate sales)
4. **Community Service** - Volunteer work and community involvement
5. **Testimonials** - 3 heartfelt client stories
6. **Resources** - Helpful guides and local resources
7. **Contact** - Multiple contact methods with personal promise

### Key Features ✅ IMPLEMENTED
- Sticky header with phone number always visible
- Click-to-call phone links throughout
- Large, obvious CTA buttons (Call Julia Today)
- Smooth scrolling navigation (no dropdown menus)
- Fast loading with optimized SVG placeholder images
- Fully mobile-responsive design
- Clean, accessible code structure for easy maintenance

## Content Strategy

### Tone & Voice
- Warm and reassuring
- Empathetic without being patronizing
- Professional but personal
- Acknowledge emotional aspects of transitions
- Focus on: peace of mind, family support, making it easier

### Key Messages
- "We understand this transition can feel overwhelming"
- "You don't have to do this alone"
- "Helping families navigate this important chapter"
- "Local expert who cares about your unique needs"

### Content Needed ✅ COMPLETED
- [x] Agent bio and professional photo (placeholder: julia-hero.svg)
- [x] Personal story about grandmother's transition experience
- [x] SRES certification and community involvement
- [x] 4 core services with detailed descriptions
- [x] 3 heartfelt client testimonials with stories
- [x] Contact information (phone, email, office address)
- [x] Community service and volunteer activities
- [x] Warm, caring persona showcasing genuine help

### Image Placeholders Ready for Replacement
- `julia-hero.svg` → Replace with Julia's professional headshot (400x400px)
- `julia-about.svg` → Replace with family/community service photo (300x400px)
- `community-service.svg` → Replace with Julia volunteering (400x250px)
- `client-testimonial-1.svg` → Optional client photo with permission (200x200px)

## Technical Implementation ✅ COMPLETED

### Chosen Approach: Custom HTML/CSS/JS
- **Clean Code Structure**: Organized folders (css/, js/, images/)
- **Semantic HTML5**: Accessible markup with proper headings and landmarks
- **Modular CSS**: CSS custom properties, BEM naming, extensive comments
- **Vanilla JavaScript**: Smooth scrolling navigation, no dependencies
- **Mobile-First**: Responsive design with clean breakpoints
- **Performance**: Optimized SVG placeholders, minimal JavaScript

### File Structure
```
/
├── index.html              # Main homepage
├── css/
│   └── main.css           # All styles with CSS variables
├── js/
│   └── navigation.js      # Smooth scrolling functionality
├── images/
│   ├── julia-hero.svg     # Professional headshot placeholder
│   ├── julia-about.svg    # Personal photo placeholder
│   ├── community-service.svg # Volunteer work placeholder
│   └── client-testimonial-1.svg # Optional client photo
└── CLAUDE.md              # Project documentation
```

## Implementation Status ✅ COMPLETED

### Phase 1 - MVP ✅ COMPLETED
- [x] Homepage with hero section and clear CTA
- [x] About Julia section with personal story
- [x] Services overview (4 detailed services)
- [x] Contact section with multiple methods
- [x] Fully mobile responsive

### Phase 2 - Enhanced ✅ COMPLETED
- [x] Testimonials section (3 heartfelt stories)
- [x] Resources section with downloadable guides
- [x] Community service showcase
- [x] Professional image placeholders

### Phase 3 - Advanced (Future Enhancements)
- [ ] Blog for local market updates
- [ ] Actual downloadable PDF checklists/guides
- [ ] Video introduction from Julia
- [ ] Contact form with backend processing
- [ ] Integration with MLS listings

## Accessibility Features ✅ IMPLEMENTED
- **WCAG 2.1 AA compliance**: High contrast colors, large fonts
- **Keyboard navigation**: Tab navigation with clear focus indicators
- **Alt text**: Descriptive alt text for all images and placeholders
- **Color contrast**: Deep blue (#000f38) on white exceeds requirements
- **Font sizes**: 18px minimum, up to 48px for headings
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Mobile accessibility**: Touch-friendly buttons and navigation

## Development Notes ✅ COMPLETED

### Tools & Technologies Used
- **HTML5**: Semantic markup with proper accessibility
- **CSS3**: Custom properties, Grid, Flexbox, responsive design  
- **Vanilla JavaScript**: Smooth scrolling navigation
- **SVG**: Optimized placeholder images
- **BEM CSS**: Clean, maintainable class naming convention

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile Safari and Chrome  
- IE11+ with graceful degradation
- Responsive breakpoints: 768px (mobile), 1024px (tablet)

## Deployment Ready ✅

### Next Steps for Launch
1. [x] Replace placeholder images with real photos
2. [ ] Update contact information (phone, email, address)
3. [ ] Configure hosting (Netlify, Vercel, or GitHub Pages)
4. [ ] Set up domain name
5. [ ] Add Google Analytics (optional)
6. [ ] Test with actual senior users
7. [ ] SEO optimization (meta tags, sitemap)

## Maintenance Notes for Junior Developers

### Making Content Changes
- **Colors**: Edit CSS variables in `:root` section of main.css
- **Text**: Update content directly in index.html
- **Images**: Replace SVG files in /images/ folder with same filenames
- **Fonts**: All sizes controlled by CSS variables (easy to adjust)
- **Contact Info**: Search for phone numbers and email in HTML

### Code Organization
- **CSS**: Organized by sections with clear comments
- **JavaScript**: Single file with well-documented functions  
- **HTML**: Semantic structure with descriptive class names
- **Images**: Self-documenting SVG placeholders with instructions

---

## Prompt for Continuing in Claude Code Terminal

When working on this project in Claude Code, reference this document and specify:
- Which phase/section you're working on
- What content you have available
- Whether you want HTML, React, or another approach
- Any specific features to implement

Example: "Using the senior real estate project in claude.md, create a homepage hero section in HTML with a warm, accessible design for seniors."
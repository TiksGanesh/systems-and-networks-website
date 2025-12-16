# Component Architecture - Reusable Header & Footer

## Overview
The header and footer have been refactored into reusable component files to eliminate code duplication across all HTML pages and simplify maintenance.

## Architecture

### Component Files

#### `includes/header.html`
- **Purpose**: Centralized header markup used across all pages
- **Contains**: 
  - Logo and branding
  - Navigation menu with links (Home, About, Services, Why Choose Us, Contact)
  - Mobile menu toggle button (hamburger menu)
- **Size**: 34 lines
- **Location**: `/includes/header.html`

#### `includes/footer.html`
- **Purpose**: Centralized footer markup used across all pages
- **Contains**:
  - Quick Links section
  - Our Services section
  - Get in Touch section with contact info and social links
  - Copyright notice
- **Size**: 68 lines
- **Location**: `/includes/footer.html`

### JavaScript Loader

#### `js/header-footer.js` (Enhanced)
- **Purpose**: Dynamically loads header and footer components at runtime
- **Key Function**: `loadHeaderFooterComponents()`
  - Fetches `./includes/header.html` and injects into `#header-container`
  - Fetches `./includes/footer.html` and injects into `#footer-container`
  - Initializes all header/footer functionality after components load
- **Functionality**:
  - Mobile menu toggle with click handlers
  - Close menu on link click
  - Close menu on outside click
  - Close menu on Escape key
  - Responsive behavior on window resize
  - Active nav link highlighting
  - Smooth scroll support
  - Sticky header behavior

### HTML Page Structure

All HTML pages (index.html, about.html, services.html, clients.html, contact.html) now follow this pattern:

```html
<body>

<!-- Header Container (loaded dynamically) -->
<div id="header-container"></div>

<!-- MAIN CONTENT -->
<main>
    <!-- Page-specific content -->
</main>

<!-- Footer Container (loaded dynamically) -->
<div id="footer-container"></div>

<!-- JavaScript -->
<script src="js/header-footer.js"></script>
<script src="js/animations.js"></script>
<script src="js/main.js"></script>

</body>
```

## Benefits

1. **Single Source of Truth**: Header and footer markup exist in one place
2. **Reduced Duplication**: 100+ lines of header/footer code per page eliminated
3. **Easier Maintenance**: Update navigation or footer links once, affects all pages
4. **Scalability**: Easy to add new pages - just include container divs and load script
5. **Consistency**: Guaranteed identical header/footer across all pages
6. **Performance**: Reusable components can be cached by browsers

## Updated Files

### Refactored HTML Pages (5 files)
- `index.html` - Homepage
- `about.html` - About page
- `services.html` - Services listing
- `clients.html` - Client testimonials
- `contact.html` - Contact information

**Changes**: Replaced full header/footer markup with container divs

### Component Files (Created)
- `includes/header.html` - Header component
- `includes/footer.html` - Footer component

### JavaScript (Enhanced)
- `js/header-footer.js` - Added `loadHeaderFooterComponents()` function

## How to Add New Pages

To add a new page to the site:

1. Create new HTML file (e.g., `solutions.html`)
2. Add header and footer containers:
   ```html
   <div id="header-container"></div>
   <!-- Main content -->
   <div id="footer-container"></div>
   ```
3. Include the JavaScript files:
   ```html
   <script src="js/header-footer.js"></script>
   <script src="js/animations.js"></script>
   <script src="js/main.js"></script>
   ```
4. Components load automatically!

## Browser Compatibility

- Works in all modern browsers (fetch API support required)
- Falls back gracefully if components fail to load
- No external dependencies required

## CSS Styling

All styling for header and footer remains in:
- `css/styles.css` - Main stylesheet with all component styles
- `css/responsive.css` - Responsive breakpoints
- `css/components.css` - Component-specific styles

Styling is applied to the components after they load via the fetch API.

## Notes

- The fetch API requires components to be served from the same origin
- Works perfectly with Apache shared hosting
- No build process required (pure HTML/CSS/JavaScript)
- Components are loaded on `DOMContentLoaded` event
- Header/footer functionality initializes after successful component load


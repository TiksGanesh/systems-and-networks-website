# Header & Footer Implementation Guide

## Overview
A fully responsive, professional header and footer system for Systems & Networks website with mobile-friendly navigation and all required information.

## Files Created

### 1. **js/header-footer.js**
Complete JavaScript functionality for header and footer:
- Mobile menu toggle with smooth animation
- Close menu on link click or outside click
- ESC key support for accessibility
- Hamburger icon animation (3-line to X)
- Sticky header on scroll
- Active navigation link detection
- Window resize handling
- Smooth scroll support

### 2. **HEADER_FOOTER_TEMPLATE.html**
Reference file showing complete HTML structure (copy to other pages)

### 3. **CSS Updates in styles.css**
Comprehensive styling:
- Professional header with sticky positioning
- Responsive navigation menu
- Mobile hamburger with smooth animations
- Professional footer with 4-column grid
- Social media integration (LinkedIn)
- Contact information display
- Responsive breakpoints

## How to Use

### Step 1: Copy HTML to All Pages

The header and footer HTML must be added to each page. Here's the structure:

**Copy this to the top of each `<body>` tag:**

```html
<header class="main-header">
    <div class="container header-container">
        <div class="header-logo">
            <a href="index.html" class="logo-link">
                <span class="logo-text">Systems & Networks</span>
            </a>
        </div>
        
        <nav class="main-nav">
            <ul class="nav-menu" id="navMenu">
                <li><a href="index.html" class="nav-link">Home</a></li>
                <li><a href="about.html" class="nav-link">About</a></li>
                <li><a href="services.html" class="nav-link">Services</a></li>
                <li><a href="clients.html" class="nav-link">Why Choose Us</a></li>
                <li><a href="contact.html" class="nav-link">Contact</a></li>
            </ul>
        </nav>
        
        <button class="mobile-menu-toggle" id="menuToggle" aria-label="Toggle menu" aria-expanded="false">
            <span class="hamburger">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </span>
        </button>
    </div>
</header>
```

**Copy this to the bottom of each `<body>` tag (before closing tag):**

```html
<footer class="main-footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-section">
                <h4>Systems & Networks</h4>
                <p class="footer-description">
                    25+ years of professional IT services, infrastructure solutions, and consultation 
                    for businesses of all sizes.
                </p>
            </div>
            
            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul class="footer-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="clients.html">Our Clients</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h4>Our Services</h4>
                <ul class="footer-links">
                    <li><a href="#">IT Infrastructure</a></li>
                    <li><a href="#">Networking Solutions</a></li>
                    <li><a href="#">Server & Cloud</a></li>
                    <li><a href="#">IT Rentals</a></li>
                    <li><a href="#">Professional Email</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h4>Get in Touch</h4>
                <ul class="contact-info">
                    <li>
                        <span class="contact-label">Email:</span>
                        <a href="mailto:info@systemsandnetworks.com">info@systemsandnetworks.com</a>
                    </li>
                    <li>
                        <span class="contact-label">Phone:</span>
                        <a href="tel:+1234567890">+1 (234) 567-890</a>
                    </li>
                    <li>
                        <span class="contact-label">Address:</span>
                        <span>Your City, Your State 12345</span>
                    </li>
                </ul>
                
                <div class="social-links">
                    <a href="https://www.linkedin.com/company/systems-networks/" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; 2025 Systems & Networks. All rights reserved.</p>
        </div>
    </div>
</footer>
```

### Step 2: Include JavaScript

Add this before closing `</body>` tag on all pages:

```html
<script src="js/header-footer.js"></script>
<script src="js/main.js"></script>
```

### Step 3: Include CSS

Already included in `<head>`:
```html
<link rel="stylesheet" href="css/styles.css">
```

## Features Implemented

### Header Features ✅
- **Company Name**: "Systems & Networks" with logo link
- **Navigation Links**: Home, About, Services, Why Choose Us, Contact
- **Mobile Hamburger Menu**: Animated 3-line to X transition
- **Sticky Positioning**: Header stays visible on scroll
- **Active Link Indicator**: Underline for desktop, background highlight for mobile
- **Responsive**: Hamburger menu appears on screens < 768px
- **Accessibility**: ARIA labels, keyboard support (ESC key), focus states

### Footer Features ✅
- **Company Name & Description**: 25+ years tagline
- **Quick Links Section**: Navigation links
- **Services Section**: Key service offerings
- **Contact Information**: Email, phone, address placeholders
- **Social Media**: LinkedIn link with SVG icon
- **Copyright Notice**: 2025 Systems & Networks
- **Responsive Layout**: 4 columns on desktop, 1 column on mobile
- **Professional Styling**: Dark blue background matching brand

## JavaScript Functionality

### Included Functions:
1. `initMobileMenu()` - Hamburger toggle and menu management
2. `handleWindowResize()` - Close menu on screen resize
3. `setActiveNavLink()` - Highlight current page in navigation
4. `initSmoothScroll()` - Smooth scroll for anchor links
5. `initStickyHeader()` - Add shadow on scroll

### Features:
- Click outside to close menu
- ESC key to close menu
- Smooth animations on all interactions
- Accessibility support (ARIA attributes)
- Responsive hamburger animation

## Customization Guide

### Change Company Information
Update in both header and footer:
- Company name: "Systems & Networks"
- Email: "info@systemsandnetworks.com"
- Phone: "+1 (234) 567-890"
- Address: "Your City, Your State 12345"
- LinkedIn URL: Replace with actual profile

### Change Colors
Edit CSS variables in `css/styles.css`:
```css
--primary-color: #0066CC;        /* Main blue */
--secondary-color: #004080;      /* Footer dark blue */
--text-dark: #333333;            /* Text color */
--white: #FFFFFF;                /* Background */
```

### Add Logo Image
Replace text logo with image:
```html
<a href="index.html" class="logo-link">
    <img src="images/icons/logo.png" alt="Systems & Networks Logo" class="logo-img">
</a>
```

### Add More Navigation Items
Add `<li>` to the nav-menu:
```html
<li><a href="careers.html" class="nav-link">Careers</a></li>
```

### Add More Social Media Links
Add to social-links in footer:
```html
<a href="https://www.twitter.com/..." target="_blank" class="social-link" aria-label="Twitter">
    <!-- SVG icon -->
</a>
```

## Browser Support
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Mobile Breakpoints
- **Mobile**: < 576px
- **Tablet**: 576px - 991px
- **Desktop**: 992px+
- **Menu toggle**: Appears on screens < 768px

## Accessibility Features
- ✅ Semantic HTML
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support (Tab, Enter, ESC)
- ✅ Focus indicators with outline
- ✅ Proper heading hierarchy
- ✅ Color contrast compliance
- ✅ Screen reader friendly

## Performance Notes
- Vanilla JavaScript (no dependencies)
- CSS uses CSS variables for efficient theming
- Smooth animations at 60fps
- Mobile-optimized
- Minimal JavaScript execution

## Testing Checklist
- [ ] Header sticky on scroll
- [ ] Mobile menu opens/closes
- [ ] Menu closes on link click
- [ ] Menu closes on outside click
- [ ] Menu closes on ESC key
- [ ] Active navigation link highlights
- [ ] Hamburger icon animates correctly
- [ ] Footer displays 4 columns on desktop
- [ ] Footer displays 1 column on mobile
- [ ] All links work correctly
- [ ] LinkedIn link opens in new tab
- [ ] Keyboard navigation works (Tab, ESC)
- [ ] Tested on multiple devices

## File Structure
```
css/
├── styles.css           (Main styles + header/footer)

js/
├── header-footer.js     (Header/footer functionality)
├── main.js             (Page-specific JS)

All HTML pages:
├── index.html
├── about.html
├── services.html
├── clients.html
├── contact.html
└── (others)

Reference:
└── HEADER_FOOTER_TEMPLATE.html
```

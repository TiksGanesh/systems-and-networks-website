# Project Folder Structure

```
systems-and-networks-website/
│
├── .github/
│   └── copilot-instructions.md    # GitHub Copilot workspace instructions
│
├── css/
│   ├── styles.css                 # Main stylesheet
│   ├── responsive.css             # Media queries (optional)
│   └── components.css             # Reusable components (optional)
│
├── js/
│   ├── main.js                    # Main JavaScript file
│   ├── navigation.js              # Mobile menu, smooth scroll (optional)
│   └── animations.js              # Scroll animations (optional)
│
├── images/
│   ├── icons/                     # Favicons, social icons
│   │   ├── favicon.png
│   │   └── logo.png
│   ├── gallery/                   # Service images, team photos
│   │   └── (image files)
│   ├── hero-bg.jpg                # Hero section background
│   └── (other images)
│
├── fonts/                         # Custom fonts (if needed)
│   └── (font files)
│
├── docs/                          # Documentation files
│   ├── DESIGN_SYSTEM.md          # Design system reference
│   ├── PROJECT_STRUCTURE.md      # This file - project structure
│   ├── HEADER_FOOTER_GUIDE.md    # Header/footer implementation guide
│   └── HEADER_FOOTER_SUMMARY.md  # Header/footer quick summary
│
├── .htaccess                      # Apache configuration
├── index.html                     # Homepage
├── about.html                     # About page (optional)
├── services.html                  # Services page (optional)
├── contact.html                   # Contact page (optional)
├── 404.html                       # Error page (optional)
├── robots.txt                     # SEO directives
├── sitemap.xml                    # SEO sitemap
├── .cursorrules                   # Cursor IDE instructions
└── README.md                      # Project documentation
```

## Folder Purposes

### `/css/`
- **styles.css**: Main stylesheet with all CSS
- Can be split into multiple files for better organization

### `/js/`
- **main.js**: Core JavaScript functionality
- Can be modular with separate files for different features

### `/images/`
- **icons/**: Logos, favicons, UI icons
- **gallery/**: Content images, service photos
- Optimized WebP images with JPG/PNG fallbacks

### `/fonts/`
- Custom web fonts (if not using Google Fonts or system fonts)

### `/docs/`
- Documentation files for development reference
- Design system specifications
- Implementation guides for components
- Architecture and structure information

### Root Files
- **index.html**: Homepage (required)
- **.htaccess**: Apache server configuration
- **robots.txt**: Search engine crawling rules
- **sitemap.xml**: Site structure for SEO

## Deployment Notes

When deploying to Linux shared hosting:
1. Upload all files via FTP/SFTP
2. Ensure `.htaccess` is uploaded
3. Set correct file permissions (644 for files, 755 for directories)
4. Test HTTPS redirect and compression
5. Verify mobile responsiveness

## Best Practices

- Keep file names lowercase with hyphens
- Optimize all images before upload
- Minify CSS/JS for production (optional)
- Use semantic HTML for better SEO
- Test on multiple devices and browsers

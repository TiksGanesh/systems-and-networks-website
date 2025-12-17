# Systems & Networks Website

A professional, responsive corporate website for Systems & Networks IT services company built with pure HTML5, CSS3, and Vanilla JavaScript.

## 🚀 Features

- **Responsive Design** - Mobile-first approach, optimized for all devices
- **Professional Styling** - Modern color palette and typography system
- **Header & Footer Components** - Sticky header with mobile navigation and professional footer
- **SEO Optimized** - Includes robots.txt, sitemap.xml, and meta tags
- **Accessibility** - WCAG 2.1 compliant with ARIA labels and keyboard support
- **Apache Ready** - .htaccess configuration for Linux shared hosting
- **No Dependencies** - Pure HTML, CSS, JavaScript (no frameworks or libraries)

## 📋 Project Structure

```
systems-and-networks-website/
├── css/                    # Stylesheets
├── js/                     # JavaScript files
├── images/                 # Images and icons
├── fonts/                  # Custom fonts
├── docs/                   # Documentation files
├── index.html             # Homepage
├── about.html             # About page
├── services.html          # Services page
├── contact.html           # Contact page
├── .htaccess              # Apache configuration
├── robots.txt             # SEO directives
├── sitemap.xml            # XML sitemap
└── README.md              # This file
```

## 📚 Documentation

All documentation files are located in the `docs/` directory:

| Document | Description |
|----------|-------------|
| [**DESIGN_SYSTEM.md**](docs/DESIGN_SYSTEM.md) | Complete design system reference including color palette, typography, spacing, components, and responsive breakpoints. Guidelines for maintaining visual consistency across the website. |
| [**PROJECT_STRUCTURE.md**](docs/PROJECT_STRUCTURE.md) | Detailed explanation of the project folder structure, file purposes, and deployment notes for Linux shared hosting. |
| [**HEADER_FOOTER_GUIDE.md**](docs/HEADER_FOOTER_GUIDE.md) | Comprehensive implementation guide for the header and footer components with code examples, customization instructions, and troubleshooting. |
| [**HEADER_FOOTER_SUMMARY.md**](docs/HEADER_FOOTER_SUMMARY.md) | Quick reference summary of header and footer features, styling, and functionality. |

## 🎨 Design System

The website uses a comprehensive design system with:

- **Color Palette**: Primary Blue (#0066CC), Secondary Dark Blue (#004080), Accent Cyan (#00AAFF)
- **Typography**: System fonts (Segoe UI, Roboto, etc.) with optional Google Fonts (Inter)
- **Spacing Scale**: 8-step scale from 4px to 64px
- **Responsive Breakpoints**: Mobile (< 576px), Tablet (768px-991px), Desktop (992px+)
- **Components**: Buttons, cards, forms, navigation menu, footer grid
- **Animations**: Smooth transitions at varying speeds (0.15s, 0.3s, 0.6s)

For details, see [DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md).

## 📱 Header & Footer

The website features a professional header and footer system:

### Header
- Sticky positioning with shadow on scroll
- Company name and navigation menu
- Mobile hamburger menu (< 768px)
- Active link indicator
- Accessibility-first design (ARIA labels, keyboard support)

### Footer
- 4-column grid layout (desktop), 1-column (mobile)
- Company info and description
- Quick links and services sections
- Contact information (email, phone, address)
- LinkedIn social link
- Copyright notice

For detailed implementation info, see [HEADER_FOOTER_GUIDE.md](docs/HEADER_FOOTER_GUIDE.md) or [HEADER_FOOTER_SUMMARY.md](docs/HEADER_FOOTER_SUMMARY.md).

## 🔧 Technology Stack

- **HTML5** - Semantic markup for SEO
- **CSS3** - Custom properties (variables), Grid, Flexbox
- **Vanilla JavaScript ES6+** - Modern JS without dependencies
- **Apache** - Linux shared hosting configuration with .htaccess

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd systems-and-networks-website
   ```

2. **Open in browser**
   - Open `index.html` in your web browser
   - Or use a local server: `python -m http.server 8000`

3. **Customize**
   - Update company information in HTML pages
   - Modify colors in `css/styles.css` using CSS variables
   - Add your logo to `images/icons/logo.png`
   - Update links and content as needed

## 📧 Contact Information

Current contact details:
- **Email**: info@sysandnet.com
- **Phone**: +91 96232 68939
- **LinkedIn**: https://www.linkedin.com/company/systems-networks/
- **Website**: https://www.sysandnet.com

## 📝 Pages Included

- **index.html** - Homepage with hero section
- **about.html** - Company information and background
- **services.html** - Services offered by the company
- **contact.html** - Contact information and inquiry methods
- **404.html** - Custom error page

## 🔐 Security & Performance

- HTTPS enforcement with 301 redirect
- GZIP compression for CSS and JavaScript
- Browser caching configuration by file type
- Security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection)
- Directory listing prevention

## 🔍 SEO & Crawlability Notes

- The header and footer are loaded dynamically via JavaScript (`fetch` in `js/header-footer.js`). Some crawlers may not execute JS or may not wait for network requests, so navigation links in the header/footer might not be discovered during a basic crawl.
- Mitigations:
   - Keep `sitemap.xml` up to date with all key pages.
   - Include important internal links within static page content (e.g., homepage links to Services and Contact).
   - Consider minimal static navigation on high-priority pages if crawlability is essential.
   - Ensure unique page `<title>` and meta descriptions; allow access to CSS/JS in `robots.txt`.
   - Use `defer` for scripts and keep assets lightweight to improve render speed for JS-enabled crawlers.

Implementation details:
- Header/footer loading validates `response.ok` and fetches both components in parallel to avoid injecting error pages and to reduce load time.
- If JS fails or resources are unavailable, containers remain empty and the rest of the page remains usable.

## 🌐 Deployment

To deploy on Linux shared hosting:

1. Upload files via FTP/SFTP maintaining folder structure
2. Ensure `.htaccess` is in the root directory
3. Set file permissions: 644 for files, 755 for directories
4. Verify HTTPS redirect is working
5. Test on multiple devices and browsers

See [PROJECT_STRUCTURE.md](docs/PROJECT_STRUCTURE.md) for detailed deployment notes.

### Deployment Checklist (Linux Shared Hosting)
- Place all site files at the web root (public_html or htdocs).
- Include `.htaccess` with:
   - HTTPS redirect (excludes localhost)
   - Disable directory listing (`Options -Indexes`)
   - Caching (`mod_expires`) and compression (`mod_deflate`) directives
   - Security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy, HSTS)
- Confirm `robots.txt` and `sitemap.xml` exist and reflect live URLs.
- Validate unique titles/meta descriptions per page.
- Ensure JS and CSS paths are correct after upload.
- Verify header/footer load via JS on the host (or inline minimal nav for critical pages).
- Check file permissions: 644 files, 755 directories.
- Test HTTPS redirect and non-indexable directories.
- Run through pages on mobile and desktop; verify performance.

## ✅ Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is part of Systems & Networks corporate website.

---

**For development guidance, see [copilot-instructions.md](.github/copilot-instructions.md)**

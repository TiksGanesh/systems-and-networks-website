/**
 * Header & Footer Functionality
 * Mobile menu toggle, responsive behavior, and dynamic component loading
 */

document.addEventListener('DOMContentLoaded', function() {
    loadHeaderFooterComponents();
});

/**
 * Load header and footer from separate component files
 */
async function loadHeaderFooterComponents() {
    try {
        const headerContainer = document.getElementById('header-container');
        const footerContainer = document.getElementById('footer-container');

        // Prepare parallel fetches if containers exist
        const headerPromise = headerContainer
            ? fetch('./includes/header.html').then(async (res) => {
                if (!res.ok) {
                    console.error('Failed to load header:', res.status, res.statusText);
                    return null;
                }
                return res.text();
            }).catch((err) => {
                console.error('Header fetch error:', err);
                return null;
            })
            : Promise.resolve(null);

        const footerPromise = footerContainer
            ? fetch('./includes/footer.html').then(async (res) => {
                if (!res.ok) {
                    console.error('Failed to load footer:', res.status, res.statusText);
                    return null;
                }
                return res.text();
            }).catch((err) => {
                console.error('Footer fetch error:', err);
                return null;
            })
            : Promise.resolve(null);

        const [headerHTML, footerHTML] = await Promise.all([headerPromise, footerPromise]);

        if (headerContainer && typeof headerHTML === 'string') {
            headerContainer.innerHTML = headerHTML;
        }
        if (footerContainer && typeof footerHTML === 'string') {
            footerContainer.innerHTML = footerHTML;
        }
        
        // Initialize header/footer functionality after components are loaded
        initializeHeaderFooter();
        
        // Trigger contact info decoding after footer is loaded
        if (window.decodeContactInfo && typeof window.decodeContactInfo === 'function') {
            window.decodeContactInfo();
        }
    } catch (error) {
        console.error('Error loading header/footer components:', error);
        // If dynamic loading fails, initialize existing header/footer
        initializeHeaderFooter();
    }
}

/**
 * Initialize header and footer functionality
 */
function initializeHeaderFooter() {
    initMobileMenu();
    handleWindowResize();
    setActiveNavLink();
}

/**
 * Initialize mobile menu toggle
 */
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (!menuToggle || !navMenu) return;
    
    // Toggle menu on button click
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', 
            menuToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
    });
    
    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isMenuToggle = menuToggle.contains(event.target);
        const isNavMenu = navMenu.contains(event.target);
        
        if (!isMenuToggle && !isNavMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Close menu on Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

/**
 * Handle window resize to close mobile menu on larger screens
 */
function handleWindowResize() {
    window.addEventListener('resize', function() {
        const navMenu = document.getElementById('navMenu');
        const menuToggle = document.getElementById('menuToggle');
        
        if (!navMenu || !menuToggle) return;
        
        // If screen is larger than 768px, remove mobile menu classes
        if (window.innerWidth > 767) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

/**
 * Set active navigation link based on current page
 */
function setActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Check if link matches current page
        if (href === currentPage || 
            (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Smooth scroll to anchor links
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                if (history.pushState) {
                    history.pushState(null, null, targetId);
                }
            }
        });
    });
}

// Initialize smooth scroll if there are anchor links
initSmoothScroll();

/**
 * Sticky header behavior
 */
function initStickyHeader() {
    const header = document.querySelector('.main-header');
    
    if (!header) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
}

initStickyHeader();

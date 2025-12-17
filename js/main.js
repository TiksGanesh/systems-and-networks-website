/**
 * Systems & Networks Website
 * Main JavaScript File
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all functions
    init();
    
});

/**
 * Initialize all functionality
 */
function init() {
    // Decode contact information (will also be called after footer loads)
    decodeContactInfo();
    console.log('Systems & Networks website loaded');
}

/**
 * Anti-scraper protection: Decode obfuscated contact information
 * Uses Base64 encoding to protect email and phone from bots
 * This function is called both on DOMContentLoaded and after dynamic footer loading
 */
window.decodeContactInfo = function decodeContactInfo() {
    // Find all elements with obfuscated data
    const obfuscatedElements = document.querySelectorAll('[data-contact]');
    
    obfuscatedElements.forEach(element => {
        const encoded = element.getAttribute('data-contact');
        const type = element.getAttribute('data-type');
        
        if (encoded && type) {
            try {
                // Decode from Base64
                const decoded = atob(encoded);
                
                // Update based on type
                if (type === 'email') {
                    element.href = 'mailto:' + decoded;
                    element.textContent = decoded;
                    element.removeAttribute('data-contact');
                } else if (type === 'phone') {
                    element.href = 'tel:' + decoded;
                    // Only update text if element doesn't have children with data-contact-text
                    if (!element.querySelector('[data-contact-text]')) {
                        element.textContent = decoded;
                    }
                    element.removeAttribute('data-contact');
                } else if (type === 'whatsapp') {
                    // Remove + and spaces for WhatsApp URL
                    const cleanPhone = decoded.replace(/[\s+]/g, '');
                    element.href = 'https://wa.me/' + cleanPhone;
                    element.removeAttribute('data-contact');
                }
            } catch (e) {
                console.error('Error decoding contact info:', e);
            }
        }
    });
    
    // Handle text-only phone numbers (like "Call +91 96232 68939")
    const textElements = document.querySelectorAll('[data-contact-text]');
    textElements.forEach(element => {
        const encoded = element.getAttribute('data-contact-text');
        if (encoded) {
            try {
                const decoded = atob(encoded);
                element.textContent = 'Call ' + decoded;
                element.removeAttribute('data-contact-text');
            } catch (e) {
                console.error('Error decoding contact text:', e);
            }
        }
    });
    
    // Handle click-to-reveal fallback for no-JS or blocked elements
    const revealButtons = document.querySelectorAll('.contact-reveal');
    revealButtons.forEach(button => {
        button.addEventListener('click', function() {
            const encoded = this.getAttribute('data-reveal');
            const target = this.getAttribute('data-target');
            
            if (encoded && target) {
                try {
                    const decoded = atob(encoded);
                    const targetElement = document.getElementById(target);
                    if (targetElement) {
                        targetElement.textContent = decoded;
                        this.style.display = 'none';
                    }
                } catch (e) {
                    console.error('Error revealing contact info:', e);
                }
            }
        });
    });
}

/**
 * Utility: Encode contact information (for development/testing)
 * Usage: encodeContact('info@sysandnet.com')
 */
function encodeContact(text) {
    return btoa(text);
}

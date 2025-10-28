document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle Logic ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu ul li a');

    // Toggle menu visibility when the hamburger icon is clicked
    if (menuToggle) { // Check if the toggle button exists
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            navMenu.classList.toggle('open');
            // Change icon from bars to times (optional, but good UX)
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close the menu when a link is clicked (improves mobile UX)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
                // Reset icon
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });

    // --- Lightbox Functionality (Your original code) ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.close-btn');

    const galleryLinks = document.querySelectorAll('.masonry-grid .grid-item a');

    galleryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            
            const fullSrc = this.getAttribute('href');
            const caption = this.getAttribute('data-title') || '';

            lightboxImg.setAttribute('src', fullSrc);
            lightboxCaption.textContent = caption;

            lightbox.style.display = 'block';

            document.body.style.overflow = 'hidden';
        });
    });

    // Close events for the lightbox (Button, Outside Click, ESC key)
    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    closeBtn.addEventListener('click', closeLightbox);
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'block') {
            closeLightbox();
        }
    });
});
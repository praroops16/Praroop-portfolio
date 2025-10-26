document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.close-btn');

    // Get all image links in the gallery
    const galleryLinks = document.querySelectorAll('.masonry-grid .grid-item a');

    galleryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default link behavior
            
            // Get the full image source (href) and the caption (data-title)
            const fullSrc = this.getAttribute('href');
            const caption = this.getAttribute('data-title') || '';

            // Set the image and caption in the modal
            lightboxImg.setAttribute('src', fullSrc);
            lightboxCaption.textContent = caption;

            // Display the modal
            lightbox.style.display = 'block';

            // Optional: Prevent background scrolling
            document.body.style.overflow = 'hidden';
        });
    });

    // Close the lightbox when the close button is clicked
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close the lightbox when the user clicks anywhere outside the image/caption
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Close the lightbox using the ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'block') {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Add animation order to feed items
    const feeds = document.querySelectorAll('.box_feed');
    feeds.forEach((feed, index) => {
        feed.style.setProperty('--animation-order', index);
    });

    // Image viewer functionality
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox.querySelector('img');
    const lightboxClose = lightbox.querySelector('.lightbox-close');

    // Open lightbox
    document.querySelectorAll('.area_media img').forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close lightbox
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Close on escape key
    document.addEventListener('keyup', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        },
        { threshold: 0.1 }
    );

    feeds.forEach(feed => {
        feed.style.animationPlayState = 'paused';
        observer.observe(feed);
    });
});
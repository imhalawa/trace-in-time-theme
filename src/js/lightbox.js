const lightbox = GLightbox({
    openEffect: 'bounce', // Define that we want the bounce animation on open
    cssEfects: {
        // register our new animation
        bounce: { in: 'bounceIn', out: 'bounceOut' }
    },
    selector: '.glightbox3', // Ensure this matches your `class` in the HTML
    touchNavigation: true,   // Enable touch navigation
    zoomable: true           // Enable zoom functionality
});
// Import carousel logic
import { startCarousel } from './carousel.mjs';

// Initialize carousels after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    startCarousel('experiences-carousel', 3000); // Carousel for experiences
    startCarousel('facts-carousel', 3000); // Carousel for facts
});

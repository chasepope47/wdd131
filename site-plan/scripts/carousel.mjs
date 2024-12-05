export function startCarousel(containerId, interval) {
    const container = document.getElementById(containerId);
    const items = container.getElementsByClassName('carousel-item');
    let currentIndex = 0;

    // Check if container and items exist
    if (!container || items.length === 0) {
        console.error(`Carousel not found or has no items: ${containerId}`);
        return;
    }

    // Make the first item active
    items[currentIndex].classList.add('active');

    // Function to show the next item
    const showNextItem = () => {
        items[currentIndex].classList.remove('active'); // Remove active from current
        currentIndex = (currentIndex + 1) % items.length; // Move to next index
        items[currentIndex].classList.add('active'); // Add active to new current
    };

    // Set interval for carousel rotation
    setInterval(showNextItem, interval);
}

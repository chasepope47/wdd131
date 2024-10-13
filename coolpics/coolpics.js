// Function to create the modal HTML dynamically
function viewerTemplate(imgSrc, altText) {
    return `
    <div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${imgSrc}" alt="${altText}">
    </div>`;
}

// Function to handle image clicks and display the modal
function viewHandler(event) {
    const clickedElement = event.target;

    // Check if the clicked element is an image
    if (clickedElement.tagName === 'IMG') {
        // Split the image source and create a full-size version
        const imgSrc = clickedElement.src.split('-')[0] + '-full.jpeg';
        const altText = clickedElement.alt;

        // Insert the modal HTML into the body
        document.body.insertAdjacentHTML('afterbegin', viewerTemplate(imgSrc, altText));
    }
}

// Function to close the modal when the "X" button is clicked using event delegation
function closeViewer(event) {
    // Check if the clicked element is the close button (event delegation)
    if (event.target.classList.contains('close-viewer')) {
        console.log("Close button clicked"); // Debugging
        const viewer = document.querySelector('.viewer');
        if (viewer) {
            viewer.remove(); // Removes the modal from the DOM
        }
    }
}

// Add event listener to the gallery section to handle image clicks
const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', viewHandler);

// Add event listener to the document to handle closing the modal (event delegation)
document.addEventListener('click', closeViewer);

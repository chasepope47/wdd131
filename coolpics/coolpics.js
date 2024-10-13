// Selecting the menu button and nav menu
const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('nav ul');

// Toggle the menu visibility when the button is clicked
menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('hide');
});

// Function to handle window resize and show/hide menu based on screen width
function handleResize() {
    if (window.innerWidth > 1000) {
        navMenu.classList.remove('hide');
    } else {
        navMenu.classList.add('hide');
    }
}


window.addEventListener('resize', handleResize);


handleResize();

function viewerTemplate(imgSrc, altText) {
    return `
    <div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${imgSrc}" alt="${altText}">
    </div>`;
}

function viewHandler(event) {
    const clickedElement = event.target;

    if (clickedElement.tagName === 'IMG') {
        const imgSrc = clickedElement.src.split('-')[0] + '-full.jpeg'; // Adjust based on the file structure
        const altText = clickedElement.alt;
        
        // Insert the viewer template into the body
        document.body.insertAdjacentHTML('afterbegin', viewerTemplate(imgSrc, altText));
        
        // Add event listener to close the viewer
        const closeButton = document.querySelector('.close-viewer');
        closeButton.addEventListener('click', closeViewer);
    }
}

function closeViewer() {
    const viewer = document.querySelector('.viewer');
    if (viewer) {
        viewer.remove();
    }
}

// Add event listener to the gallery
const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', viewHandler);

const menuButton = document.querySelector('header h1');
const navMenu = document.querySelector('nav ul');

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

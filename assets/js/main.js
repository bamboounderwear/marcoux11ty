// Main JavaScript file
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuBackdrop = document.getElementById('menuBackdrop');

    function toggleMenu() {
        const isHidden = mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden');
        document.body.style.overflow = isHidden ? 'hidden' : '';
    }

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', toggleMenu);
        menuBackdrop.addEventListener('click', toggleMenu);
    }
});
// Main JavaScript file
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuBackdrop = document.getElementById('menuBackdrop');
    const mainNav = document.getElementById('mainNav');
    const navBackdrop = document.getElementById('navBackdrop');

    // Handle menu toggle
    function toggleMenu() {
        const isHidden = mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden');
        document.body.style.overflow = isHidden ? 'hidden' : '';
    }

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', toggleMenu);
        menuBackdrop.addEventListener('click', toggleMenu);
    }

    // Handle navbar background on scroll
    function updateNavBackground() {
        if (window.scrollY > 50) {
            navBackdrop.classList.add('opacity-100');
            navBackdrop.classList.remove('opacity-0');
        } else {
            navBackdrop.classList.add('opacity-0');
            navBackdrop.classList.remove('opacity-100');
        }
    }

    // Initial state
    navBackdrop.classList.add('opacity-0');
    
    window.addEventListener('scroll', updateNavBackground);
    updateNavBackground(); // Initial check
});
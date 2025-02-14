// Main JavaScript file
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = menuButton.querySelector('.menu-icon');
    const closeIcon = menuButton.querySelector('.close-icon');
    const menuText = menuButton.querySelector('.menu-text');
    const mainNav = document.getElementById('mainNav');
    const navBackdrop = document.getElementById('navBackdrop');

    // Handle menu toggle
    function toggleMenu() {
        const isOpen = mobileMenu.classList.contains('pointer-events-auto');
        
        // Toggle menu visibility
        mobileMenu.classList.toggle('opacity-0');
        mobileMenu.classList.toggle('pointer-events-none');
        mobileMenu.classList.toggle('pointer-events-auto');
        
        // Toggle icons
        menuIcon.style.opacity = isOpen ? '1' : '0';
        closeIcon.style.opacity = isOpen ? '0' : '1';
        
        // Update text
        menuText.textContent = isOpen ? 'Menu' : 'Close';
        
        // Toggle body scroll
        document.body.style.overflow = isOpen ? '' : 'hidden';
    }

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', toggleMenu);
    }

    // Handle navbar background on scroll
    function updateNavBackground() {
        const scrolled = window.scrollY > 0;
        const opacity = Math.min((window.scrollY / 200) + 0.1, 1);
        
        if (scrolled) {
            navBackdrop.style.opacity = opacity;
        } else {
            navBackdrop.style.opacity = 0.1;
        }
    }

    // Initial state
    navBackdrop.style.opacity = 0.1;
    
    window.addEventListener('scroll', updateNavBackground);
    updateNavBackground(); // Initial check
});
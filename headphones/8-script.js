document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    // Function to toggle menu
    function toggleMenu() {
        const isMenuOpen = navMenu.classList.contains('active');
        
        if (isMenuOpen) {
            // Close menu
            navMenu.classList.remove('active');
            menuBtn.classList.remove('active');
            body.style.overflow = ''; // Enable scrolling
        } else {
            // Open menu
            navMenu.classList.add('active');
            menuBtn.classList.add('active');
            body.style.overflow = 'hidden'; // Disable scrolling
        }
    }

    // Function to close menu
    function closeMenu() {
        navMenu.classList.remove('active');
        menuBtn.classList.remove('active');
        body.style.overflow = ''; // Enable scrolling
    }

    // Toggle menu when hamburger button is clicked
    menuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    // Close menu when clicking on navigation links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 480) {
                closeMenu();
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(event.target) && 
            !menuBtn.contains(event.target)) {
            closeMenu();
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 480 && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
});

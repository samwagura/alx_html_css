document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    // Toggle menu function
    function toggleMenu() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scrolling when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    // Event listener for menu toggle
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                toggleMenu();
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768 && 
            navMenu.classList.contains('active') && 
            !navMenu.contains(event.target) && 
            !menuToggle.contains(event.target)) {
            toggleMenu();
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            // Ensure menu is closed and body scroll is enabled on larger screens
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

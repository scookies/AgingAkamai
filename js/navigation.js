/* ==========================================================================
   Aging Akamai - Navigation JavaScript
   Clean, accessible navigation for senior-friendly website
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav__link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section ID from the href
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Calculate offset for sticky header
                const headerHeight = document.querySelector('.header').offsetHeight + 
                                   document.querySelector('.nav').offsetHeight;
                
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                updateActiveNavLink(this);
            }
        });
    });
    
    // Update active navigation link based on scroll position
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 200; // Offset for header
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const correspondingNavLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                if (correspondingNavLink) {
                    updateActiveNavLink(correspondingNavLink);
                }
            }
        });
    });
    
    // Function to update active navigation link
    function updateActiveNavLink(activeLink) {
        // Remove active class from all nav links
        navLinks.forEach(link => {
            link.classList.remove('nav__link--active');
        });
        
        // Add active class to current link
        activeLink.classList.add('nav__link--active');
    }
    
    // Enhanced accessibility for keyboard navigation
    navLinks.forEach(link => {
        link.addEventListener('keydown', function(e) {
            // Handle Enter key and Space key
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Phone number click tracking (for analytics if needed)
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Optional: Add analytics tracking here
            console.log('Phone call initiated:', this.href);
        });
    });
});
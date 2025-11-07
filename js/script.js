// Main JavaScript file for Serenity Farewells

// Current year for copyright
document.addEventListener('DOMContentLoaded', function() {
    // Update copyright year
    const currentYear = new Date().getFullYear();
    const copyrightElements = document.querySelectorAll('footer p:first-child');
    copyrightElements.forEach(element => {
        element.textContent = `© ${currentYear} Serenity Farewells. All rights reserved.`;
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form validation for contact form (when not using Google Forms)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm()) {
                // Form is valid, proceed with submission
                alert('Thank you for your message. We will contact you soon.');
                this.reset();
            }
        });
    }

    // Emergency contact highlight
    const emergencyNumbers = document.querySelectorAll('.emergency-contact p');
    emergencyNumbers.forEach(number => {
        number.style.fontWeight = 'bold';
        number.style.fontSize = '1.2em';
    });
});

// Form validation function
function validateForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (!name.value.trim()) {
        alert('Please enter your name.');
        name.focus();
        return false;
    }

    if (!email.value.trim()) {
        alert('Please enter your email address.');
        email.focus();
        return false;
    }

    if (!isValidEmail(email.value)) {
        alert('Please enter a valid email address.');
        email.focus();
        return false;
    }

    if (!message.value.trim()) {
        alert('Please enter your message.');
        message.focus();
        return false;
    }

    return true;
}

// Email validation helper function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Mobile menu functionality (for future enhancement)
function initMobileMenu() {
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.setAttribute('aria-label', 'Toggle menu');
    
    const nav = document.querySelector('nav');
    nav.appendChild(menuToggle);
    
    menuToggle.addEventListener('click', function() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    });
}

// Initialize mobile menu when needed
if (window.innerWidth <= 768) {
    // initMobileMenu(); // Uncomment when ready to implement mobile menu
}

// Page load animations
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Emergency contact prompt for immediate assistance
function showEmergencyContact() {
    if (confirm('Do you need immediate assistance? Click OK to call our emergency line.')) {
        window.location.href = 'tel:0800123456';
    }
}

// Add emergency contact prompt to emergency section
const emergencySection = document.querySelector('.emergency-contact');
if (emergencySection) {
    emergencySection.style.cursor = 'pointer';
    emergencySection.addEventListener('click', showEmergencyContact);
}

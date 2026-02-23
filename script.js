// Hamburger menu toggle
var hamburger = document.querySelector('.hamburger');
var navMenu = document.querySelector('.nav-menu');

hamburger.onclick = function() {
    navMenu.classList.toggle('active');
};

// Animate feature cards on scroll
function animateOnScroll() {
    var cards = document.querySelectorAll('.feature-card');
    for (var i = 0; i < cards.length; i++) {
        if (cards[i].getBoundingClientRect().top < window.innerHeight * 0.75) {
            cards[i].style.animation = 'fadeInUp 0.6s ease forwards';
        }
    }
}
animateOnScroll();
window.onscroll = animateOnScroll;

// Contact form handling
var form = document.getElementById('contactForm');
var msg = document.getElementById('formMessage');

if (form) {
    form.onsubmit = function(e) {
        e.preventDefault();

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var subject = document.getElementById('subject').value;
        var message = document.getElementById('message').value;

        // Check required fields
        if (!name || !email || !subject || !message) {
            msg.textContent = 'Please fill in all required fields';
            msg.className = 'form-message error';
            msg.style.display = 'block';
            return;
        }

        // Check email format
        if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
            msg.textContent = 'Please enter a valid email address';
            msg.className = 'form-message error';
            msg.style.display = 'block';
            return;
        }

        // Show success message and reset form
        msg.textContent = 'Thank you! Your message has been sent successfully!';
        msg.className = 'form-message success';
        msg.style.display = 'block';
        form.reset();

        // Hide message after 5 seconds
        setTimeout(function() {
            msg.style.display = 'none';
        }, 5000);
    };
}


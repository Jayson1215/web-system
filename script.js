// ===== Mobile Navigation Toggle =====
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            if (hamburger) {
                hamburger.classList.remove('active');
            }
        });
    });

    // ===== Contact Form Handler =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Basic validation
            if (!name || !email || !subject || !message) {
                showFormMessage('Please fill in all required fields', 'error');
                return;
            }

            // Email validation
            if (!isValidEmail(email)) {
                showFormMessage('Please enter a valid email address', 'error');
                return;
            }

            // Simulate form submission (in real app, this would send to server)
            console.log({
                name: name,
                email: email,
                phone: phone,
                subject: subject,
                message: message,
                timestamp: new Date().toLocaleString()
            });

            // Show success message
            showFormMessage('Thank you! Your message has been sent successfully. We will get back to you soon!', 'success');

            // Reset form
            contactForm.reset();

            // Clear message after 5 seconds
            setTimeout(() => {
                document.getElementById('formMessage').style.display = 'none';
            }, 5000);
        });
    }

    // ===== FAQ Accordion =====
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = this.classList.contains('active');

            // Close all other answers
            faqQuestions.forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('show');
            });

            // Toggle current answer
            if (!isActive) {
                this.classList.add('active');
                answer.classList.add('show');
            }
        });
    });

    // ===== Smooth Scroll for internal links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ===== Page Load Animation =====
    animateOnScroll();

    // ===== Scroll animations =====
    window.addEventListener('scroll', animateOnScroll);
});

// ===== Helper Functions =====

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show form message
function showFormMessage(message, type) {
    const messageDiv = document.getElementById('formMessage');
    if (messageDiv) {
        messageDiv.textContent = message;
        messageDiv.className = `form-message ${type}`;
        messageDiv.style.display = 'block';
    }
}

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .service-card, .team-member, .pricing-card, .faq-item');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight * 0.75) {
            element.style.animation = 'fadeInUp 0.6s ease forwards';
            element.style.opacity = '1';
        }
    });
}

// ===== Price Button Handlers =====
document.addEventListener('DOMContentLoaded', function() {
    const priceButtons = document.querySelectorAll('.price-button');
    priceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const planName = this.closest('.pricing-card').querySelector('h3').textContent;
            alert(`You selected the ${planName} plan. Please contact us for more details!`);
        });
    });
});

// ===== Service Link Handlers =====
document.addEventListener('DOMContentLoaded', function() {
    const serviceLinks = document.querySelectorAll('.service-link');
    serviceLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const serviceName = this.closest('.service-card').querySelector('h3').textContent;
            alert(`Learn more about ${serviceName}. Please contact us for details!`);
        });
    });
});

// ===== Scroll to top functionality =====
window.addEventListener('scroll', function() {
    const scrollButton = document.getElementById('scrollTopBtn');
    if (scrollButton) {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    }
});

// ===== Add Active Link Highlighting =====
document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = location.pathname.split('/').pop();
    const menuItems = document.querySelectorAll('.nav-menu a');

    menuItems.forEach(item => {
        if (item.href.includes(currentLocation) || 
            (currentLocation === '' && item.href.includes('index'))) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});

// ===== Counter Animation for Statistics =====
function animateCounter(element, target) {
    const duration = 2000; // 2 seconds
    const startTime = Date.now();
    const startValue = 0;

    function update() {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(startValue + (target - startValue) * progress);

        element.textContent = value;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// ===== Form Field Validation in Real-time =====
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('change', function() {
            if (!isValidEmail(this.value)) {
                this.style.borderColor = '#e74c3c';
            } else {
                this.style.borderColor = '#27ae60';
            }
        });
    }
});

// ===== Keyboard Navigation Support =====
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');
        if (navMenu && hamburger) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    }

    // Tab through FAQ items
    if (e.key === 'Tab') {
        const faqQuestions = document.querySelectorAll('.faq-question');
        faqQuestions.forEach(q => {
            q.setAttribute('tabindex', '0');
            q.addEventListener('keypress', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        });
    }
});

// ===== Log Page Analytics =====
window.addEventListener('beforeunload', function() {
    console.log('Page view time:', new Date().toLocaleString());
});

console.log('Website loaded successfully!');
console.log('Current page:', window.location.pathname);

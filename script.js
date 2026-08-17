document.addEventListener('DOMContentLoaded', () => {
    const allNavLinks = document.querySelectorAll('.nav-links a, .footer-links a, .footer-social a[href^="#"]');
    
    allNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#') && targetId.length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    const signupNavBtn = document.querySelector('.btn-signup');
    const heroFormSection = document.querySelector('.hero-form-section');
    if (signupNavBtn && heroFormSection) {
        signupNavBtn.addEventListener('click', (e) => {
            e.preventDefault();
            heroFormSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    const modalHTML = `
        <div id="authModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.6); z-index:9999; justify-content:center; align-items:center;">
            <div style="background:#fff; padding:30px; border-radius:10px; width:100%; max-width:400px; position:relative; box-shadow:0 5px 15px rgba(0,0,0,0.3);">
                <button id="closeAuthModal" style="position:absolute; top:15px; right:15px; background:none; border:none; font-size:20px; cursor:pointer;">&times;</button>
                <h3 id="modalTitle" style="margin-bottom:20px; color:#333; text-align:center;">Log in</h3>
                <form id="modalForm">
                    <div style="margin-bottom:15px;">
                        <input type="email" id="modalEmail" placeholder="Your email" style="width:100%; padding:10px; border:1px solid #ccc; border-radius:5px; box-sizing:border-box;">
                    </div>
                    <div style="margin-bottom:15px;">
                        <input type="password" id="modalPassword" placeholder="Your password" style="width:100%; padding:10px; border:1px solid #ccc; border-radius:5px; box-sizing:border-box;">
                    </div>
                    <button type="submit" style="width:100%; padding:10px; background:#482be7; color:#fff; border:none; border-radius:5px; font-weight:bold; cursor:pointer;">Submit</button>
                </form>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const authModal = document.getElementById('authModal');
    const closeAuthModal = document.getElementById('closeAuthModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalForm = document.getElementById('modalForm');
    const modalEmail = document.getElementById('modalEmail');
    const modalPassword = document.getElementById('modalPassword');
    
    const loginTriggers = document.querySelectorAll('.btn-login, .tab:nth-child(2)');
    const signupTriggers = document.querySelectorAll('.btn-main, .tab:nth-child(1)');

    loginTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modalTitle.textContent = "Log in";
            authModal.style.display = 'flex';
        });
    });

    signupTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modalTitle.textContent = "Sign up";
            authModal.style.display = 'flex';
        });
    });

    closeAuthModal.addEventListener('click', () => {
        authModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === authModal) {
            authModal.style.display = 'none';
        }
    });

    modalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let hasError = false;

        if (!modalEmail.value.trim()) {
            modalEmail.style.border = '2px solid red';
            hasError = true;
        } else {
            modalEmail.style.border = '1px solid #ccc';
        }

        if (!modalPassword.value.trim()) {
            modalPassword.style.border = '2px solid red';
            hasError = true;
        } else {
            modalPassword.style.border = '1px solid #ccc';
        }

        if (hasError) {
            alert('Error: Please fill in all required fields.');
        } else {
            alert('Success! Form submitted successfully.');
            authModal.style.display = 'none';
            modalForm.reset();
            modalEmail.style.border = '1px solid #ccc';
            modalPassword.style.border = '1px solid #ccc';
        }
    });

    const heroForm = document.querySelector('.hero-form-section form');
    if (heroForm) {
        const heroEmail = heroForm.querySelector('input[type="email"]');
        const heroPassword = heroForm.querySelector('input[type="password"]');

        heroForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let hasError = false;

            if (heroEmail && !heroEmail.value.trim()) {
                heroEmail.style.border = '2px solid red';
                hasError = true;
            } else if (heroEmail) {
                heroEmail.style.border = '1px solid #ccc';
            }

            if (heroPassword && !heroPassword.value.trim()) {
                heroPassword.style.border = '2px solid red';
                hasError = true;
            } else if (heroPassword) {
                heroPassword.style.border = '1px solid #ccc';
            }

            if (hasError) {
                alert('Error: Please fill in all required fields.');
            } else {
                alert('Success! Account created successfully.');
                heroForm.reset();
                if (heroEmail) heroEmail.style.border = '1px solid #ccc';
                if (heroPassword) heroPassword.style.border = '1px solid #ccc';
            }
        });
    }

    const contactForm = document.querySelector('.contact-section form');
    if (contactForm) {
        const contactName = contactForm.querySelector('input[type="text"]');
        const contactEmail = contactForm.querySelector('input[type="email"]');
        const contactMessage = contactForm.querySelector('textarea');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let hasError = false;

            if (contactName && !contactName.value.trim()) {
                contactName.style.border = '2px solid red';
                hasError = true;
            } else if (contactName) {
                contactName.style.border = '1px solid #ccc';
            }

            if (contactEmail && !contactEmail.value.trim()) {
                contactEmail.style.border = '2px solid red';
                hasError = true;
            } else if (contactEmail) {
                contactEmail.style.border = '1px solid #ccc';
            }

            if (contactMessage && !contactMessage.value.trim()) {
                contactMessage.style.border = '2px solid red';
                hasError = true;
            } else if (contactMessage) {
                contactMessage.style.border = '1px solid #ccc';
            }

            if (hasError) {
                showTopAlert('Error: Please fill in all required fields.', 'red');
            } else {
                showTopAlert('Success: Your message has been sent successfully!', 'green');
                contactForm.reset();
                if (contactName) contactName.style.border = '1px solid #ccc';
                if (contactEmail) contactEmail.style.border = '1px solid #ccc';
                if (contactMessage) contactMessage.style.border = '1px solid #ccc';
            }
        });
    }

    function showTopAlert(message, color) {
        const existingAlert = document.getElementById('topAlertBanner');
        if (existingAlert) existingAlert.remove();

        const alertBanner = document.createElement('div');
        alertBanner.id = 'topAlertBanner';
        alertBanner.textContent = message;
        alertBanner.style.position = 'fixed';
        alertBanner.style.top = '0';
        alertBanner.style.left = '0';
        alertBanner.style.width = '100%';
        alertBanner.style.padding = '15px';
        alertBanner.style.background = color === 'red' ? '#e74c3c' : '#2ecc71';
        alertBanner.style.color = '#fff';
        alertBanner.style.textAlign = 'center';
        alertBanner.style.fontWeight = 'bold';
        alertBanner.style.zIndex = '99999';
        alertBanner.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';

        document.body.prepend(alertBanner);

        setTimeout(() => {
            alertBanner.remove();
        }, 4000);
    }

    const getStartedButtons = document.querySelectorAll('.btn-get-started, .btn-plan');
    getStartedButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Redirecting to checkout');
        });
    });

    const playButton = document.querySelector('.btn-play');
    if (playButton) {
        playButton.addEventListener('click', () => {
            alert('Playing video');
        });
    }

    const socialLinks = document.querySelectorAll('.social-icons a, .footer-social .social-icons a');
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Opening social link');
        });
    });
});
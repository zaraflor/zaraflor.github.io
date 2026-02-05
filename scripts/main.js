document.addEventListener('DOMContentLoaded', () => {
    // Menu Toggle Logic
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function () {
            menu.classList.toggle('active');
        });

        document.querySelectorAll('.menu-link').forEach(link => {
            link.addEventListener('click', function () {
                menu.classList.remove('active');
            });
        });
    }

    // Scroll to Top Logic
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    if (scrollTopBtn) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                scrollTopBtn.style.display = 'block';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        });

        scrollTopBtn.addEventListener('click', function () {
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
    }

    // Dynamic Year in Footer
    const footerYear = document.querySelector('footer p');
    if (footerYear) {
        const currentYear = new Date().getFullYear();
        footerYear.innerHTML = `&copy; ${currentYear} Zaraflor. Todos los derechos reservados.`;
    }

    // Event Listeners for Buttons (replacing inline onclick)
    const discoverBtn = document.querySelector('.hero-overlay .call-to-action');
    if (discoverBtn) {
        discoverBtn.addEventListener('click', () => {
            window.location.href = '#sobre-nosotros';
        });
    }

    const phoneBtn = document.querySelector('.contact-buttons .phone');
    if (phoneBtn) {
        phoneBtn.addEventListener('click', () => {
            window.open('tel:+34974221416', '_self');
        });
    }

    const whatsappBtn = document.querySelector('.contact-buttons .whatsapp');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', () => {
            window.open('https://wa.me/34633736806', '_blank');
        });
    }
});

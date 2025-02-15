
    document.getElementById('menuToggle').addEventListener('click', function () {
        const menu = document.getElementById('menu');
        menu.classList.toggle('active');
    });

    document.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click', function () {
            const menu = document.getElementById('menu');
            menu.classList.remove('active');
        });
    });

    const scrollTopBtn = document.getElementById('scrollTopBtn');

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
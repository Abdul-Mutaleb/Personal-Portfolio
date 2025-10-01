
document.addEventListener('DOMContentLoaded', function () {
    const closeBtn = document.querySelector('.close-overlay');
    const navbarNav = document.getElementById('navbarNav');
    const toggler = document.querySelector('.navbar-toggler');
    const navbar = document.querySelector('.navbar');
    const hero = document.getElementById('hero');

    if (closeBtn && navbarNav) {
        closeBtn.addEventListener('click', function () {
            navbarNav.classList.remove('show');
            document.body.classList.remove('menu-open');
            if (toggler) toggler.setAttribute('aria-expanded', 'false');
        });
    }

    window.addEventListener('scroll', function () {
        if (!navbar) return;
        const heroHeight = hero ? hero.offsetHeight : 0;
        if (window.scrollY > heroHeight - 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
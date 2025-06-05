document.addEventListener('DOMContentLoaded', function () {
const navbar = document.getElementById('mainNavbar');

// Toggle on scroll
window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
    } else {
    navbar.classList.remove('scrolled');
    }
});

// Collapse menu on outside click (for mobile nav)
document.addEventListener('click', function (event) {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const isClickInside = navbarCollapse.contains(event.target) || navbarToggler.contains(event.target);

    if (!isClickInside && navbarCollapse.classList.contains('show')) {
    new bootstrap.Collapse(navbarCollapse).hide();
    }
});
});
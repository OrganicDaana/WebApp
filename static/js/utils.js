document.addEventListener('click', function (event) {
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

const isClickInsideNavbar = navbarCollapse.contains(event.target) || navbarToggler.contains(event.target);

if (!isClickInsideNavbar && navbarCollapse.classList.contains('show')) {
    new bootstrap.Collapse(navbarCollapse).hide();
}
});
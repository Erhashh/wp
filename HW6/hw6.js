document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const sideMenu = document.querySelector('.side-menu');

    burgerMenu.addEventListener('click', function() {
        sideMenu.classList.toggle('open');
    });
});

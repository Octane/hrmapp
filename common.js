(function () {
    var display = document.querySelector('.viewport');
    var burger = document.querySelector('.toolbar__burger');
    var menu = document.querySelector('.menu');

    function toggleMenu() {
        display.classList.toggle('viewport_with-menu');
    }

    burger.addEventListener('click', toggleMenu);
    menu.addEventListener('click', toggleMenu);
}());

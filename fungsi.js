let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle("open-menu")
    menu.classList.toggle("move")
};

let header = document.querySelector('header')

window.addEventListener('scroll', () => {
    header.classList.toggle("header-active", window.scrollY > 0);
});

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY >= 550);
});

let scrollTop = document.querySelector(".scroll-top");
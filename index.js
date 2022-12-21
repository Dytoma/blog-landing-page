var hamburger = document.querySelector(".hamburger-menu");
var closeIcon = document.querySelector(".close");
var openMenu = document.querySelector(".open");
var menu = document.querySelector(".menu");

hamburger.addEventListener("click", (e) => {
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
    closeIcon.classList.toggle("hidden");
    openMenu.classList.toggle("hidden");
})
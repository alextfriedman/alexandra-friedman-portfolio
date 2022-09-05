// Slideout menu
// Adapted code from https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0

const menu = document.querySelector(".sliding-menu");
const menuItems = document.querySelectorAll(".menu-item");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".fa-xmark");
const menuIcon = document.querySelector(".fa-bars");

const toggleMenu = () => {
    if (menu.classList.contains("show-menu")) {
        menu.classList.remove("show-menu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
        hamburger.style.backgroundColor = "#f5eadc";
        closeIcon.style.color = "#463a2d";
    } else {
        menu.classList.add("show-menu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
        hamburger.style.backgroundColor = "#463a2d";
        closeIcon.style.color = "#f5eadc";
    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", toggleMenu)
});

// Scroll animation

const reveal = () => {
    let reveals = document.querySelectorAll(".reveal")
    
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 10;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

reveal();
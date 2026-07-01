const header = document.querySelector(".header");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Header background on scroll
window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

// Mobile menu
menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

// Close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});
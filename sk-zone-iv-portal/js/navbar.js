const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

header.classList.add("scrolled");

}

else{

header.classList.remove("scrolled");

}

});

const menu=document.querySelector(".menu-toggle");

const nav=document.querySelector(".nav-links");

menu.addEventListener("click",()=>{

nav.classList.toggle("show");

});
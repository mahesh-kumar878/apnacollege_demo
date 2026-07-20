// Smooth Scroll for Navigation

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});

// Contact Form

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    form.reset();

});

// Navbar Shadow on Scroll

window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.4)";

    }else{

        header.style.boxShadow = "none";

    }

});

// Reveal Animation

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

});

// Initial Style

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "0.6s";

});

// Hero Button

const contactBtn = document.querySelector(".btn");

contactBtn.addEventListener("click", () => {

    document.querySelector("#contact").scrollIntoView({
        behavior: "smooth"
    });

});
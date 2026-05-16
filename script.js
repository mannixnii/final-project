// MOBILE MENU
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// CONTACT FORM
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){
    e.preventDefault();

    alert("Message Sent Successfully!");

    form.reset();
});
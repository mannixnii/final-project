// Navbar Blur

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        navbar.classList.add("active");
    }else{
        navbar.classList.remove("active");
    }
});

// Scroll Reveal

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

},{threshold:0.2});

reveals.forEach(item => {
    observer.observe(item);
});

// Gallery Lightbox

const galleryImages =
document.querySelectorAll(".gallery-grid img");

const lightbox =
document.querySelector(".lightbox");

const lightboxImg =
document.querySelector(".lightbox img");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";
        lightboxImg.src = img.src;

    });

});

lightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});
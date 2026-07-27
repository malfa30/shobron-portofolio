const navbar = document.querySelector(".navbar");
const reveals = document.querySelectorAll(".reveal");
const cursorGlow = document.querySelector(".cursor-glow");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

reveals.forEach((element) => observer.observe(element));

window.addEventListener("mousemove", (event) => {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
});

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-open");
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("mobile-open");
    });
});

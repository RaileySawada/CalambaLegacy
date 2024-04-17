const hamburger = document.querySelector(".hamburger-menu");
const backdrop = document.querySelector("nav ul");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    backdrop.classList.toggle("active");
});
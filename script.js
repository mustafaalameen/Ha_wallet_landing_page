const hamburger = document.querySelector(".hamburger");
const navlinklist = document.querySelector(".nav_center");



hamburger.addEventListener("click", () => {
    navlinklist.classList.toggle("actived");
    hamburger.classList.toggle("active");


})

document.querySelectorAll(".nav--links").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navlinklist.classList.remove("actived");
}))
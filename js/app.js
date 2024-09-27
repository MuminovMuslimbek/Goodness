//carousel//
let currentIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    currentIndex = index;
    if (currentIndex >= totalSlides) currentIndex = 0;
    if (currentIndex < 0) currentIndex = totalSlides - 1;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
}

function updateDots() {
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
}

document.querySelector(".next").addEventListener("click", () => {
    showSlide(currentIndex + 1);
});

document.querySelector(".prev").addEventListener("click", () => {
    showSlide(currentIndex - 1);
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index));
});

setInterval(() => {
    showSlide(currentIndex + 1);
}, 6000);

updateDots();
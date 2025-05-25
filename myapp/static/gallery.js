let currentIndex = 0;
const images = document.querySelectorAll(".gallery img");

function showSlide(index) {
  images.forEach((img, i) => {
    img.style.display = i === index ? "block" : "none";
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showSlide(currentIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentIndex);
});

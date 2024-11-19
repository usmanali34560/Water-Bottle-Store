// Simple Hero Image Slider
let currentSlide = 0;
const slides = [
  'images/hero-banner1.jpg',
  'images/hero-banner2.jpg',
  'images/hero-banner3.jpg'
];

function showNextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  document.querySelector('.hero').style.backgroundImage = `url(${slides[currentSlide]})`;
}

// Set interval for changing hero image every 5 seconds
setInterval(showNextSlide, 5000);

// Smooth Scroll to Top Button
const scrollTopBtn = document.createElement("button");
scrollTopBtn.innerText = "↑";
scrollTopBtn.className = "scroll-top-btn";
document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});s

const images = document.querySelectorAll(".gallery .image");
const lightbox = document.getElementById("lightbox");
const fullImage = document.getElementById("fullImage");

let currentIndex = 0;


images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showImage();
  });
});

function showImage() {
  fullImage.src = images[currentIndex].src;
  lightbox.style.display = "block";
}


lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});


document.addEventListener("keydown", (e) => {
  if (lightbox.style.display === "block") {
    if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % images.length;
      showImage();
    }
    if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage();
    }
    if (e.key === "Escape") {
      lightbox.style.display = "none";
    }
  }
});
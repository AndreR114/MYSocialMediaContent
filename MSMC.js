document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("background-video");
  if (video) {
    video.playbackRate = 0.5; // Stellt die Abspielgeschwindigkeit auf 60% der normalen Geschwindigkeit
  }
});

let currentSlide = 0;
const images = document.querySelectorAll(".carousel-images img");
const totalImages = images.length;

function showSlide(index) {
  const angle = 360 / totalImages;
  images.forEach((img, i) => {
    img.style.transition = "transform 1.5s ease-in-out"; // Stellt sicher, dass auch hier eine sanfte Transition angewendet wird
    img.style.transform = `rotateY(${
      (i - index) * angle
    }deg) translateZ(400px)`; // Erhöhe den Wert für einen stärkeren 3D-Effekt
    img.style.opacity = i === index ? 1 : 0.6;
  });
}

function moveSlide(step) {
  currentSlide = (currentSlide + step + totalImages) % totalImages;
  showSlide(currentSlide);
}

showSlide(currentSlide); // Initialer Aufruf, um das erste Bild
function openOverlay(src) {
  document.getElementById("overlayImage").src = src;
  document.getElementById("overlay").style.display = "flex";
}

function closeOverlay() {
  document.getElementById("overlay").style.display = "none";
}

document.querySelectorAll(".carousel-images img").forEach((img) => {
  img.addEventListener("click", function () {
    openOverlay(this.src);
  });
});

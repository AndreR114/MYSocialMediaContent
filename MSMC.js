function toggleResetButton() {
  const expanded = document.querySelector(".expanded");
  const resetButton = document.getElementById("reset-button");
  if (expanded) {
    resetButton.style.display = "block"; // Zeigt den Button an, wenn ein Bereich expandiert ist
  } else {
    resetButton.style.display = "none"; // Versteckt den Button, wenn kein Bereich expandiert ist
  }
}

document
  .getElementById("tiktok-section")
  .addEventListener("click", function () {
    if (!this.classList.contains("expanded")) {
      this.classList.add("expanded");
      document.getElementById("instagram-section").classList.remove("expanded");
    }
    toggleResetButton();
  });

document
  .getElementById("instagram-section")
  .addEventListener("click", function () {
    if (!this.classList.contains("expanded")) {
      this.classList.add("expanded");
      document.getElementById("tiktok-section").classList.remove("expanded");
    }
    toggleResetButton();
  });

document.getElementById("reset-button").addEventListener("click", function () {
  document.getElementById("tiktok-section").classList.remove("expanded");
  document.getElementById("instagram-section").classList.remove("expanded");
  toggleResetButton();
});

let slideIndex = 0; // Startindex des Sliders
const slides = document.querySelectorAll(".gallery-slider-tiktok img"); // Alle Slides
const totalSlides = slides.length; // Gesamtzahl der Slides

document.querySelector(".next").addEventListener("click", () => {
  if (slideIndex < totalSlides - 1) {
    // Überprüft, ob das aktuelle Bild nicht das letzte ist
    slideIndex++; // Erhöht den Index nur, wenn es nicht das letzte Bild ist
    updateGalleryTransform();
  }
});

document.querySelector(".prev").addEventListener("click", () => {
  if (slideIndex > 0) {
    // Stellt sicher, dass der Index nicht negativ wird
    slideIndex--; // Verringert den Index nur, wenn es nicht das erste Bild ist
    updateGalleryTransform();
  }
});

function updateGalleryTransform() {
  const slideWidth = slides[0].clientWidth; // Stellt sicher, dass die Breite korrekt abgerufen wird
  const offset = slideIndex * slideWidth;
  const slider = document.querySelector(".gallery-slider-tiktok");
  slider.style.transform = `translateX(-${offset}px)`;

  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  // Setzt die 'disabled' Klasse korrekt
  if (slideIndex === 0) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  if (slideIndex === totalSlides - 1) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}
/*===========================================INSTASLIDER===========================================*/
function updateGalleryTransform2() {
  const slideWidth2 = slides2[0].clientWidth; // Stellt sicher, dass die Breite korrekt abgerufen wird
  const offset2 = slideIndex2 * slideWidth2;
  const slider2 = document.querySelector(".gallery-slider-insta");
  slider2.style.transform = `translateX(-${offset2}px)`;

  const prevButton2 = document.querySelector("prev-insta");
  const nextButton2 = document.querySelector("next-insta");

  // Setzt die 'disabled' Klasse korrekt
  if (slideIndex2 === 0) {
    prevButton2.classList.add("disabled");
  } else {
    prevButton2.classList.remove("disabled");
  }

  if (slideIndex2 === totalSlides2 - 1) {
    nextButton2.classList.add("disabled");
  } else {
    nextButton2.classList.remove("disabled");
  }
}

let slideIndex2 = 0; // Startindex des Sliders
const slides2 = document.querySelectorAll(".gallery-slider-insta img"); // Alle Slides
const totalSlides2 = slides2.length; // Gesamtzahl der Slides

document.querySelector(".next-insta").addEventListener("click", () => {
  if (slideIndex2 < totalSlides2 - 1) {
    // Überprüft, ob das aktuelle Bild nicht das letzte ist
    slideIndex2++; // Erhöht den Index nur, wenn es nicht das letzte Bild ist
    updateGalleryTransform2();
  }
});

document.querySelector(".prev-insta").addEventListener("click", () => {
  if (slideIndex2 > 0) {
    // Stellt sicher, dass der Index nicht negativ wird
    slideIndex2--; // Verringert den Index nur, wenn es nicht das erste Bild ist
    updateGalleryTransform2();
  }
});

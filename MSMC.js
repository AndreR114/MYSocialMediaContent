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

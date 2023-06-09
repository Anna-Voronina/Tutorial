const modal = document.getElementById("mobile-menu-modal");
const openButton = document.getElementById("open-menu-burger");
const closeButton = document.getElementById("close-mobile-modal-btn");

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

function openModal() {
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  openButton.classList.add("hidden");
  closeButton.classList.remove("hidden");
}

function closeModal() {
  modal.classList.remove("open");
  document.body.style.overflow = "auto";
  closeButton.classList.add("hidden");
  openButton.classList.remove("hidden");
}

window.addEventListener("DOMContentLoaded", function() {
  closeButton.classList.add("hidden");
});








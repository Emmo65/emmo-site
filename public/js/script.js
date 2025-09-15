// ========== LIGHTBOX ==========
function openLightbox(src) {
  const img = document.getElementById("lightbox-img");
  if (img) img.src = src;
  const box = document.getElementById("lightbox");
  if (box) box.style.display = "flex";
}

function closeLightbox() {
  const box = document.getElementById("lightbox");
  if (box) box.style.display = "none";
}

// ========== LOGIN MODAL ==========
function openLogin() {
  const modal = document.getElementById("login-modal");
  if (modal) modal.style.display = "flex";
}

function closeLogin() {
  const modal = document.getElementById("login-modal");
  if (modal) modal.style.display = "none";
}

// Modal schließen, wenn man außerhalb klickt
window.addEventListener("click", function (e) {
  const modal = document.getElementById("login-modal");
  if (modal && e.target === modal) {
    modal.style.display = "none";
  }
});

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
// Mobile Burger-Menü
(function () {
  const btn = document.querySelector('.burger');
  const nav = document.getElementById('primary-nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    btn.classList.toggle('active', isOpen);
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    // optional: Scroll lock bei offenem Menü
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Menü schließen, wenn Link geklickt wird (UX)
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      btn.classList.remove('active');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
})();

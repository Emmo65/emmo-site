const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

// Canvas-Größe anpassen
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

// Matrix-Setup
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

function drawMatrix() {
  // Hintergrund leicht abdunkeln → ergibt den "Regen"-Effekt
  ctx.fillStyle = "rgba(13, 17, 23, 0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00FF41"; // typisches Matrix-Grün
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = String.fromCharCode(0x30A0 + Math.random() * 96);
    const x = i * fontSize;
    const y = drops[i] * fontSize;

    ctx.fillText(text, x, y);

    // zufälliger Reset, damit Zeichen unterschiedlich lang laufen
    if (y > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(drawMatrix, 50);

// Responsive: bei Resize neu berechnen
window.addEventListener("resize", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
});

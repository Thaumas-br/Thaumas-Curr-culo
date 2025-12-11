// Efeito de digitação
const text = "Olá, eu sou Thaumas Miguel 👋";
let i = 0;
function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}
window.onload = typing;

// Animação ao rolar (revelar seções)
window.addEventListener("scroll", () => {
  document.querySelectorAll(".card").forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add("visible");
    }
  });
});

const uploadInput = document.getElementById("uploadPhoto");
const preview = document.getElementById("photoPreview");

uploadInput.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            preview.style.backgroundImage = `url('${e.target.result}')`;
            preview.textContent = "";
            preview.style.backgroundSize = "cover";
        };

        reader.readAsDataURL(file);
    }
});

// Animación al hacer scroll
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

cards.forEach(card => observer.observe(card));

// Botón de datos curiosos
document.querySelectorAll(".info-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const dato = btn.nextElementSibling;
    dato.style.display = dato.style.display === "block" ? "none" : "block";
  });
});

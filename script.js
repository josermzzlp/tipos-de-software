const btn = document.getElementById("btnReveal");
const extra = document.getElementById("extraText");

btn.addEventListener("click", () => {
  extra.classList.toggle("hidden");
  btn.textContent = extra.classList.contains("hidden") ? "Mostrar tip extra ✔" : "Ocultar tip ❌";
});

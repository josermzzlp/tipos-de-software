const boton = document.getElementById("btn");
let oscuro = false;

boton.addEventListener("click", () => {
    if (!oscuro) {
        document.body.style.background = "#d2dae2";
        oscuro = true;
    } else {
        document.body.style.background = "#f4f4f4";
        oscuro = false;
    }
});

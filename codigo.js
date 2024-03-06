document.addEventListener("DOMContentLoaded", function() {
    const botonAzul = document.getElementById("boton-azul");
    const botonRojo = document.getElementById("boton-rojo");

    const imagenesSecundarias = document.querySelectorAll(".ImagenSecundaria img");

    botonAzul.addEventListener("click", function() {
        imagenesSecundarias.forEach(function(imagen) {
            imagen.style.animation = "none";
            setTimeout(function() {
                imagen.style.animation = "example2 2s ease-in-out forwards";
            }, 100);
        });
    });

    botonRojo.addEventListener("click", function() {
        window.location.href = "https://www.youtube.com/watch?v=_kihwgulr2A"; // Aquí puedes cambiar el enlace por el que desees
    });
});

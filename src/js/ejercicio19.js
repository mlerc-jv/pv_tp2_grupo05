import { obtenerTexto } from "../services/serviceEjercicio19.js";

document.addEventListener('DOMContentLoaded', () => {

    const boton = document.querySelector('#btnCambiar');
    const parrafo = document.querySelector('#texto');

    let estado = 0;

    boton.addEventListener('click', () => {

        estado++;

        if (estado > 2) {
            estado = 0;
        }

        parrafo.textContent = obtenerTexto(estado);

    });

});
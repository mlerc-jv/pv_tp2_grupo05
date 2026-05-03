import { obtenerCapital, mostrarResultado } from "../services/servicesEjercicio21.js";

document.addEventListener('DOMContentLoaded', () => {

    const selectPais = document.querySelector('#pais');
    const selectCapital = document.querySelector('#capital');
    const contenedorResultado = document.querySelector('#resultado');

    selectPais.addEventListener('change', () => {

        const paisSeleccionado = selectPais.value;

        const capitalCorrespondiente = obtenerCapital(paisSeleccionado);

        selectCapital.value = capitalCorrespondiente;

        console.log(`País seleccionado: ${paisSeleccionado}`);
        console.log(`Capital seleccionada: ${capitalCorrespondiente}`);

        contenedorResultado.innerHTML = '';

        contenedorResultado.appendChild(
            mostrarResultado(paisSeleccionado, capitalCorrespondiente)
        );

    });

});
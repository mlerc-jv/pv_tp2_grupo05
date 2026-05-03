import { mostrar } from "../services/servicesEjercicio22.js";

const input=document.getElementById("inputTexto");
const parrafo=document.getElementById("mostrarTexto");

input.addEventListener("input", () => {
    mostrar(input, parrafo);
});
import { mostrarEmocion } from "../services/servicesEjercicio25.js";

document.addEventListener('DOMContentLoaded', () =>{
   
    const boton=document.getElementById("btn");
    const input=document.getElementById("emocion");
    const mensaje=document.getElementById("mensaje");
    const img=document.getElementById("personaje");

    boton.addEventListener("click", ()=> {
       const valor=input.value;
       const resultado=mostrarEmocion(valor);
       
       document.body.style.backgroundColor=resultado.color;
       mensaje.textContent=resultado.mensaje;
       
       img.src= resultado.imagen;
       console.log(resultado.mensaje);
    });
});
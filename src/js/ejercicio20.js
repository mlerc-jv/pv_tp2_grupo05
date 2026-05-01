//logica de negocio
import { guardarEstudianteEnArray, mostrarEstudiante } from "../services/servicesEjercicio20.js";
import { servicioMeruviaJimena } from "../services/serviceMeruviaJimena.js";
import { servicioCarrilloAbril } from "../services/serviceCarrilloAbril.js";
import { servicioCabreraMaia } from "../services/serviceCabreraMaia.js";
import { servicioAramayoLourdes } from "../services/serviceAramayoLourdes.js";
import { servicioAntonellaMaidana } from "../services/serviceAntonellaMaidana.js"; 
import { servicioQuispeGuadalupe } from "../services/serviceQuispeGuadalupe.js"; 
//Esperar al DOMgit
document.addEventListener('DOMContentLoaded', () =>{
    
   const formulario = document.querySelector('#form-carga');
    const contenedorResultado = document.querySelector('#resultado');
    //const listaEstudiantes = [];

    console.log(formulario);
    //capturar datos
    formulario.addEventListener('submit',(evento) => {
      evento.preventDefault();

     const inputNombre = document.querySelector('#nombre');
     const inputApellido = document.querySelector('#apellido');
     const inputLU = document.querySelector('#lu');

     const nombreVal = inputNombre.value;
     const apellidoVal = inputApellido.value;
     const luVal = inputLU.value;
     //console.log(inputNombre.id);

     const estudiante = {
        id: Date.now(),
        nombre: nombreVal,
        apellido: apellidoVal,
        lu: luVal
     };
     //llamada al service
     guardarEstudianteEnArray(estudiante);

     /*listaEstudiantes.unshift(estudiante);

     console.log(listaEstudiantes.find(
      est => (est.lu == "234") // hay return implicito
      (estudiante)=>{estudiante.lu == "234"} necesita return
     )); 
     console.log(listaEstudiantes); */

     //crear el nuevo elemento vacio

      contenedorResultado.innerHTML = '';

    /* const fichaInfo = document.createElement('div');
     fichaInfo.className = 'info-box';

     fichaInfo.innerHTML = `
        <h3>los datos ingresados son: </h3>
        <p><strong>Nombre:</strong> ${nombreVal}</p>
        <p><strong>Apellido:</strong> ${apellidoVal}</p>
        <p><strong>Libreta Universitaria:</strong> ${luVal}</p>
     `; */

       //4. agregar el elemento al DOM
       contenedorResultado.appendChild(mostrarEstudiante(nombreVal, apellidoVal, luVal));

       formulario.reset();

    });
});

//puede tener servicios o funciones
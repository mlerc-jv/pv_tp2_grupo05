const listaEstudiantes = [];
export const guardarEstudianteEnArray = (estudiante) => {
      listaEstudiantes.unshift(estudiante);
      console.log(listaEstudiantes);

      return (listaEstudiantes);
};

export const otraFuncion =  () =>{

};
export const mostrarEstudiante =(a, b, c) => {
    const fichaInfo =document.createElement('div');
    fichaInfo.className = 'info-box';

    fichaInfo.innerHTML = `
        <h3>los datos ingresados son: </h3>
        <p><strong>Nombre:</strong> ${a}</p>
        <p><strong>Apellido:</strong> ${b}</p>
        <p><strong>Libreta Universitaria:</strong> ${c}</p>
    `;
    return fichaInfo;
};
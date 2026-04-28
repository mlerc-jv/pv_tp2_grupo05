const edades = [4,15,22,7,48,29,51,12,31];
console.log(`Edades: ${edades}`);

const calcularProm = (edades) =>{
    let suma = 0;
    for (let i=0; i<edades.length;i++){
        console.log(`edad: ${edades[i]}`);
        suma +=edades[i];
    }
    const prom=suma/edades.length;
    return prom;
};
const resultado=calcularProm(edades);
console.log(`el promedio de las edades es: ${resultado}`);
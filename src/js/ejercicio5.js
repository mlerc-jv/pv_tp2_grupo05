const horas = 2;
const minutos = 30;

console.log(`Horas: ${horas}`);
console.log(`Minutos: ${minutos}`);

const convertirSegundos=(horas, minutos) => {
    const total=(horas * 3600)+(minutos * 60);
    return total;
};

const resultado=convertirSegundos(horas, minutos);
console.log(`Total en segundos: ${resultado}`);
const sumarRango = (inicio, fin) => {
    let suma = 0;

    for (let i = inicio; i <= fin; i++) {
        suma += i;
    }

    return suma;
};

const resultado = sumarRango(1, 8);

console.log(`Suma del rango: ${resultado}`);
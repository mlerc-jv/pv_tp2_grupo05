const notas = [8, 5, 10, 6, 4, 7, 9, 3, 6, 2];

let suma = 0;
let aprobadas = 0;

console.log("Todas las notas:");
for (let nota of notas) {
    console.log(nota);
}

console.log("Notas aprobadas:");
for (let nota of notas) {
    if (nota >= 6) {
        console.log(nota);
        aprobadas++;
    }
}

console.log("Notas desaprobadas:");
for (let nota of notas) {
    if (nota < 6) {
        console.log(nota);
    }
}

for (let nota of notas) {
    suma += nota;
}

let promedio = suma / notas.length;

console.log(`Promedio general: ${promedio}`);
console.log(`Cantidad de notas aprobadas: ${aprobadas}`);

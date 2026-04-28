const nombres = ["Jime","Abril","Laufey","Mariana","Catalina","Gloria"];

console.log(`Nombres: ${nombres}`);

let nombreLargo = nombres[0];

for(let i = 0; i < nombres.length; i++){
    if(nombres[i].length > nombreLargo.length){
        nombreLargo = nombres[i];
    }
}
console.log(`El nombre mas largo es: ${nombreLargo}`);
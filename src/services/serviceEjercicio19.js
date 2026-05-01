export const obtenerTexto = (estado) => {
    if (estado === 1) {
        return "El texto cambió con éxito";
    } else if (estado === 2) {
        return "Me hiciste click otra vez ";
    } else {
        return "Hola, este es mi texto";
    }
};
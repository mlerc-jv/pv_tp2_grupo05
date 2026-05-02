export const mostrarEmocion=(emocion) => {
    const e=emocion.toLowerCase();

    switch(e){
        case "alegre":
            return{
                color:"#FAFF5E", 
                mensaje: "ERES ALEGRIA!",
                imagen: "/assets/img/alegria.png"
            };
        case "enojo":
            return{
                color:"#b24b36", 
                mensaje: "ERES GRUÑON!",
                imagen: "/assets/img/enojo.png"
            };
        case "triste":
            return{
                color:"#5769DE", 
                mensaje: "ERES TRISTEZA!",
                imagen:"/assets/img/tristeza.png"
            };
        case "miedo":
            return{
                color:"#ba85e0",
                mensaje: "ERES TEMOR!",
                imagen: "/assets/img/miedo.png"
                };
        case "nostalgico":
            return{
                color:"#F5C1EF",
                mensaje: "ERES NOSTALGIA!",
                imagen: "/assets/img/nostalgia.png"
                };
        default:
            return{color:"#E0FFF9", mensaje: "Emocion no encontrada"};
    }
};
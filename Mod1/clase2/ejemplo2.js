//Un jugador elige su personaje en un videojuego. Dependiendo del personaje se 
// muestra su habilidad especial

let personaje = "Arquero"; //Puede ser "Mago", "Guerrero", "Arquero"

switch(personaje){
    case "Mago":
        console.log("EL mago puede lanzar bolas de fuego");
    break;

    case "Guerrero":
        console.log("El guerrero tiene una gran espada poderosa");
    break;

    case "Arquero":
        console.log("El arquero puede disparar flechas a larga distancia");
    break;
    default:
        console.log("Error: Personaje no encontrado");
        break;
};
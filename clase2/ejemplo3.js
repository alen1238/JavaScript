//concepto ciclo For


let juegos = ["FIFA 24", "Minecraf", "GTA V", "Juego 4", "juego 5", "juego6"];
let precios = [50, 20, 30, 45, 46,56];

console.log("Juegos en el carrito de compra: ");

//Recorrer el carrito con un ciclo (bucle) for 
for(let i = 0; i < juegos.length; i++){
    console.log("el juego " + juegos[i] + "- Precio: $" + precios[i]);
}



/*
console.log("el juego " + juegos[0] + "- Precio: $" + precios[0]);
console.log("el juego " + juegos[1] + "- Precio: $" + precios[1]);
console.log("el juego " + juegos[2] + "- Precio: $" + precios[2]);*/
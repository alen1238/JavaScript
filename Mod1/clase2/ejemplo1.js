let usuario = "Estudiante"; // Puede ser "Normal", "VIP", "Premium"
let precio = 1000; //Precio base del producto
let descuento = 0; 

//Aplicar descuento según el tipo de usuario
if(usuario === "Premium"){
    descuento = 20; //20% de decuento
} 
else if(usuario === "VIP"){
    descuento = 10; // 10% de descuento
}
else if(usuario === "Estudiante"){
    descuento = 15; // 15% de decuento
}
else {
    descuento = 0; //sin descuento.
}

 let precioFinal =  precio - (precio * descuento / 100);

 console.log("Usuario: " + usuario);
console.log("Descuento aplicado: " + descuento + "%");
console.log("el total a pagar es: " + precioFinal);  

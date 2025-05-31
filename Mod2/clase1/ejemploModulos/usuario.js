const {sumar} = require('./operaciones');

console.log("Suma de 5 + 4: " + sumar(4,5));

const os = require('os');
console.log("Sistema operativo:", os.platform());
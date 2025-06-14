const express = require('express');
const app = express();

let contador = 0;

function contarPeticiones(req, res,next){
    contador++;
    console.log(`Número de peticiones: ${contador}`);
    next();
}

app.use(contarPeticiones);//middleware a nivel global

app.get('/ruta1', (req, res)=>{
    res.send('<h1> Ruta 1 </h1>');
});

app.get('/ruta2', (req, res)=>{
    res.send('<h1> Ruta 2 </h1>');
});

app.listen(3000, ()=>{
    console.log("Servidor iniciado en http://localhost:3000");
});

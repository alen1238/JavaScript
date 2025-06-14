const express = require('express');
const app = express();
const horaLimite = 20;

// Crear un  servidor que pueda bloquear el acceso después de las 21:00 h de la noche
function bloquearDespuesde9(req, res, next){
    const hora = new Date().getHours();
    if(hora > horaLimite){
        return res.send('Servicio no disponible despues de 10:00pm');
    }
    next();
}

//app.use(bloquearDespuesde9);

app.get('/acceder', (req, res)=>{
    res.send('<h1>Bienvenido al sistema</h1>');
});

app.get('/estudiantes', bloquearDespuesde9, (req, res)=>{
    res.send('<h1>Bienvenido al mdodulo de estudiantes</h1>');
});

app.listen(3000, ()=>{
    console.log("Servidor iniciado en http://localhost:3000");
});

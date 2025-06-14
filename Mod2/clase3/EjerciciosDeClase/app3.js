const express = require('express');
const app = express();

function mid1(req, res, next){
    console.log('Middleware ejecutado');
    next();
}

function manejador(req, res){
    res.send('Ejecutando función normal');
}

app.get('/prueba', mid1, manejador);

app.get('/prueba2', mid1, manejador,cdvsd);


app.listen(3000, ()=>{
    console.log("Servidor iniciado en http://localhost:3000");
});

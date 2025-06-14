const express = require('express');
const app = express();

function loguearRuta(req, res, next){
    console.log(`Peticion a: ${req.url}`);
    next(); //muy importante
}

app.use(loguearRuta); //Siempre use esta función aquí, de primero! Middleware GLOBAL

app.get('/hola', (req, res)=>{
    console.log('Entrando a /hola');
    res.send('<h1>Hola estudiantes JS!</h1>');
});

app.get('/adios', (req, res)=> {
     res.send('<h1>Adios estudiantes JS!</h1>');
});

app.get('/luego', (req, res)=> {
     res.send('<h1>Adios estudiantes JS!</h1>');
});

app.listen(3000, ()=>{
    console.log("Servidor iniciado en http://localhost:3000");
});

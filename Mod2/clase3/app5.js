const express = require('express');
const app = express();

const apiKey = '2385';

function verificarApiKey(req, res, next){
    if(!apiKey){
        return res.status(401).send('Acceso denegado. No se encontró Api Key');
    }
    if(apiKey !== '2384'){
        return res.status(403).send('API KEY inválida. Acces restringido');
    }
    console.log('API KEY válida');
    next();
}

app.use(verificarApiKey);

app.get('/perfil', (req, res)=>{
    res.send('Bienvenido a su perfil. ya puede descargar su recurso');
});

app.listen(3000, ()=>{
    console.log("Servidor iniciado en http://localhost:3000");
});

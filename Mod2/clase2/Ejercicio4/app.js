const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());
app.use(express.static('public'));

//Ruta GET /peliculas/:nombre
app.get('/peliculas/:nombre', (req, res) =>{
    const nombre = req.params.nombre;
    res.json({mensaje: `Buscando la película: ${nombre}`});
});

app.post('/peliculas', (req, res)=>{
    const {titulo} = req.body;
    if(!titulo){
        return res.status(400).json({error:'El titulo es obligatorio'});
    }
    res.json({mensaje: 'Pelicula recibida y procesada: ', titulo});
});

app.listen(port, ()=>{
    console.log(`Servidor escuchando en http://localhost:${port}`);
})


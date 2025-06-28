const express = require('express');
const mongoose = require('mongoose');
const Usuario = require('./models/usuario');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/appMongoose')
    .then(()=> console.log('Conectado a mongodb'))
    .catch(err => console.error('Error en la conexion ', err));

app.post('/usuarios', async (req, res)=>{
    try {
       const usuario = new Usuario(req.body); 
       const guardado = await usuario.save();
       res.status(201).json(guardado);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

app.listen(3000, () => console.log('Servidor express escuchando en http://localhost:3000'));






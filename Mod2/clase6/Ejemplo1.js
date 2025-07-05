const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/tienda');

const zapatoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        minLength: [3, 'El nombre debe tener al menos 3 caracteres']
    },
    talla: {
        type: Number,
        required: [true, 'La talla es obligatoria'],
        min: [20, 'la talla es minimo 20'],
        max: [50, 'la talla máxima es 50']
    },
    precio: {
        type: Number,
        required: [true, 'El precio es obligatorio'],
        min: [1, 'El precio debe ser mayor a cero(0)']
    },
    disponible: {
      type: Boolean,
      default: true
    }
});

//creamos el modelo
const Zapato = mongoose.model('Zapato', zapatoSchema);

app.post('/zapatos', async (req, res)=>{
    try {
         const zapato = new Zapato(req.body);
         await zapato.save();
         res.send('Zapato guardado');
    } catch (error) {
        res.status(400).json({error: error.message})
    }
   
});

app.get('/zapatos', async (req, res)=>{
    const zapatos = await Zapato.find();
    res.json(zapatos);
});

app.listen(3000, ()=>{
    console.log('Servidor corriendo en http://localhost:3000');
});

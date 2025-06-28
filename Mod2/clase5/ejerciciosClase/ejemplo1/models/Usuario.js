const {Schema, model} = require('mongoose');

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        minlength: 2
    },
    correo: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^[\w.-]+@[\w-]+\.[a-z]{2,}$/i,
            'correo inválido'
        ]
    },
    edad: {
        type: Number,
        min: 1,
        max: 140
    }
});

module.exports = model('Usuario', usuarioSchema);
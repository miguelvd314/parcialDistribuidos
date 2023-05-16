const mongoose = require('mongoose');

const reservaSchema = mongoose.Schema({
    restaurante: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    },
    hora: {
        type: String,
        required: true
    },
    cantidad: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Reserva', reservaSchema);
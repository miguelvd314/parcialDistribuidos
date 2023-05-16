const express = require("express");
const reservaSchema = require("../models/reserva");

const router = express.Router();

//crear usuario
router.post('/reserva', (req, res) =>{
    const  user = reservaSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
});

//obtener todos los usuarios
router.get('/reserva', (req, res) =>{
    reservaSchema
    .find()
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
});

//obtener un usuario en especifico
router.get('/reserva/:id', (req, res) =>{
    const { id } = req.params;
    reservaSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
});

//Actualizar usuario
router.put('/reserva/:id', (req, res) =>{
    const { id } = req.params;
    const {restaurante, fecha, hora, cantidad, estado} = req.body;
    reservaSchema
    .updateOne({ _id: id},{ $set: {restaurante, fecha, hora, cantidad, estado}})
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
});

//Eliminar usuario
router.delete('/reserva/:id', (req, res) =>{
    const { id } = req.params;
    reservaSchema
    .deleteOne({ _id: id})
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
});

module.exports = router;
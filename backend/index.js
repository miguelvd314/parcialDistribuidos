const express = require('express');
const mongoose = require('mongoose');
require ("dotenv").config();
const reservaRoutes = require("./routes/reserva");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8000;

//middleware
app.use(cors())
app.use(express.json());
app.use('/api', reservaRoutes);

//routers rutas
app.get("/", (req, res)=>{
    res.send("Bienvenidos a la API");
});

mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Conectado a mongodb atlas"))
.catch((error)=> console.error(error));

app.listen(port, () => console.log('servidor esta funcionando', port));
const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "alonso_24122005_",
    database: "SHIZU"
})


//Agregar perrito a la base de datos:
app.post("/agregarPerrito", (req, res)=>{
    const {nombre} = req.body; //El campo.
    db.query('INSERT INTO perrito (nombre) VALUES(?)', [nombre], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({error: "Error en el servidor."})
        }else{
            res.send(results);
        }
    })
})


//Para iniciar el puerto:
const puerto = 3002;
app.listen(puerto, ()=>{
    console.log("Puerto activado.")
})
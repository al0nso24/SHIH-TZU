const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT
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
const puerto = process.env.PORT || 3002;

app.listen(puerto, () => {
    console.log(`Servidor corriendo en el puerto ${puerto}`);
});
const { query } = require('express');
var express = require('express');
var router = express.Router();
var database = require('../../database/mysql')

/**
 * Insertar sedes
 * Nombre de la ciudad
 */
router.post("/insertar", async (req, res, next) => {
    var body = req.body;
    if (body.rol == 1) {
        var query = `INSERT INTO gym.tbl_sedes(nombre,id_ciudad) VALUES  ('${body.nombre}' ,${body.id_ciudad});`;
        console.log("Query", query);
        database.query(query, (err) => {
            if (err) {
                res.send("La ciudad enviada no existe")
            } else {
                console.log("body", body);
                res.send("Sede creada correctamente");
            }
        })

    } else {
        res.send("No tiene permiso para crear sedes")
    }

});



module.exports = router;

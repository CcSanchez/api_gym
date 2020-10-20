const { query } = require('express');
var express = require('express');
var router = express.Router();
var database = require('../../database/mysql')

/**
 * Insertar ciudad
 * Nombre de la ciudad
 */
router.post("/insertar", async (req, res, next) => {
    var body = req.body;
    if (body.rol == 1) {
        var query = `INSERT INTO gym.tbl_ciudades(nombre) VALUES  ('${body.nombre}' );`;
        console.log("Query", query);
        database.query(query, (err) => {
            if (err) {
                throw err;
            } else {
                console.log("body", body);
                res.send("Ciudad creada correctamente");
            }
        })

    } else {
        res.send("No tiene permiso para crear ciudades")
    }

});



module.exports = router;

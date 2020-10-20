const { query } = require('express');
var express = require('express');
var router = express.Router();
var database = require('../../database/mysql')

/**
 * Obtiene los usuarios
 * query.sede = es la sede a buscar los usuarios
 */
router.get('/', function (req, res, next) {
  var query = `SELECT * FROM gym.tbl_usuarios where sede = '${req.query.sede}';`;
  console.log("Query", query);
  database.query(query, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log("Result: " + result);
      res.send(result);
    }
  })
});

/**
 * Insertar usuario
 * PARAMETROS PARA INSERCION
 * nombre = nombre del usuario;
 * apellido = apellido del usuario;
 * contrasena = contrasena seleccionada por el usuario
 * sede = sede en la cual se crea el usuario
 */
router.post("/insertar", async (req, res, next) => {
  var body = req.body;
  var query = `INSERT INTO gym.tbl_usuarios(usuario,nombre,apellido,rol,contrasena,sede ) VALUES  ('${body.usuario}', '${body.nombre}', '${body.apellido}', 2, '${body.contrasena}','${body.sede}' );`;
  console.log("Query", query);
  database.query(query, (err) => {
    if (err) {
      throw err;
    } else {
      console.log("body", body);
      res.send("Insertado correctamente");
    }
  })

});



module.exports = router;

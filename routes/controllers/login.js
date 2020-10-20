var express = require('express');
var router = express.Router();
var database = require('../../database/mysql')

/* GET users listing. */
router.post('/', function (req, res, next) {
  var body = req.body;
  var query = `SELECT * FROM gym.tbl_usuarios where usuario = '${body.usuario}' AND contrasena = '${body.contrasena}' `;
  console.log(query);
  database.query(query, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log("Result: " + result);
      query=`SELECT rol FROM gym.tbl_usuarios where usuario = '${body.usuario}'`
      console.log(query);
      database.query(query, (err, result) => {
        if (err) {
          throw err;
        } else {
          console.log("Result: " + result);
           res.send(result)
        }
      })
    }
  })

});

module.exports = router;
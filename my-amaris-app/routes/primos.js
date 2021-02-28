var express = require('express');
var router = express.Router();
var Calculo = require('../clases/CalculoPrimarios.js');
/* GET home page. */
router.get('/', function(req, res, next) {
    var resultPrimarios = new Calculo();
    res.render('result', { title: 'Resultado de calculo de numeros primos:', results: resultPrimarios.primarios(req.query.numero) });
});

module.exports = router;
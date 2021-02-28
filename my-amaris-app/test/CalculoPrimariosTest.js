//const assert = require('assert');
var chai = require('chai');
var assert = chai.assert;
var Calculo = require('../clases/CalculoPrimarios.js');

describe('calculoPrimarios', function() {
    var resultPrimarios = new Calculo();

    describe('#primarios', function() {
        it("Los numeros primarios resultantes estan correctos", function() {
            assert.deepEqual(resultPrimarios.primarios(10), [ 2, 3, 5, 7 ]);
        });
    });
});
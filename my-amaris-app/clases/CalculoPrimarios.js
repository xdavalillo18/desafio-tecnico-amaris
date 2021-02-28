module.exports = class CalculoPrimarios {
    constructor() {
        console.log('Nueva instancia de Calculo Primarios');  
    }
    primarios(numero) {
        console.log('CalculoPrimarios');
        let rango = numero;
        let j = 2;
        let numerosPrimos = [];
        var primo = ((numero) => {

            for (var i = 2; i < numero; i++) {
                if (numero % i === 0) {
                return false;
                }
            }
            
            return numero !== 1;
        });  
        
        for (; j < rango; j++) {
            if (primo(j)) {
                numerosPrimos.push(j);
            }
        }
        console.log('numeros primarios: ', numerosPrimos);
        return numerosPrimos;
    }
}
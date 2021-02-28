module.exports = class CalculoPrimarios {
    constructor() {}
    
    primarios(numero) {
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
        return numerosPrimos;
    }
}
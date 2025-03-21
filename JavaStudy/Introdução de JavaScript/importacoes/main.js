

const {gets, print}= require('./functions auxiliares.js');

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}

let Mariovalor = -1

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];

    if (numeroSorteado > Mariovalor) {
        Mariovalor = numeroSorteado;        
    }
}

print(Mariovalor);
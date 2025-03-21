/* Tentando fazer a conta que fizemos de imc com funções agr */

const peso =  99
const altura = 1.65

function calcularIMC(peso, altura) {
    return peso / Math.pow(altura,2);

}

function classificarIMC(imc) {

    if (imc < 18.5) {   
        return "Abaixo do peso.";   
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal.";    
    } else if (imc >= 25 && imc < 30) {
        return "Sobrepeso.";    
    } else if (imc >= 30 && imc < 40) {
        return "Obesidade.";    
    } else {
        return "Obesidade morbida.";    
    }
    } 

    const imc = calcularIMC(peso, altura);
     console.log("Seu imc é "+ imc.toFixed(2)+ " e voce esta com "+classificarIMC(imc));
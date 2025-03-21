const peso =  99
const altura = 1.65

const imc = peso / (altura * altura);
console.log("Seu IMC é:", imc.toFixed(2)); // Mostra o IMC com 2 casas decimais

if (imc < 18.5) {   
    console.log("Abaixo do peso.");
} else if (imc >= 18.5 && imc < 25) {    
    console.log("Peso normal.");
} else if (imc >= 25 && imc < 30) {      
    console.log("Sobrepeso.");
} else if (imc >= 30 && imc < 40) {     
    console.log("Obesidade.");    
} else {
    console.log("Obesidade mórbida.");
}                                         


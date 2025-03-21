/* Tentando fazer um sistema de média de notas com estrutura de repetição */

const notas = [];

notas.push(10);
notas.push(8);
notas.push(6);
notas.push(9);
notas.push(7);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length; // Correção aqui: 
// Você está tentando calcular a média,
//  mas está usando media antes de definir seu valor. 
// O correto seria dividir soma pelo número de notas.

console.log("A média das notas é:", media.toFixed(2));

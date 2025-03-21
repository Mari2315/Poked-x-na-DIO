/* Crie uma classe para representar pessoas.
Para cada pessao teremos, nome, idade, e altura, as pessoas devem ter a 
capaciade de dizer seu IMC peso / (altura * altura);
Instancia uma pessao chamada josé que tenha 20 anos, 1.75 de altura e 80kg de peso;
 peça ao josé para dizer seu IMC.
*/ 

class Pessoa{
    constructor(nome, idade, altura, peso){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
    calcularIMC(){
        return this.peso / (this.altura * this.altura);     
    }    
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

const jose = new Pessoa("Jose", 20, 1.75, 80);
const imc = jose.calcularIMC();

console.log("Meu nome é " +jose.nome+ ", meu IMC é "+ imc.toFixed(2)+ " e estou com "+classificarIMC(imc));

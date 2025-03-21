// Classe para representar carros
class Carro {
    constructor(cor, marca, gastoMedioCombustivel) {
        this.cor = cor;
        this.marca = marca;
        this.gastoMedioCombustivel = gastoMedioCombustivel;
    }
    
    calcularGasto(km, precoCombustivel) {
        return km * precoCombustivel * this.gastoMedioCombustivel;
    }
}          

const BMW = new Carro("vermelho", "BMW", 1/12);  // Gasto: 1L/12km
const Fiat = new Carro("azul", "Fiat", 2/50);    // Gasto: 2L/50km

// Mostrando informações dos carros
console.log('BMW:', BMW);
console.log('Fiat:', Fiat);

// Calculando gasto para uma viagem de 100km com combustível a R$ 5,00
const distancia = 100;
const precoCombustivel = 5;

console.log('\nPara uma viagem de ' + distancia + 'km com combustível a R$' + precoCombustivel + ':');
console.log('Gasto da BMW: R$' + BMW.calcularGasto(distancia, precoCombustivel).toFixed(2));
console.log('Gasto do Fiat: R$' + Fiat.calcularGasto(distancia, precoCombustivel).toFixed(2));

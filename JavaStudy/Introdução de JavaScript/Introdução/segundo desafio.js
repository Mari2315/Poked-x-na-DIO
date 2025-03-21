
const etanol = 3.90;
const gasolina = 5.64;
let gasto_km = 1;
let dist_km = 100;
const tipo_combustivel = 'etanol';


if (tipo_combustivel === 'etanol') {
    let preco_final = (etanol + gasto_km) * dist_km;
    console.log("O preço final com etanol é: R$", preco_final.toFixed(2));
} else if (tipo_combustivel === 'gasolina') {
    let preco_final = (gasolina + gasto_km) * dist_km;
    console.log("O preço final com gasolina é: R$", preco_final.toFixed(2));
} else {
    console.log("Tipo de combustível inválido!");
}


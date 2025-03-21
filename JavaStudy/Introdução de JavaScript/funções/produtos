// Função para calcular juros
function calcularJuros(preco, taxa) {
    return preco + (preco * taxa);
}

// Função para calcular desconto
function calcularDesconto(preco, taxa) {
    return preco - (preco * taxa);
}

// Função principal para processar o pagamento
function processarPagamento(preco, pagamento) {
    if (pagamento === 'debito') {
        // 10% de desconto no débito
        console.log('O valor final do produto é: R$', calcularDesconto(preco, 0.1).toFixed(2));
    } 
    else if (pagamento === 'dinheiro') {
        // 15% de desconto no dinheiro
        console.log('O valor final do produto é: R$', calcularDesconto(preco, 0.15).toFixed(2));
    }
    else if (pagamento === 'pix') {
        // 15% de desconto no pix
        console.log('O valor final do produto é: R$', calcularDesconto(preco, 0.15).toFixed(2));
    }
    else if (pagamento === 'credito') {
        // 10% de juros no crédito
        console.log('O valor final do produto é: R$', calcularJuros(preco, 0.1).toFixed(2));
    }
    else {
        console.log('Forma de pagamento inválida!');
    }
}

// Exemplo de uso:
const preco = 100; // Preço do produto
const formaPagamento = 'credito'; // Forma de pagamento

processarPagamento(preco, formaPagamento);
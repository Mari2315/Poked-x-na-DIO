//*or pago de um produto.js*//

const preco = 15.99
const dindin = preco-(10/100);
const pix = preco-(10/100); 
const crédito = preco-(10/100);
const debito = preco-(10/100);  
const duasv = preco;
const maisdeduasvezes = preco+(10/100); 
const pagamento =  'pix';

if (pagamento === 'dindin') {
    console.log('O valor de final do produto é: R$', dindin.toFixed(2));
}
else if (pagamento === 'pix') {
    console.log('O valor de final do produto é: R$', pix.toFixed(2));
}
else if (pagamento === 'debito') {
    console.log('O valor de final do produto é: R$', debito.toFixed(2));
}
else if (pagamento === 'dasv') {    
    console.log('O valor de final do produto é: R$', duasv.toFixed(2));
}
else if (pagamento === 'maisdeduasvezes') {
    console.log('O valor de final do produto é: R$', maisdeduasvezes.toFixed(2));   
}   
else if (pagamento === 'crédito') { 
    console.log('O valor de final do produto é: R$', crédito.toFixed(2));
}



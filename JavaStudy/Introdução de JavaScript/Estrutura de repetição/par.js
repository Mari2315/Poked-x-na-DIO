/*crie um programa que seja capaaz de 
percorrer uma lista de números e que imprimira 
somente os núemros pares*/

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i]; 

//Cada vez que o for roda, numeros[i] pega o 
    // próximo número da lista e armazena na variável numero.
    //  Isso permite que você use numero dentro do loop para 
    // fazer verificações, como checar se é par.

    if (numero % 2 === 0) {
        console.log(numero);
    }
}

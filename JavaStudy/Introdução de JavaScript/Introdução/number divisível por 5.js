const número = 11;
const númeroDivisivelPor5 = número % 5 === 0;   

if (número === 0 ) {
    console.log("O número é inválido.");
} else if (númeroDivisivelPor5) { /*pode ter vários else if ai vc pode colocar várias coisas pra executar .D. */
    console.log("O número é divisível por 5.");
} else {
    console.log("O número não é divisível por 5.");
}

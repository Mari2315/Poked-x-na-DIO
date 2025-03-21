//média de aluno

const { gets, print } = require('../importacoes/functions auxiliares.js');

const media = gets(); // Convertendo para número

if (media < 5) {
    print('Reprovado');
} else if (media >= 5 && media < 7) {
    print('Recuperação');
} else {
    print('Aprovado');
}



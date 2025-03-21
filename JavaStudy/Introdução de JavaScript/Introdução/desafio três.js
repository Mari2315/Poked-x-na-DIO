//* calculadora de media*//


const n1 = 3.7 //rimeira nota
const n2 = 7 //egunda nota    
const n3 = 9 //erceira nota    
const media = (n1 + n2 + n3)/3  

if (media<5) {
    console.log('Reprovado')
} else if (media>=5 && media<7) {
    console.log('Recuperação')
} else {
    console.log('Aprovado') 
}       
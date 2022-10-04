/*while (condição){
    rotina;
}*/


/*let i = 0;
//Enquanto o número for menorque 10
while (i < 11){
    console.log("2 x " + i + "=" + 2 * 1);
    i++;
}*/

/*let salario = 1000;
while (sallario < 5000) {
    salario += 500;
    console.log("O salario é R$" + salario.toFixed(2));
}*/


const alunas = [
    { aluno: 'Amanda', nota: 10},
    { aluno: 'Simara', nota: 8},
    { aluno: 'Nathy', nota: 9},
    { aluno: 'Vera', nota: 10},
];

let index = 0;
let somaDasNotas = 0;
let totalAlunas = alunas.length;

do  {
    somaDasNotas += alunas[index].nota;
    index++;
} while (index < totalAlunas);

let media = somaDasNotas / totalAlunas;
console.log(media);
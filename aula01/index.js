
/*let idade = 30*/
function votar (idade) {
    if (idade >= 18 && idade < 70) {
        console.log('Voce deve votar e o voto e origatorio')
    } else if (idade >= 16 && idade < 18 || idade >=70) {
        console.log('Voce pode votar, mas nao e obrigatorio')
    } else {
        console.log('Você nao pode votar')
    }

}

votar(40)
votar(18)
votar(65)
votar(90)

/*
function somar (num1, num2 ) {
    const resultado = num1 + num2
    console.log(resultado)
}

function bemVinda(nome, idade) {
    console.log("Bem Vinda " + nome + " Parabéns pelos " + idade + 'anos!')
}
('Math', '32')*/
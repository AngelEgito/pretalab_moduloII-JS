/*const pessoa = {
    nome: 'Angel',
    idade: 33,
    endereco: {
        cidade: 'Olinda',
        estado: 'PE'
    }
    
}

console.log(pessoa.endereco)*/

const alunas = [
    {
        nome: 'Carla',
        nota: 5.5
    },
    {
        nome: 'Lilian',
        nota: 9,
        cidade: 'Salvador'
    },
    {
        nome: 'Dany',
        nota: 7,
        curso: 'Pretalab'
    }
]

alunas.filter((aluna) =>{
    if (nota.nota >= 7){
        console.log(nota.nome + 'foi Aprovada')
    } else{
        console.log(nota.nome + 'foi Reprovada')
    }
})
console.log(alunas.sort())

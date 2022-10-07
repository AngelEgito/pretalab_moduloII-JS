
/*function qualquerCoisa (param1, param2)

//escopo da funcao

const outraCoisa = (param1, param2, param3) => {
    //escopo da funcao
}

qualquerCoisa(1, 2)
outraCoisa(1, 2, 3)*/

//let nome = 'Angel'
// nome = 'AngelicaEgito'

 //fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(resposta => console.log(resposta));
 
//console.log(nome)

fetch('https://cep.awesomeapi.com.br/53150400')
.then(resposta => resposta.json())
.then(dados => console.log(dados.address_name))

//console.log(nome) ESTA É A LINHA QUE ESTAVA CAUSANDO O ERRO!


function qualquer() {
    return 2
}

console.log(qualquer())

const curso = 'PretaLab'

document.getElementById('aula').innerHTML = 'Tralhando com o DOM no JS'

const novaDiv = document.createElement('div')

novaDiv.innerHTML = 'Div criada com DOM'

document.getElementById('aula').appendChild(novaDiv)



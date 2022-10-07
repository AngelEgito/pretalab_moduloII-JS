function bemVinda () {
    //! diz que se não existir algo faça isso. A ! serve como negação.
    if(!document.querySelector('#bemVinda')){
        const mensagem = document.createElement('h1'); //=cria uma tag <h1>
        mensagem.innerHTML = 'Bem Vinda Angel Egito'; //<h1> nova mensagem </h1>
        mensagem.id = 'bemVinda';
        document.querySelector('#mensagem').appendChild(mensagem); //E adiciona na interaçãoa noma mensagem criada. Para chamar um id colocasse o # antes e para chamar uma class colocasse um . antesde chama-la. 
    }
}


function mudaCor () {
    let corFonte = document.querySelector('#bemVinda').style.color
    console.log(corFonte)
    if (corFonte == '' || corFonte == 'rgb(0, 0, 0)' ) {
        document.querySelector('#bemVinda').style.color = '#A020F0'
    } else {
        document.querySelector('#bemVinda').style.color = '#000000'
    }
    
}
//Manipulando o CSS no Js.


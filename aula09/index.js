function escreverMensagem (){
    const textoDigitado = document.getElementById('nome').value 
    
    document.getElementById('bemVinda').innerHTML += textoDigitado

    const bemVinda = document.getElementById('bemVinda').innerHTML
    if(bemVinda.split(':')[1].length > 1){
        document.getElementById('bemVinda').innerHTML = `Bem vinda: ${textoDigitado}`
    }else {
        document.getElementById('bemVinda').innerHTML += textoDigitado
    }
}

function adicionarAluna(){
    const aluna = document.getElementById('aluna').value
    document.getElementById('lista').innerHTML += `<p>${aluna}</p>`
    //const alunaElement = document.createElement('p')
    //alunaElement.innerHTML =aluna
    //document.getElementById('lista').appendChild(alunaElement)
}



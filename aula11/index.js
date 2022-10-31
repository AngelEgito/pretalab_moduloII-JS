function addAluna() {
    let valorAluna = document.getElementById(`nome`)
    
    let idade = document.getElementById(`idade`)

    let div = document.getElementById(`div`)
    
    let lista = document.createElement('ul')
    
    let listaItens = document.createElement('li')
    
    div.append(lista)
    lista.append(listaItens)
    listaItens.append('Nome: ${valorAluna.value} Idade: ${idade.value} anos')
    
}
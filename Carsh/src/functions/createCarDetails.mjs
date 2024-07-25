export let createCarDetails = function(obj){
    const modelo = document.querySelector("#modelo")
    modelo.innerHTML = obj.nome
    const preco = document.querySelector("#preco")
    preco.innerHTML = `R$${obj.preco}`
    const valor = document.querySelector("#valor")
    valor.value = `R$${obj.preco}`
    const imagem = document.querySelector("#imagem")
    imagem.innerHTML = `<img src="${obj.imagemB}" alt="">`
  }
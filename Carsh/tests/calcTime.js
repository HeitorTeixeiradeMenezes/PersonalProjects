let dias = 12
let valorDia = 900
let valor = dias * valorDia
if(dias < 30){
    let desconto = dias * 20
    let descontoAplicado = desconto + valorDia
    let valor = dias * descontoAplicado
    console.log(valor)
} else if(dias >= 30){
    console.log(valor)
}
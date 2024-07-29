const data = new Date();
let formatarData = function(dataNaoFormatada){
    const ano = dataNaoFormatada.getFullYear();
    const mes = ("0" + (dataNaoFormatada.getMonth() + 1)).slice(-2);
    const dia = ("0" + dataNaoFormatada.getDate()).slice(-2)
    const dataFormatada = `${ano}-${mes}-${dia}`
    return dataFormatada
}
function adicionarDias(data, dias) {
    const novaData = new Date(data);
    novaData.setDate(novaData.getDate() + dias);
    return novaData;
}



// console.log(dataFormatada(data).getDay())
// document.getElementById('solicitacao').value = formatarData(data);
// document.getElementById('entrega').value = formatarData(adicionarDias(data, 30));

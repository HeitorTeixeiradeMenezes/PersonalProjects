function aparecerDivNumeros() {
    // Deleta qualquer valor previamente colocado
        document.getElementById("quantidadeNumeros").value = " " 
        document.getElementById("tipoDeAposta").value = " "
        document.getElementById("ultimosConcursos").value = " " 
        document.getElementById("quantidadePalpites").value = " " 
        document.getElementById("quantidadePalpites2").value = " "  
    
    // Esconde qualqer Div ja existente
    let esconderTipoDeAposta = document.querySelector(".tipoDeAposta");
    esconderTipoDeAposta.classList.add("esconder")
    let esconderRecorrencia = document.querySelector(".recorrencia")
    esconderRecorrencia.classList.add("esconder")
    let esconderAleatorio = document.querySelector(".aleatorio")
    esconderAleatorio.classList.add("esconder")
    let esconderSubmit = document.querySelector(".submit")
    esconderSubmit.classList.add("esconder")
    
    //    Faz aparecer a DIV tipoDeAposta
        let aparecerDivNumeros = document.querySelector(".numeros");
        aparecerDivNumeros.classList.remove("esconder");
    }


function aparecerDivTipoDeAposta(){
    // Deleta qualquer valor previamente colocado
    document.getElementById("tipoDeAposta").value = " "
    document.getElementById("ultimosConcursos").value = " " 
    document.getElementById("quantidadePalpites").value = " " 
    document.getElementById("quantidadePalpites2").value = " " 

    // Esconde qualqer Div ja existente
    let esconderRecorrencia = document.querySelector(".recorrencia")
    esconderRecorrencia.classList.add("esconder")
    let esconderAleatorio = document.querySelector(".aleatorio")
    esconderAleatorio.classList.add("esconder")
    let esconderSubmit = document.querySelector(".submit")
    esconderSubmit.classList.add("esconder")

    //    Faz aparecer a DIV tipoDeAposta
    let aparecerDivTipoDeAposta = document.querySelector(".tipoDeAposta")
    aparecerDivTipoDeAposta.classList.remove("esconder")
}


function aparecerAleatorioOuRecorrencia(){
    // Deleta qualquer valor previamente colocado
    document.getElementById("ultimosConcursos").value = " " 
    document.getElementById("quantidadePalpites").value = " " 
    document.getElementById("quantidadePalpites2").value = " " 

    // Esconde qualqer Div ja existente
    let esconderRecorrencia = document.querySelector(".recorrencia")
    esconderRecorrencia.classList.add("esconder")
    let esconderAleatorio = document.querySelector(".aleatorio")
    esconderAleatorio.classList.add("esconder")
    let esconderSubmit = document.querySelector(".submit")
    esconderSubmit.classList.add("esconder")

    //    Faz aparecer a DIV Aleatorio ou Recorrencia
    let valorSelecionado = document.getElementById("tipoDeAposta").value
    let aparecerAleatorioOuRecorrencia = document.querySelector(`.${valorSelecionado}`)
    aparecerAleatorioOuRecorrencia.classList.remove("esconder")
}

function aparecerSubmit(){
    let recorrencia =
    document.getElementById("ultimosConcursos").value.trim() !== "" &&
    document.getElementById("quantidadePalpites").value.trim() !== "";
    let aleatorio = document.getElementById("quantidadePalpites2").value.trim() !== "";

    if(recorrencia || aleatorio){
        let aparecerSubmit = document.querySelector(".submit");
        aparecerSubmit.classList.remove("esconder");
    }else{
        window.alert("Preencha todos os campos para prosseguir")
    }
    
}
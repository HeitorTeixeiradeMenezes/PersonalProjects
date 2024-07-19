let mobiletags = function() {
    let elementos = document.querySelector(".plinks");
    let computedStyle = window.getComputedStyle(elementos);

    if (computedStyle.display === "none") {
        elementos.style.display = "flex";
    } else {
        elementos.style.display = "none";
    }
}

let traduzirPortugues = function(){
    // Header
    let header = document.querySelector("header").querySelectorAll("div")
    header[0].querySelector("p").innerHTML = "Pessoal"
    header[3].querySelector("p").innerHTML = "Pessoal"
    header[4].querySelectorAll("a")[0].innerHTML = "sobre"
    header[4].querySelectorAll("a")[2].innerHTML = "currículo"
    document.querySelector("header").querySelectorAll("a")[4].innerHTML = "Fale Comigo"
    document.querySelector(".plinks").querySelectorAll("a")[0].innerHTML = "sobre"
    document.querySelector(".plinks").querySelectorAll("a")[2].innerHTML = "currículo"
    // Main
    document.querySelector(".hello").querySelector("h1").innerHTML = "Olá, bem-vindo Eu sou <b>Heitor Teixeira</b> Designer UI/UX- Desenvolvedor web front-end"
    document.querySelector(".hire").querySelectorAll("a")[0].innerHTML = "Contrate"
    document.querySelector(".hire").querySelectorAll("a")[1].innerHTML = "Ver Portfolio"
    
    document.querySelectorAll("h2")[0].innerHTML = "Sobre <b>mim</b>"
    document.querySelector(".about").querySelector("p").innerHTML = `Estudante front-end na <b>Universidade Federal de Uberlândia</b>, cursando <b>Sistemas de Informação</b>. Apaixonado por criar experiências web intuitivas através de <b class="normal" style="color: rgba(230, 81, 0, 1);">HTML</b>, <b class="normal" style="color: rgba(31, 153, 237, 1);">CSS</b> e <b class="normal" style="color: rgba(228, 206, 0, 1);">JavaScript</b>. Comprometido em aprimorar habilidades em design e programação para inovar no desenvolvimento web.`;

    document.querySelectorAll("h2")[2].innerHTML = "Baixe o <b>currículo</b>"
}
let traduzirUS = function(){
    const url = "https://heitorteixeirademenezes.github.io/personalProjects/Portifolio/Index.html"
    window.location.href = url
}

let verificar = function(){
    const valor = document.getElementById("traduzir").value
    if(valor === "br"){
        traduzirPortugues()
    } else if(valor === "us"){
        traduzirUS()
    }
}
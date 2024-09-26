let mobiletags = function() {
    let elementos = document.querySelector(".plinks");
    let computedStyle = window.getComputedStyle(elementos);

    if (computedStyle.display === "none") {
        elementos.style.display = "flex";
    } else {
        elementos.style.display = "none";
    }
}

let traduzirUS = function(){
    // Header
    let header = document.querySelector("header").querySelectorAll("div")
    header[0].querySelector("p").innerHTML = "Personal"
    header[3].querySelector("p").innerHTML = "Personal"
    header[4].querySelectorAll("a")[0].innerHTML = "about"
    header[4].querySelectorAll("a")[1].innerHTML = "projects"
    header[4].querySelectorAll("a")[2].innerHTML = "curriculum"
    document.querySelector("header").querySelectorAll("a")[4].innerHTML = "Lets talk"
    document.querySelector(".plinks").querySelectorAll("a")[0].innerHTML = "about"
    document.querySelector(".plinks").querySelectorAll("a")[1].innerHTML = "projects"
    document.querySelector(".plinks").querySelectorAll("a")[2].innerHTML = "curriculum"
    // Main
    document.querySelector(".hello").querySelector("h1").innerHTML = "<h1>Hello welcome I’m <b>Heitor Teixeira </b>UI/UX Designer-Front-end Web Developer</h1>"
    document.querySelector(".hire").querySelectorAll("a")[0].innerHTML = "Hire me"
    document.querySelector(".hire").querySelectorAll("a")[1].innerHTML = "See portfolio"
    
    document.querySelectorAll("h2")[0].innerHTML = "About <b>me</b>"
    document.querySelector(".about").querySelector("p").innerHTML = `Front-end student at <b>Universidade Federal de Uberlândia</b>, studying <b>Information Systems</b>.
                     Passionate about creating intuitive web experiences through <b class="normal" style="color: rgba(230, 81, 0, 1);">HTML</b>,
                      <b class="normal" style="color: rgba(31, 153, 237, 1);">CSS</b>, and <b class="normal" style="color: rgba(228, 206, 0, 1);">JavaScript</b>. Committed
                       to honing skills in design and scripting to innovate in web development.`

    document.querySelectorAll("h2")[1].innerHTML = "Projects"
    document.querySelectorAll("h2")[2].innerHTML = "Download the <b>curriculum</b>"
}
let traduzirBR = function(){
    const url = "https://heitorteixeirademenezes.github.io/personalProjects/Portifolio/Index.html"
    window.location.href = url
}

let verificar = function(){
    const valor = document.getElementById("traduzir").value
    if(valor === "us"){
        traduzirUS()
    } else if(valor === "br"){
        traduzirBR()
    }
}
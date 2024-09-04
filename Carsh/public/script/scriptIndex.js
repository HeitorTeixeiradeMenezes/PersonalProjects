let menuphone = document.getElementById("menu-phone");
const header = document.querySelector("header")
const linksPhone = document.querySelector(".links-phone");
linksPhone.style.display = "none"
addEventListener("click", function(e){
    if(linksPhone.style.display == "block" && (header.contains(e.target) == false && linksPhone.contains(e.target) == false)){
        linksPhone.style.display = "none" ;
        console.log("cu")
        console.log(e.target)
    }
})
menuphone.addEventListener("click", function(e){
    if(linksPhone.style.display == "none" ){
        linksPhone.style.display = "block" 
    } else if(linksPhone.style.display == "block"){
        linksPhone.style.display = "none" 
    }
})
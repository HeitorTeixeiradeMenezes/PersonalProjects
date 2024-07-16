export const parametro = function(a){
    const param = a.getAttribute("modelo");
    window.location.href = `carDetails.html?modelo=${encodeURIComponent(param)}`;
}
export const buttonOnClick = function(e) {
    const container = document.querySelector("#container");
    let buttonContainer = container.querySelectorAll("button");
    const elementsContainer = document.querySelectorAll(".element");
    buttonContainer = Array.from(buttonContainer);

    if (e.target && e.target.matches('button')) { 
        const indexElement = buttonContainer.indexOf(e.target);
        const selectedElement = elementsContainer[indexElement];
        parametro(selectedElement); 
    } else {
        throw new Error("Elemento clicado não é um botão");
    }
};
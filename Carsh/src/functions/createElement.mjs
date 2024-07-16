import { carModels } from '../db/Objects.mjs'
export const createElement = function(obj){
    const elemetDiv = document.createElement("div")
    elemetDiv.className = "element"
    elemetDiv.setAttribute("modelo", `${obj.modelo}`)
    container.appendChild(elemetDiv)
        const divTitle = document.createElement("div")
        divTitle.className = "title"
        elemetDiv.appendChild(divTitle)
            const h3 = document.createElement("h3")
            h3.textContent = obj.nome
            divTitle.appendChild(h3)
        const divContent = document.createElement("div")
        divContent.className = "content"
        elemetDiv.appendChild(divContent)
            const divText = document.createElement("div")
            divText.className = "text"
            divContent.appendChild(divText)
                const textP = document.createElement("p")
                textP.innerHTML = `A PARTIR<br><span class="size2">DE </span><span class="size3">R$${obj.preco}</span><span class="size1">/dia</span></p>`
                divText.appendChild(textP)
                const textButton = document.createElement("button")
                textButton.setAttribute("type", "button")
                textButton.textContent = "Alugar"
                divText.appendChild(textButton)
            const divImage = document.createElement("div")
            divImage.className = "image"
            divContent.appendChild(divImage)
                const imageDiv = document.createElement("img")
                imageDiv.setAttribute("src", `${obj.imagem}`)
                imageDiv.setAttribute("alt", "")
                divImage.appendChild(imageDiv)
}               
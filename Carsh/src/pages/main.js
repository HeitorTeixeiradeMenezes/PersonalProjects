import { carModels } from "../db/Objects.mjs"
import { createElement } from "../functions/createElement.mjs"
import { parametro, buttonOnClick } from "../functions/passarParametro.mjs"

const container = document.querySelector("#container")
container.innerHTML = " "
carModels.forEach(car=> {
    createElement(car)
});
container.addEventListener("click", buttonOnClick)
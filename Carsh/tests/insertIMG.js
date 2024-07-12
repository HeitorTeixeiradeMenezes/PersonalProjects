import { carModels } from '../src/db/Objects.mjs';
        console.log(carModels)
        const h1a = document.querySelector("h1")
        carModels.forEach(car=> {
            console.log(car.modelo)
            h1a.innerHTML = `<img src="${car.imagem}" alt="">`
        });
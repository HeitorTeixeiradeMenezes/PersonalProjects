import { carModels } from '../db/Objects.mjs'

let url = new URL(window.location.href)
let params = new URLSearchParams(url.search)
let paramModelo = params.get('modelo')

carModels.forEach(function(obj){
  if(obj.modelo && obj.modelo == paramModelo){
    createCarDetails()
  }
})
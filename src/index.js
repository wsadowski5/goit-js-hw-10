import axios from "axios"

import { fetchBreeds , fetchCatByBreed } from "./cat-api";


axios.defaults.headers.common["x-api-key"]= "live_OIkYX82bWzIC8zdh96brfaBAnz6jUpklRMxKHzDmtBCZ2BEHv9CQ4uOHPRDATPH6";

const select = document.querySelector('.breed-select');


const responseBreeds = fetchBreeds()

function createOptions() {
    responseBreeds
    .then(data => {
        const markup = data
        .map((data) => {
         return `<option value="${data.id}">${data.name}</option>`
            })
        .join("")
        select.innerHTML = markup
        
        }
    )
}   

createOptions()

const option = document.querySelector('option')
console.log(value)

console.log(option.value)

const responseBreed = fetchCatByBreed('abys')

console.log(responseBreed)


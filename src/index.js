import axios from "axios"

import { fetchBreeds , fetchCatByBreed } from "./cat-api";


axios.defaults.headers.common["x-api-key"]= "live_OIkYX82bWzIC8zdh96brfaBAnz6jUpklRMxKHzDmtBCZ2BEHv9CQ4uOHPRDATPH6";

const select = document.querySelector('.breed-select');
const catDiv = document.querySelector('.cat-info')

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



function displayBreed (event) {
    const breedId = event.currentTarget.value
    const cat = fetchCatByBreed(breedId)
        .then(data => {
            const markup = data
            .map((data) => {
                return `<img src="${data.url}" width ="${data.width}">`
            })
            .join("")
            catDiv.innerHTML = markup
        } 
    )
}

select.addEventListener('change', displayBreed)



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



function displayImg (event) {
    const breedId = event.currentTarget.value
    const cat = fetchCatByBreed(breedId)
        .then(data => {
            const markup = data
            .map((data) => {
                return `<img src="${data.url}" width ="${data.width}">`
            })
            .join("")
            catDiv.insertAdjacentHTML("afterbegin", markup) 
        } 
    )
}

function displayInfo () {
    responseBreeds
    .then (data => {

        for (let i = 0; i <= data.length; i++) {
            console.log(data[i].id)
            console.log(select.value)

            if (data[i].id === select.value){
                    
                console.log('is ok')

                const markup = 
                    `<p>${data[i].name}</p>
                    <p>${data[i].description}</p>
                    <p>${data[i].temperament}</p>`

                catDiv.innerHTML = markup
                return
            }

            else {
                console.log('error')
            }
            
        }
    }
    )
}



select.addEventListener('change', displayImg)
select.addEventListener('change', displayInfo)



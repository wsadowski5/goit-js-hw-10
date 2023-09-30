
import { fetchBreeds , fetchCatByBreed } from "./cat-api";

const select = document.querySelector('.breed-select');
const catDiv = document.querySelector('.cat-info');
const loader = document.querySelector('.loader')
const error = document.querySelector('.error')

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

function displayCat (event) {
    const breedId = event.currentTarget.value
    fetchCatByBreed(breedId)

        .then(data => {
            
            const markup = data
            .map((data) => {
                return `<img src="${data.url}" width ="${data.width}">gicc
                <p>${data.breeds[0].name}</p>
                <p>${data.breeds[0].description}</p>
                <p>${data.breeds[0].temperament}</p>`
                
            })
            .join("")
            catDiv.innerHTML = markup 
        } 
    )
}

select.addEventListener('change', displayCat)




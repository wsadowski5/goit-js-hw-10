
import { fetchBreeds , fetchCatByBreed } from "./cat-api";

import Notiflix from 'notiflix';


const select = document.querySelector('.breed-select');
const catDiv = document.querySelector('.cat-info');


import SlimSelect from 'slim-select'


function createOptions() {
    fetchBreeds()
    .then(data => {

        select = new SlimSelect({
            select: '.breed-select',
            data: data.map(data => ({
              text: data.name,
              value: data.id,
            })),
          })



        // const markup = data
        // .map((data) => {
        // return `<option value="${data.id}">${data.name}</option>`})
        // .join("")
        // select.innerHTML = markup
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
                return `<img src="${data.url}" width ="${data.width}">
                <div class="breed-description">
                <h2>${data.breeds[0].name}</h2>
                <p><h4>Description:</h4>${data.breeds[0].description}</p>
                <p><h4>Temperament:</h4>${data.breeds[0].temperament}</p>
                </div>` 
                
            })
            .join("")
            catDiv.innerHTML = markup 
        } 
    )
}

select.addEventListener('change', displayCat)




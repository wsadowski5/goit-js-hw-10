
import axios from "axios"
// axios.defaults.headers.common["x-api-key"]= "live_OIkYX82bWzIC8zdh96brfaBAnz6jUpklRMxKHzDmtBCZ2BEHv9CQ4uOHPRDATPH6";

const select = document.querySelector('.breed-select');
const catDiv = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const url = 'https://api.thecatapi.com/v1'
const apiKey = "live_OIkYX82bWzIC8zdh96brfaBAnz6jUpklRMxKHzDmtBCZ2BEHv9CQ4uOHPRDATPH6"

export function fetchBreeds () {
    select.style.display = "none"
    error.style.display = "none"
    return fetch(`${url}/breeds`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        select.style.display = "block"
        return response.json();
        }
    )
    .catch ((error)=> 
    console.log(error)
    )
} 


export function fetchCatByBreed(breedId){
    loader.style.display = "block"
    
    catDiv.style.display = "none"
    error.style.display = "none"
   return fetch(`${url}/images/search?breed_ids=${breedId}&api_key=${apiKey}`)
   .then((response) => {
    
    catDiv.style.display = "none"
    if (!response.ok) {
        throw new Error(response.status);
    }
    loader.style.display = "none"
    catDiv.style.display = "block"
    
    return response.json();
    }
)
    .catch ((error)=> {

        loader.style.display = "none"
        error.style.display = "block"
        console.log(error)
        }
    )
}


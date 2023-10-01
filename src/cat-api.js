
// import axios from "axios"
// axios.defaults.headers.common["x-api-key"]= "live_OIkYX82bWzIC8zdh96brfaBAnz6jUpklRMxKHzDmtBCZ2BEHv9CQ4uOHPRDATPH6";




const select = document.querySelector('.breed-select');
const catDiv = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const failed = document.querySelector('.error');

const url = 'https://api.thecatapi.com/v1'
const apiKey = "live_OIkYX82bWzIC8zdh96brfaBAnz6jUpklRMxKHzDmtBCZ2BEHv9CQ4uOHPRDATPH6"

select.classList.add('hidden')
failed.classList.add('hidden')

export function fetchBreeds () {
    return fetch(`${url}/breeds`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        select.classList.remove('hidden')
        loader.classList.add('hidden')
        return response.json();
        }
    )
    .catch ((error)=> {
        failed.classList.remove('hidden')
        loader.classList.add('hidden')
        console.log(error)
    }
    )
} 

export function fetchCatByBreed(breedId){
    loader.classList.remove('hidden')
    catDiv.classList.add('hidden')
    return fetch(`${url}/images/search?breed_ids=${breedId}&api_key=${apiKey}`)
    .then((response) => {
    if (!response.ok) {
        throw new Error(response.status);
    }
    loader.classList.add('hidden')
    catDiv.classList.remove('hidden')
    
    return response.json();
    }
)
    .catch ((error)=> {
        failed.classList.remove('hidden')
        loader.classList.add('hidden')
        console.log(error)
        Notiflix.Report.failure('Failure!','Oops! Something went wrong! Try reloading the page!', 'Close');
        }
    )
}


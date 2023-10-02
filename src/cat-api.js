
// import axios from "axios"
// axios.defaults.headers.common["x-api-key"]= 'live_OIkYX82bWzIC8zdh96brfaBAnz6jUpklRMxKHzDmtBCZ2BEHv9CQ4uOHPRDATPH6';


const url = 'https://api.thecatapi.com/v1'
const apiKey = "live_OIkYX82bWzIC8zdh96brfaBAnz6jUpklRMxKHzDmtBCZ2BEHv9CQ4uOHPRDATPH6"


export function fetchBreeds () {
    return fetch(`${url}/breeds`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
        }
    )
} 


export function fetchCatByBreed(breedId){
    return fetch(`${url}/images/search?breed_ids=${breedId}&api_key=${apiKey}`)
    .then((response) => {
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
    }
)
}


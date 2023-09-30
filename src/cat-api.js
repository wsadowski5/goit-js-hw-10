



const url = 'https://api.thecatapi.com/v1'



export function fetchBreeds () {
    return fetch(`${url}/breeds`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
        }
    )
        .catch ((error)=> 
        console.log(error)
        )

    
} 


export function fetchCatByBreed(breedId){
   return fetch(`${url}/images/search?breed_ids=${breedId}`)
   .then((response) => {
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
    }
)
    .catch ((error)=> 
    console.log(error)
    )
}


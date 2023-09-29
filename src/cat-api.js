
const select = document.querySelector('.breed-select');
const catDiv = document.querySelector('.cat-info')
export function fetchBreeds () {
    return fetch("https://api.thecatapi.com/v1/breeds")
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
        }
    )
    .then(data => {
        const markup = data
        .map((data) => {
         return `<option value="${data.id}">${data.name}</option>`
            })
        .join("")
        select.innerHTML = markup

            const options = document.querySelectorAll('option')
            for ( i=0; i <= options.length ; i++)
            console.log(options[i].value)

        }
    )
}
console.log(catDiv)

// export function fetchCatByBreed(breedId){
//    console.log(fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=%{breedId}`)) 
// }




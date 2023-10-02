
import { fetchBreeds , fetchCatByBreed } from "./cat-api";
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const selectBreed = document.querySelector('.breed-select');
const catDiv = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');



function createOptions() {
    selectBreed.classList.add('hidden')
    fetchBreeds()
    .then(data => {
        select = new SlimSelect({
            select: '.breed-select',
            data: data.map(data => ({
              text: data.name,
              value: data.id,
            })),
          })
          
        }
    )

    .catch ((error)=> {
        console.log(error)
        loader.classList.add('hidden')
        Notiflix.Report.failure('Failure!','Oops! Something went wrong! Try reloading the page!', 'Close');
    }
    )
}  

createOptions()


function displayCat (event) {
    const breedId = event.currentTarget.value
    loader.classList.remove('hidden')
    catDiv.classList.add('hidden')
    
    fetchCatByBreed(breedId)

        .then(data => {
            
            const markup = data
            .map((data) => {
                return `<img src="${data.url}" alt ="Cat ${data.breeds[0].name}">
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
    .then (data => {
        loader.classList.add('hidden')
        catDiv.classList.remove('hidden')
        selectBreed.classList.remove('hidden')
    })
    .catch ((error)=> {
            loader.classList.add('hidden')
            Notiflix.Report.failure('Failure!','Oops! Something went wrong! Try reloading the page!', 'Close');
        }
    )
    
    
}

selectBreed.addEventListener('change', displayCat)




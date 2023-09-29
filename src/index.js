import axios from "axios"

import { fetchBreeds } from "./cat-api";

axios.defaults.headers.common["x-api-key"]= "live_OIkYX82bWzIC8zdh96brfaBAnz6jUpklRMxKHzDmtBCZ2BEHv9CQ4uOHPRDATPH6";

const select = document.querySelector('.breed-select');

// const createOption = document.createElement('option')
// select.append(createOption)


fetchBreeds()



// option.addEventListener("click", () => {
//   console.log("Button was clicked");
// });


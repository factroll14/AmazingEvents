import data from './amazing.js';

let eventcards = document.getElementById("cartas");

const fragment = document.createDocumentFragment();

function Lolcard(array, container) {
    for (let newcard of array) {
        if (data.currentDate > newcard.date) {
            let div = document.createElement("div")
            div.className = "card col-4 col-sm-3 m-2"
            div.innerHTML += `
        <img src="${newcard.image}" class="card-img-top" alt="disfraces">
        <div class="card-body">
            <h5 class="card-title d-flex justify-content-center">${newcard.name}</h5>
            <p class="card-text d-flex justify-content-center">${newcard.category}</p>
            <div class="d-flex justify-content-around">
            <a href="#" class="card-link">${newcard.price}</a>
            <a href="./pages/details.html" class="btn btn-primary ">See more...</a>
            </div>
        </div>`
            fragment.appendChild(div);
        }
    }
    container.appendChild(fragment);
}

Lolcard(data.events, eventcards)
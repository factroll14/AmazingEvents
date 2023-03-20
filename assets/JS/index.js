const eventsCards = document.getElementById("cartas");
const checkbox = document.getElementById("chbox");
const $search = document.getElementById("search")
const fragment = document.createDocumentFragment();

async function getData(){
    try{
        let apiUrl = './assets/JS/amazing.json'
        const response = await fetch(apiUrl);
        data = await response.json();
        createCategory(data);
        Carta(data.events, eventsCards);
        createChbox(Categories, checkbox)
        
    }
    catch (error){
        console.log(error);
    }
}
getData()

let data=""
let Categories=""

function Carta(array, container) {
    container.innerHTML = ""
    for (let card of array) {
        let div = document.createElement("div")
        div.className = "card col-4 col-sm-3 m-2"
        div.innerHTML += `
        <img src="${card.image}" class="card-img-top" alt="${card.name.toLowerCase()}">
        <div class="card-body">
            <h5 class="card-title d-flex justify-content-center">${card.name}</h5>
            <p class="card-text d-flex justify-content-center">${card.category}</p>
            <div class="d-flex justify-content-around">
            <a href="#" class="card-link me-4">$${card.price}</a>
            <a href="./pages/details.html?id=${card._id}" class="btn btn-primary">See more...</a>
            </div>
        </div>`
        fragment.appendChild(div);
    }
    container.appendChild(fragment);
}

const createCategory = (array) => {
    let categories = array.events.map(category => category.category)
    Categories = categories.reduce((cosa, otraCosa) => {
        if (!cosa.includes(otraCosa)) {
            cosa.push(otraCosa);
        }
        return cosa
    }, [])
    return Categories
}

const createChbox = (categories, checkbox) => {
    categories.forEach(category => {
        let div = document.createElement('div')
        div.className = `form-check mt-3`
        div.innerHTML = `
        <input type="checkbox" id="${category}" name="categories" class="form-check-input" value="${category}">
        <label for="${category}" class="form-check-label me-1">${category}</label>
        `
        checkbox.appendChild(div)
    });
}

const FiltSearch = (array, value) => {
    let filtrsearch = array.filter(buscador => buscador.name.toLowerCase().includes(value.toLowerCase().trim()))
    return filtrsearch
}

const FiltCheck = (array, value) => {
    const checkedCategories = Array.from(checkbox.querySelectorAll('input[type="checkbox"]:checked')).map((el) => el.value);
    if (checkedCategories.length === 0) {
        return array;
    } else {
        let filtrado = array.filter(check => checkedCategories.includes(check.category));
        return filtrado;
    }
}



$search.addEventListener('keyup', (e) =>{
    let datereando = FiltSearch(data.events, e.target.value)
    Carta(datereando, eventsCards)
})


checkbox.addEventListener('change', (e) => {
    let nuevofiltrado = FiltCheck(data.events, e.target.value)
    Carta(nuevofiltrado, eventsCards)
})

import data from './amazing.js'
let detailContainer = document.querySelector('#detailCard')

const queryString = location.search

const params = new URLSearchParams(queryString)

const detailID = params.get('id')

const detail = data.events.find(detail => detail._id == detailID)

function createDetails(detail, container) {
    let div = document.createElement('div')
    div.classList = `flex-wrap d-inline-flex`
    div.innerHTML = `
    <div class="col-md-5 ms-5 ">
    <img src="${detail.image}" class="img-fluid rounded-start rounded-3" alt="${detail.name}" width="100%">
</div>
<div class="col-md-6 border">
    <div class="card-body rounded-3 mt-3 ms-3">
        <h5 class="card-title d-flex justify-content-center">${detail.name}</h5>
        <p class="card-text">${detail.category}</p>
        <p class="card-text">${detail.description}</p>
        <p class="card-text">${detail.price}</p>
    </div>
</div>
    `
    container.appendChild(div)
}
createDetails(detail, detailContainer)
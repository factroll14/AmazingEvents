let apiUrl = '/assets/js/amazing.json'
async function getData() {
    try {
        
        const response = await fetch(apiUrl);
        const data = await response.json();
        const detail = data.events.find(detail => detail._id == detailID)
        CreateDetails(detail, detailContainer)
    }
    catch (error) {
        console.log(error);
    }
}
getData()

let detailContainer = document.querySelector('#detailCard')

const queryString = location.search

const params = new URLSearchParams(queryString)

const detailID = params.get('id')


function CreateDetails(detail, container) {
    let div = document.createElement('div')
    div.classList = `flex-wrap d-inline-flex`
    div.innerHTML = `
    <div class="col-md-5 ms-5 ">
    <img src="${detail.image}" class="img-fluid rounded-start rounded-3" alt="${detail.name}" width="100%">
</div>
<div class="col-md-6 border">
    <div class="card-body rounded-3 mt-3 ms-3">
        <h5 class="card-title d-flex justify-content-center">${detail.name}</h5>
        <p class="card-text">Category : ${detail.category}</p>
        <p class="card-text">Description : ${detail.description}</p>
        <p class="card-text">Date : ${detail.date}</p>
        <p class="card-text">Place : ${detail.place}</p>
        <p class="card-text">Price : $${detail.price}</p>
        <p class="card-text">Assistance : ${detail.assistance}</p>
        <p class="card-text">Capacity : ${detail.capacity}</p>
    </div>
</div>
    `
    container.appendChild(div)
}

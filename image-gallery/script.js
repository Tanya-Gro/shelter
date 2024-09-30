const cardBox = document.querySelector('.cardBox');
const searchInput = document.querySelector('.searchInput');
const searchButton = document.querySelector('.searchButton');
const url = "https://api.unsplash.com/";
let atribute = "/photos/random?query=fall&client_id=VW99YuRZqLS5w5qmq8V76A6v7e7NnlGFO7-pHJdAoH0";
let URLs = [];

async function getImages(link) {
    const res = await fetch(link);
    const data = await res.json();
    showImage(data);
    // console.log(data);
}
function getStarted() {
    for (let i = 0; i < 6; i++)
        getImages(`${url}${atribute}`);
    // getImages();
}
getStarted();

function showImage(data) {
    const img = cardBox.appendChild(document.createElement('div'));
    img.setAttribute('style', `background-image: url("${data.urls.small}")`);
    img.classList.add('card');
    URLs.push(data.urls.regular);
}

function deletePicktures() {
    URLs.length = 0;
    const cards = document.querySelectorAll('.card');
    for (let i = 0; i < cards.length; i++)
        cards[i].remove();
};

searchButton.addEventListener('click', () => {
    let oldItem = atribute.slice(atribute.indexOf('=') + 1, atribute.indexOf('&'));
    let newItem = searchInput.value;
    atribute = atribute.replace(oldItem, newItem);
    deletePicktures();
    getStarted();
});
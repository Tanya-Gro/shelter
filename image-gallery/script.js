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

function letsSearch() {
    let oldItem = atribute.slice(atribute.indexOf('=') + 1, atribute.indexOf('&'));
    let newItem = searchInput.value;
    atribute = atribute.replace(oldItem, newItem);
    deletePicktures();
    getStarted();
    searchInput.focus();
};

searchButton.addEventListener('click', letsSearch);
searchInput.addEventListener('keyup', event => {
    if (event.code === 'Enter' || event.code === 'NumpadEnter')
        letsSearch();
});

/******************** myself check ********************** */
console.log("Вёрстка +10");
console.log("При загрузке приложения на странице отображаются полученные от API изображения +10");
console.log("При загрузке приложения на странице отображаются полученные от API изображения +10");
console.log("Поиск +30");

console.log("ИТОГО 60 баллов");
const body = document.querySelector('body');
const cardBox = document.querySelector('.cardBox');
const searchInput = document.querySelector('.searchInput');
const searchButton = document.querySelector('.searchButton');
const popUp = document.querySelector('.popUp');
const popUp_img = document.querySelector('.popUp_img');
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
    for (let i = 0; i < 2; i++)
        getImages(`${url}${atribute}`);
}
getStarted();

function showImage(data) {
    const img = cardBox.appendChild(document.createElement('div'));
    img.setAttribute('style', `background-image: url("${data.urls.small}")`);
    img.setAttribute('cardNum', URLs.length);
    img.classList.add('card');
    img.addEventListener('click', (event) => showPopup(event));
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

function showPopup(event) {
    // console.log(event.target.getAttribute('cardNum'));
    popUp.classList.add('active');
    body.classList.add('active');
    popUp_img.setAttribute('src', URLs[event.target.getAttribute('cardNum')]);
}

function removePopup() {
    popUp.classList.remove('active');
    body.classList.remove('active');
}

searchButton.addEventListener('click', letsSearch);
popUp.addEventListener('click', removePopup);
searchInput.addEventListener('keyup', event => {
    if (event.code === 'Enter' || event.code === 'NumpadEnter')
        letsSearch();
});

/******************** myself check ********************** */
console.log("Вёрстка +10");
console.log("При загрузке приложения на странице отображаются полученные от API изображения +10");
console.log("Если в поле поиска ввести слово и отправить поисковый запрос, на странице отобразятся изображения соответствующей тематики, если такие данные предоставляет API +10");
console.log("Поиск +30");

console.log("ИТОГО 60 баллов");
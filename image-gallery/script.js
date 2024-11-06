const body = document.querySelector('body');
const cardBox = document.querySelector('.cardBox');
const searchInput = document.querySelector('.searchInput');
const searchButton = document.querySelector('.searchButton');
const popUp = document.querySelector('.popUp');
const popUp_img = document.querySelector('.popUp_img');
const url = "https://api.unsplash.com/";
let atribute = "/photos/random?query=&client_id=VW99YuRZqLS5w5qmq8V76A6v7e7NnlGFO7-pHJdAoH0";
let URLs = [];

async function getImages(link) {
    deleteMessage();
    const res = await fetch(link);
    // console.log(res);
    if (res.status == 200) {
        const data = await res.json();
        showImage(data);
        return Promise.resolve(true);
    }
    else {
        showError(res.status);
        return Promise.resolve(false);
    }
}

function deleteMessage() {
    const message = document.querySelector('.message');
    if (message) message.remove();
}

function showError(error) {
    deleteMessage();
    // console.log(error);
    let message = '';
    switch (error) {
        case 403:
            message = 'Limit is over';
            break;
        case 404:
            message = 'Nothing found for your request';
            break;
        default:
            message = 'Somthing is going wrong';
    }
    const p = cardBox.appendChild(document.createElement('p'));
    p.innerText = message;
    p.classList.add('message');
    p.setAttribute('style', 'color: var(--line)');
}

function getStarted() {
    for (let i = 0; i < 6; i++)
        getImages(`${url}${atribute}`);
    //.then(console.log(Promise.resolve));
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
    // let oldItem = atribute.slice(atribute.indexOf('=') + 1, atribute.indexOf('&'));
    let newItem = searchInput.value.trim().split(' ')[searchInput.value.trim().split(' ').length - 1];
    atribute = `${atribute.slice(0, atribute.indexOf('=') + 1)}${newItem}${atribute.slice(atribute.indexOf('&'))}`;
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
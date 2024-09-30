const url = "https://api.unsplash.com/";
const atribute = "/photos/random?query=fall&client_id=VW99YuRZqLS5w5qmq8V76A6v7e7NnlGFO7-pHJdAoH0";
const cardBox = document.querySelector('.cardBox');
const searchButton = document.querySelector('.searchButton');
const URLs = [];

async function getImages() {
    const res = await fetch(url + atribute);
    const data = await res.json();
    showImage(data);
    // console.log(data);
}
for (let i = 0; i < 6; i++)
    getImages();

function showImage(data) {
    const img = cardBox.appendChild(document.createElement('div'));
    img.setAttribute('style', `background-image: url("${data.urls.small}")`);
    img.classList.add('card');
    URLs.push(data.urls.regular);
    // cardBox.firstChild.setAttribute('src', data.urls.regular);
}

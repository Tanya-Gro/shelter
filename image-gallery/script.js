const url = "https://api.unsplash.com/" + "/photos/random?query=fall&client_id=VW99YuRZqLS5w5qmq8V76A6v7e7NnlGFO7-pHJdAoH0";
const cardBox = document.querySelector('.cardBox');
const URLs = [];

async function getImages() {
    const res = await fetch(url);
    const data = await res.json();
    showImage(data);
    // console.log(data);
}
for (let i = 0; i < 6; i++)
    getImages();

//data.urls.regular;

function showImage(data) {
    const img = cardBox.appendChild(document.createElement('div'));
    img.setAttribute('style', `background-image: url("${data.urls.small}")`);
    img.classList.add('card');
    URLs.push(data.urls.regular);
    // cardBox.firstChild.setAttribute('src', data.urls.regular);
}
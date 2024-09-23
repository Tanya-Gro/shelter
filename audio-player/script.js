const audio = new Audio();
const play = document.querySelector('.play');
const back = document.querySelector('.back');
const next = document.querySelector('.next');
const speakers = document.querySelector('.speakers');
const nameTrack = document.querySelector('.nameTrack span');
const image = document.querySelector('.image');

const playList = [
    {
        artist: "Carla's Dreams",
        track: "Antiexemplu",
        path: "./assets/music/Carla's Dreams - Antiexemplu.mp3",
        img: "./assets/music/Carla's Dreams - Antiexemplu.jpg",
    },
    {
        artist: "Баста feat. Zivert",
        track: "Неболей",
        path: "./assets/music/Баста feat. Zivert - Неболей.mp3",
        img: "./assets/music/Баста feat. Zivert - Неболей.jpg",
    },
    {
        artist: "Cвятослав Вакарчук",
        track: "Я до тебе",
        path: "./assets/music/Вакарчук-ya-do-tebe.mp3",
        img: "./assets/music/Вакарчук-ya-do-tebe.jpg",
    },
    {
        artist: "Гарик Сукачёв",
        track: "Ольга",
        path: "./assets/music/Гарик Сукачёв - Ольга.mp3",
        img: "./assets/music/Гарик Сукачёв - Ольга.jpg",
    },
    {
        artist: "Ленинград",
        track: "Не Париж",
        path: "./assets/music/Ленинград - Не Париж.mp3",
        img: "./assets/music/Ленинград - Не Париж.jpg",
    },
    {
        artist: "Серьга",
        track: "Страна чудес",
        path: "./assets/music/Серьга - Страна чудес.mp3",
        img: "./assets/music/Серьга - Страна чудес.jpg",
    },
];

let track = 0;
let fromStart = true;

function playMusic() {
    if (play.classList.contains('pause')) {
        play.classList.remove('pause');
        // console.log('pause', playList[track].path);
        audio.pause();
        fromStart = false;
    }
    else {
        // audio.currentTime = 0;
        if (fromStart) audio.src = playList[track].path;
        audio.play();
        play.classList.add('pause');
        nameTrack.innerText = `${playList[track].artist} - ${playList[track].track}`;
        image.style.backgroundImage = `url("${playList[track].img}")`;
        document.querySelector("body").style.background = `linear-gradient(rgba(255, 255, 255, 0.7), rgba(0, 0, 0, 0.8)), url("${playList[track].img}")`;
        // console.log(image.style.backgroundImage);
    }
}

function nextMusic() {
    fromStart = true;
    track += 1;
    if (track == playList.length) track = 0;
    if (play.classList.contains('pause')) play.classList.remove('pause');
    playMusic();
}

function backMusic() {
    fromStart = true;
    track -= 1;
    if (track == -1) track = playList.length - 1;
    if (play.classList.contains('pause')) play.classList.remove('pause');
    playMusic();
}

function volume() {
    speakers.classList.toggle('mute');
    audio.muted = !audio.muted;
}


play.addEventListener('click', playMusic);
back.addEventListener('click', backMusic);
next.addEventListener('click', nextMusic);
speakers.addEventListener('click', volume);

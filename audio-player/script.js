const audio = new Audio();
const stop = document.querySelector('.stop');
const play = document.querySelector('.play');
const back = document.querySelector('.back');
const next = document.querySelector('.next');
const speakers = document.querySelector('.speakers');
const volume = document.querySelector('.volume');
const progressBar = document.querySelector('.progressBar');
const progressTine = document.querySelector('.progressTine');
const fullTime = document.querySelector('.fullTime');
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
        if (fromStart) {
            audio.currentTime = 0;
            audio.src = playList[track].path;
        }
        audio.play();
        play.classList.add('pause');
        nameTrack.innerText = `${playList[track].artist} - ${playList[track].track}`;
        image.style.backgroundImage = `url("${playList[track].img}")`;
        document.querySelector("body").style.background = `linear-gradient(rgba(255, 255, 255, 0.7), rgba(0, 0, 0, 0.8)), url("${playList[track].img}")`;
        document.querySelector("body").style.backgroundSize = "cover";
        document.querySelector("body").style.backgroundRepeat = "round";
    }
}
// playMusic();
// playMusic();

audio.onloadedmetadata = function () {
    fullTime.innerText = getTimeFromNum(audio.duration);
};

audio.src = playList[track].path;
setInterval(() => {
    progressBar.value = audio.currentTime / audio.duration;
    progressTine.innerText = getTimeFromNum(audio.currentTime);
}, 1000);

audio.onended = function () {
    nextMusic();
};

function stopMusic() {
    fromStart = true;
    if (play.classList.contains('pause')) play.classList.remove('pause');
    audio.pause();
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

function mute() {
    speakers.classList.toggle('mute');
    audio.muted = !audio.muted;
    if (audio.muted) volume.value = 0;
    else volume.value = audio.volume;
}

function changeVolume() {
    audio.volume = volume.value;
    if (volume.value == 0 || (speakers.classList.contains('mute') && volume.value != 0)) mute();
}
function changeProgress() {
    audio.currentTime = progressBar.value * audio.duration;
}

function getTimeFromNum(num) {
    return `${Math.floor(num / 60)}:${((Math.floor(num % 60)).toString().padStart(2, "0"))}`;
}

stop.addEventListener('click', stopMusic);
play.addEventListener('click', playMusic);
back.addEventListener('click', backMusic);
next.addEventListener('click', nextMusic);
speakers.addEventListener('click', mute);
volume.addEventListener('input', changeVolume);
progressBar.addEventListener('input', changeProgress);

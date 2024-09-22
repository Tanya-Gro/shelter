const audio = document.querySelector('audio');
const play = document.querySelector('.play');
const pauseBtn = document.querySelector('.pause');

let track = 0;

function playMusic() {
    if (play.classList.contains('pause')) {
        audio.pause();
        play.classList.remove('pause');
    }
    else {
        // audio.currentTime = 0;
        audio.play();
        play.classList.add('pause');
    }
}

play.addEventListener('click', playMusic);

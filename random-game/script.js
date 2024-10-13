const cageWidth = 32;
const score = 0;
let timeSet = 1000;

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

const field = new Image();
field.src = './assets/field.png'

const frog = new Image();
frog.src = './assets/frog.png'

function drawField() {
  c.drawImage(field, 0, 0)
}

let game = setInterval(drawField, timeSet);
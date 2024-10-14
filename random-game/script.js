const cageWidth = 32;
const widthField = 608;
let score = 0;
let way = '';
let timeSet = 1000;
const goal = 5;
const preyPath = ['./assets/frog.png', './assets/fly.png', './assets/bee.png', './assets/mouse.png'];

const canvas = document.querySelector('canvas');
canvas.width = widthField;
canvas.height = widthField;
const c = canvas.getContext('2d');

const field = new Image();
field.src = './assets/field.png'

const prey = new Image();
prey.src = './assets/frog.png';

let preyPosition = {
  x: Math.floor(Math.random() * 17 + 1) * cageWidth,
  y: Math.floor(Math.random() * 15 + 1) * cageWidth + 64,
}

const snake = new Image();
snake.src = './assets/snake.png';

let snakePosition = [];
snakePosition[0] = {
  x: Math.floor(Math.random() * 17 + 1) * cageWidth,
  y: Math.floor(Math.random() * 15 + 1) * cageWidth + 64,
}

function drawField() {
  c.drawImage(field, 0, 0);

  c.drawImage(prey, preyPosition.x, preyPosition.y);
  prey.src = preyPath.indexOf(prey.src) + 1 < preyPath.length ? preyPath[preyPath.indexOf(prey.src) + 1] : preyPath[0];

  c.drawImage(snake, snakePosition[0].x, snakePosition[0].y);
  for (let i = 1; i < snakePosition.length; i++) {
    c.fillStyle = "green";
    c.fillRect(snakePosition[i].x, snakePosition[i].y, box, box);
  }

  c.fillStyle = "black";
  c.font = "45px system-ui"
  c.fillText(score, 70, 50);
}

let game = setInterval(drawField, timeSet);
const cageWidth = 32;
const widthField = 608;
let score = 0;
let way = '';
let timeSet = 500;
let preyPosition = new Object;
let rotateSnakeHead = 0;
const goal = 5;
const preyPath = ['./assets/frog.png', './assets/fly.png', './assets/bee.png', './assets/mouse.png'];
let preyIndex = 0;

const canvas = document.querySelector('canvas');
canvas.width = widthField;
canvas.height = widthField;
const c = canvas.getContext('2d');

const field = new Image();
field.src = './assets/field.png'

const prey = new Image();
prey.src = './assets/frog.png';

function newPreyPosition() {
  preyPosition = {
    x: Math.floor(Math.random() * 17 + 1) * cageWidth,
    y: Math.floor(Math.random() * 15 + 1) * cageWidth + 64,
  }
}
newPreyPosition();

const snake = new Image();
snake.src = './assets/snake.png';

const fire = new Image();
fire.src = './assets/fire.png';

let snakePosition = [];
snakePosition[0] = {
  x: Math.floor(Math.random() * 17 + 1) * cageWidth,
  y: Math.floor(Math.random() * 15 + 1) * cageWidth + 64,
}

function drawField() {
  c.drawImage(field, 0, 0);

  prey.src = preyPath[preyIndex];
  c.drawImage(prey, preyPosition.x, preyPosition.y);

  c.save();
  c.translate(snakePosition[0].x + cageWidth / 2, snakePosition[0].y + cageWidth / 2);
  if (snakePosition[0].x < cageWidth || snakePosition[0].x > cageWidth * 17 || snakePosition[0].y < cageWidth * 3 || snakePosition[0].y > cageWidth * 17) {
    c.rotate((rotateSnakeHead + 180) * Math.PI / 180);
    c.drawImage(fire, -fire.width / 2, -fire.height / 2);
  }
  else {
    c.rotate(rotateSnakeHead * Math.PI / 180);
    c.drawImage(snake, -snake.width / 2, -snake.height / 2);
  }
  c.restore();

  // c.drawImage(snake, snakePosition[0].x, snakePosition[0].y);
  if (snakePosition.length > 1) {
    for (let i = 1; i < snakePosition.length; i++) {
      c.beginPath()
      c.arc(snakePosition[i].x + cageWidth / 2, snakePosition[i].y + cageWidth / 2, cageWidth * 0.4, 0, Math.PI * 2, false);
      c.fillStyle = "#568a34";
      c.fill();
      c.strokeStyle = "black";
      c.stroke();
    }
  }

  c.fillStyle = "black";
  c.font = "45px system-ui"
  c.fillText(score, 70, 50);
}

function moveSnake() {
  let snakeHeadX = snakePosition[0].x;
  let snakeHeadY = snakePosition[0].y;

  if (snakeHeadX < cageWidth || snakeHeadX > cageWidth * 17 || snakeHeadY < cageWidth * 3 || snakeHeadY > cageWidth * 17)
    clearInterval(game);

  switch (way) {
    case 'left': snakeHeadX -= cageWidth; break;
    case 'right': snakeHeadX += cageWidth; break;
    case 'up': snakeHeadY -= cageWidth; break;
    case 'down': snakeHeadY += cageWidth; break;
  }

  if (preyPosition.x === snakeHeadX && preyPosition.y === snakeHeadY) {
    newPreyPosition();
    score++;
    way = '';
    preyIndex = preyIndex + 1 < preyPath.length ? preyIndex + 1 : 0;
  }
  else snakePosition.pop();

  snakePosition.unshift({ x: snakeHeadX, y: snakeHeadY });
}

function pressKey(event) {
  switch (event.keyCode) {
    case 37:
      if (way != 'right') {
        rotateSnakeHead = 90;
        way = 'left';
        moveSnake();
      }
      break;
    case 38:
      if (way != 'down') {
        rotateSnakeHead = 180;
        way = 'up';
        moveSnake();
      }
      break;
    case 39:
      if (way != 'left') {
        rotateSnakeHead = 270;
        way = 'right';
        moveSnake();
      }
      break;
    case 40:
      if (way != 'up') {
        rotateSnakeHead = 0;
        way = 'down';
        moveSnake();
      }
      break;
  }
}

document.addEventListener('keydown', pressKey);

let game = setInterval(drawField, timeSet);
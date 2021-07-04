var canvasHeight = innerHeight;

leftPlayer = {
  x: 10,
  y: canvasHeight / 2,
};

rightPlayer = {
  x: window.innerWidth - 30,
  y: canvasHeight / 2,
};

var leftPlayerSpeed = 10;
var rightPlayerSpeed = 10;
var leftScore = 0;
var rightScore = 0;
var ballSpeedY = 3;
var ballSpeedX = 3;
var quitScreen = document.getElementById("screen");
var optionScreen = document.getElementById("option");
var ballSpeedInputY = document.getElementById("ballspeedx");
var ballSpeedInputX = document.getElementById("ballspeedy");
var leftPlayerInput = document.getElementById("leftplayer");
var rightPlayerInput = document.getElementById("rightplayer");
var leftScoreV = document.getElementById("leftScore");
var rightScoreV = document.getElementById("rightScore");
var win = document.getElementById("win");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const upMoveLeft = () => {
  if (leftPlayer.y >= 5) {
    leftPlayer.y -= leftPlayerSpeed;
  }
};

const downMoveLeft = () => {
  if (leftPlayer.y <= canvasHeight - 105) {
    leftPlayer.y += leftPlayerSpeed;
  } else {
    leftPlayer.y = canvasHeight - 105;
  }
};

const upMoveRight = () => {
  if (rightPlayer.y >= 5) {
    rightPlayer.y -= rightPlayerSpeed;
  }
};

const downMoveRight = () => {
  if (rightPlayer.y <= canvasHeight - 105) {
    rightPlayer.y += rightPlayerSpeed;
  } else {
    rightPlayer.y = canvasHeight - 105;
  }
};


const die = (string, whoIsWin) => {
  directionX = 0;
  directionY = 0;
  rightScore = 0;
  leftScore = 0;
  var right = document.getElementById("rightPlayerScore");
  var left = document.getElementById("leftPlayerScore");
  whoIsWin == "right" ? (right.innerHTML = Number(right.innerHTML) + 1) : (left.innerHTML = Number(left.innerHTML) + 1);
  quitScreen.classList.remove("hidden");
  win.classList.remove("hidden");
  win.innerHTML = string;
};

document.addEventListener("keydown", (event) => {
  if (event.keyCode == 83) {
    downMoveLeft();
  }
  if (event.keyCode == 87) {
    upMoveLeft();
  }
  if (event.keyCode == 38) {
    upMoveRight();
  }
  if (event.keyCode == 40) {
    downMoveRight();
  }
});

var ball = document.getElementById("ball");
var leftPlayerDOM = document.getElementById("leftPlayer");
var rightPlayerDOM = document.getElementById("rightPlayer");
var xPosition = innerWidth / 2;
var yPosition = getRandomInt(innerHeight);
var directionX = 0;
var directionY = 0;

const resetBall = () => {
  xPosition = innerWidth / 2;
  yPosition = getRandomInt(innerHeight-5);
  yPosition <= 5 ? yPosition = 5 : ''
  directionX = ballSpeedX * (Math.random() < 0.5 ? -1 : 1);
  directionY = ballSpeedY * (Math.random() < 0.5 ? -1 : 1);
};

const run = () => {
  resetBall();
  rightScoreV.innerHTML = rightScore;
  leftScoreV.innerHTML = leftScore;
  win.classList.add("hidden");
  quitScreen.classList.add("hidden");
};

const save = () => {
  rightPlayerSpeed = Number(rightPlayerInput.value);
  leftPlayerSpeed = Number(leftPlayerInput.value);
  ballSpeedX = Number(ballSpeedInputX.value);
  ballSpeedY = Number(ballSpeedInputY.value);
  quitScreen.classList.remove("hidden");
  optionScreen.classList.add("hidden");
};

const option = () => {
  quitScreen.classList.add("hidden");
  optionScreen.classList.remove("hidden");
  leftPlayerInput.value = leftPlayerSpeed;
  rightPlayerInput.value = rightPlayerSpeed;
  ballSpeedInputX.value = ballSpeedX;
  ballSpeedInputY.value = ballSpeedY;
};

function animate() {
  requestAnimationFrame(animate);
  rightPlayerDOM.style.left = `${rightPlayer.x}px`;
  rightPlayerDOM.style.top = `${rightPlayer.y}px`;
  leftPlayerDOM.style.left = `${leftPlayer.x}px`;
  leftPlayerDOM.style.top = `${leftPlayer.y}px`;
  ball.style.left = `${xPosition}px`;
  ball.style.top = `${yPosition}px`;
  xPosition += directionX;
  yPosition += directionY;
  if (xPosition >= innerWidth - 15) {
    leftScore++;
    leftScoreV.innerHTML = leftScore;
    resetBall();
  }

  if (
    rightPlayer.y -5 <= yPosition  &&
    rightPlayer.y + 105 >= yPosition &&
    rightPlayer.x <= xPosition + 20
  ) {
    directionX = -directionX;
  }

  if (
    leftPlayer.y - 5 <= yPosition &&
    leftPlayer.y + 105 >= yPosition &&
    leftPlayer.x >= xPosition -20
  ) {
    directionX = -directionX;
  }

  if (xPosition <= 1) {
    rightScore++;
    rightScoreV.innerHTML = rightScore;
    resetBall();
  }

  if (yPosition > canvasHeight - 15) {
    directionY = -directionY;
  }
  if (yPosition <= 10) {
    directionY = -directionY;
  }

  if (rightScore == 5) {
    die("Right Player Win", "right");
  }
  if (leftScore == 5) {
    die("Left Player Win", "left");
  }
}

animate();

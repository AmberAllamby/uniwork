const paddle1 = document.getElementById('paddle1');
const paddle2 = document.getElementById('paddle2');
const ball = document.getElementById('ball');
const score1Display = document.getElementById('score1');
const score2Display = document.getElementById('score2');

let ballX = 295;
let ballY = 195;
let ballSpeedX = 2;
let ballSpeedY = 2;
let score1 = 0;
let score2 = 0;

document.addEventListener('keydown', (event) => {
    if (event.key === 'q' && paddle1.offsetTop > 0) {
        paddle1.style.top = `${paddle1.offsetTop - 10}px`;
    } else if (event.key === 'a' && paddle1.offsetTop < 340) {
        paddle1.style.top = `${paddle1.offsetTop + 10}px`;
    } else if (event.key === 'ArrowUp' && paddle2.offsetTop > 0) {
        paddle2.style.top = `${paddle2.offsetTop - 10}px`;
    } else if (event.key === 'ArrowDown' && paddle2.offsetTop < 340) {
        paddle2.style.top = `${paddle2.offsetTop + 10}px`;
    }
});

function update() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;
    if (ballY <= 0 || ballY >= 390) {
        ballSpeedY = -ballSpeedY;
    }

    if (ballX <= 20 && ballY >= paddle1.offsetTop && ballY <= paddle1.offsetTop + 100 ||
        ballX >= 570 && ballY >= paddle2.offsetTop && ballY <= paddle2.offsetTop + 100) {
        ballSpeedX = -ballSpeedX;
    }

    if (ballX <= 0) {
        score2++;
        ballX = 295;
        ballY = 195;
        score2Display.textContent = score2;
    } else if (ballX >= 600) {
        score1++;
        ballX = 295;
        ballY = 195;
        score1Display.textContent = score1;
    }
	
    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;
}

function gameLoop() {
    update();
    requestAnimationFrame(gameLoop);
}

gameLoop();
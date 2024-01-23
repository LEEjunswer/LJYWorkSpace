const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d');
let startBtn=document.querySelector('.startBtn');
// 정중앙에 위치시키기
let player = { x: canvas.width / 2 - 25, y: canvas.height / 2 - 25, size: 50, speed: 3 };
let key = {
  ArrowRight: false,
  ArrowLeft: false,
  ArrowUp: false,
  ArrowDown: false
}
let imgReady = false;
let playerImg = new Image();
playerImg.src = './bug.png';
let bulletList = []
let isOver = false;
let interval;
let backReady=false;
let backImg = new Image();
backImg.src= './background1.png';




function init() {
  playerImg.addEventListener("load", () => {
    imgReady = true;
  })
  backImg.addEventListener("load",()=>{
   backReady=true;
  })
  document.addEventListener("keydown", e => keyHandler(e, true));
  document.addEventListener("keyup", e => keyHandler(e, false));
  createBullets(10);
}

function drawPlayer() {
  ctx.beginPath();
  //이미지객체 , 시작좌표x, y  이미지크기 가로   세로 
  //ctx.rect(player.x, player.y, player.size, player.size);

  ctx.drawImage(playerImg, player.x, player.y, player.size, player.size);
  //ctx.fill();
  ctx.closePath();
}

function keyHandler(e, value) {
  if (key[e.key] !== undefined) {
    key[e.key] = value;
  }
}

function createBullets(size) {
  bulletList = [];
  for (let i = 0; i < size; i++) {
    let bullet = new Bullet();
    bullet.init(player.x, player.y);
    bulletList.push(bullet);
  }

}

function movePlayer() {
  if (key.ArrowRight && player.x < canvas.width - player.size) {
    player.x += player.speed;
  } else if (key.ArrowDown && player.y < canvas.height - player.size) {
    player.y += player.speed;
  } else if (key.ArrowUp && player.y > 0) {
    player.y -= player.speed;
  } else if (key.ArrowLeft && player.x > 0) {
    player.x -= player.speed;
  }
}


function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (!imgReady) return;
  drawPlayer();
  movePlayer();
  bulletList.forEach(bull => { bull.update(player.x, player.y) })

  bulletList.forEach(bull => {
    // 플레이어의 정중앙에 오게 셋팅해주기
    if (bull.isCollision(player.x + player.size / 2, player.y + player.size / 2, player.size / 2)) {
      setTimeout(() => {
        if (!isOver) gameOver();
        isOver = true;
        startBtn.classList.remove('on');
        init();
        clearInterval(interval);
      }, 200);
    }

  })
  console.log("test = ", isOver);

  bulletList.forEach(bull => bull.render(ctx));
}

function gameOver() {
  alert("게임오버");
}


init();
startBtn.addEventListener('click',()=>{
  startBtn.classList.add('on');
  interval = setInterval(render, 10)
})

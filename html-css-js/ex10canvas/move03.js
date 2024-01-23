const canvas = document.querySelector("#canvas");
const re = canvas.getContext('2d');
const ctx = canvas.getContext('2d');

let key = {
  right: false,
  left: false,
  up: false,
  down: false
}

let player = {
  x: 150,
  y: 150,
  size: 50,
  color: 'blue'
} 
function move(){
  ctx.clearRect(0 , 0, canvas.width,canvas.height);
  ctx.beginPath();
  ctx.rect(player.x,player.y,player.size,player.size);
  ctx.fillStyle = player.color;
  ctx.fill();
  ctx.closePath();
   enermy();
   check();
}


document.addEventListener('keydown',(e)=>{
  if(e.key === 68 || e.key === 'ArrowRight'){
    
    player.x+=5;
  }else if(e.key ===87 || e.key==="ArrowUp"){
    player.y-=5;
  }else if(e.key === 65 || e.key==="ArrowLeft"){
   player.x-=5;
  }else if(e.key ===83 || e.key==="ArrowDown"){
  player.y+=5;
  }
})
let enemy = {
  x: canvas.width / 2 - 40,
  y: canvas.height / 2 - 40,
  size: 80,
  color: 'crimson'
}
function enermy(){
  re.beginPath();
  re.rect(enemy.x,enemy.y,enemy.size,enemy.size);
  re.fillStyle=enemy.color;
  re.fill();

}

function check() {
  if (   player.x < enemy.x + enemy.size &&
    player.x + player.size > enemy.x &&
    player.y < enemy.y + enemy.size &&
    player.y + player.size > enemy.y) {
    re.fillStyle = 'hotpink';
    ctx.fill();
  }
}

setInterval(move,10); 
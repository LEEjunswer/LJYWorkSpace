const canvas=document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
// const timer=document.querySelector('.timer');
let lif=10;
let enemy = [];
let enemyInterval = 30000;
function createEnemies() {
  for (let i = 0; i < 5; i++) {
    enemy.push({ x: 45 + i * 50, y: 0, size: 25, color: 'black' });
    create(enemy[i]);
    enemy[i].y += 25;
  }
}






let player={
 x:270,
 y:360,
 size: 40,
 color: 'red'
}

// function enemy(){
//   for()
// }


function gamestart(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  create(player);
  createEnemies();

}




function create(obj){
    ctx.beginPath();
    ctx.rect(obj.x,obj.y,obj.size,obj.size);
    ctx.fillStyle=obj.color;
    ctx.fill();
    ctx.closePath();
}

document.addEventListener('keydown', e=>{
  if(e.key==='ArrowRight' && player.x<canvas.width-player.size){
    // gamestart();
    player.x+=10;
  }else if(e.key ==='ArrowLeft' && player.x>0){
      player.x-=10;
  }

})



setInterval(gamestart, 1000);










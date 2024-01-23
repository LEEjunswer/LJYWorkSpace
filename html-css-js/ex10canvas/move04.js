const canvas=document.querySelector('#canvas');
const ctx=canvas.getContext('2d');

let player= {
  x:100,
  y: 100,
  size: 50,
  color: 'blue'
}
let enemy1={

  x:100,
  y: 350,
  size: 80,
  color: 'green'
}
let enemy2={

  x:250,
  y: 350,
  size: 80,
  color: 'green'
}

let enemy3={

  x:400,
  y: 350,
  size: 80,
  color: 'green'
}
let enemy4={

  x:550,
  y: 350,
  size: 80,
  color: 'green'
}
function make(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  create(player);
  create(enemy1);
  create(enemy2);
  create(enemy3);
  create(enemy4);
  collison(enemy1);
  collison(enemy2);
  collison(enemy3);
  collison(enemy4);
}

function create(obj){
  ctx.beginPath();  
  ctx.rect(obj.x,obj.y,obj.size,obj.size);
  ctx.fillStyle=obj.color;
  ctx.fill();
  ctx.closePath();
}
function collison(obj){
  if(  player.x < obj.x + obj.size &&
    player.x + player.size > obj.x &&
    player.y < obj.y + obj.size &&
    player.y + player.size > obj.y){
      obj.color='hotpink';
  }else{
    obj.color='green';
  }
}
document.addEventListener('keydown',(e)=>{
  if(e.key==='ArrowRight' && player.x < canvas.width - player.size){
    player.x+=10;
  }else if(e.key==='ArrowUp'&& player.y>0){
      player.y-=10;
  }else if(e.key ==='ArrowLeft' &&  player.x>0){
    player.x-=10;
  }else if(e.key==='ArrowDown' && player.y< canvas.height - player.size){
    player.y+=10;
  }
})



setInterval(make,10);
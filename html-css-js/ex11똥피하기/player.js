// import {Poop} from   './poop.js'
export default class Player{

constructor(){
  this.canvas=document.querySelector('#canvas');
  this.ctx=this.canvas.getContext('2d');
  this.player={x:175,y:350,color:'blue',size:50};
 
  // this.init();
}
init(){
 
  // this.makeGame(this.player);
  let check = setInterval(()=>{this.create()},10);
  this.movePlayer();  
  
}
create(){
  this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
  this.makeGame(this.player)
}x
makeGame(obj){
  this.ctx.beginPath();
  this.ctx.rect(obj.x,obj.y,obj.size,obj.size);
  this.ctx.fillStyle= obj.color;
  this.ctx.fill();
  this.ctx.closePath();
}
movePlayer(){
  document.addEventListener('keydown',(e)=>{
    if(e.key==="ArrowRight" & this.player.x < this.canvas.height - this.player.size){
      this.player.x+=10;
    }else if(e.key === "ArrowLeft" && this.player.x>0){
      this.player.x-=10;
    }else if(e.key === 'ArrowUp' && this.player.y>0){
      this.player.y-=10;
    }else if(e.key === 'ArrowDown'&& this.player.y< this.canvas.width - this.player.size){
      this.player.y+=10;
    }
  })
}
}
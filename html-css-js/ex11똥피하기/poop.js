 export default class Poop{ 
constructor(){
    // this.player = new player();
     this.poopList=[];
     this.canvas =document.querySelector('#canvas');
     this.ctx=canvas.getContext('2d');
     this.poop={x:100,y:100,size:50,color:'brown'};
    this.init();
  }
  init(){
    this.create();
  }
  create(){
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
    this.makePoop(this.poop);
  }
  makePoop(obj){
    this.ctx.beginPath();
    this.ctx.rect(obj.x,obj.y,obj.size,obj.size);
    this.ctx.fillStyle= obj.color;
    this.ctx.fill();
    this.ctx.closePath();
  }

  

}
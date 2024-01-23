import Player from './player.js';
import Poop from './poop.js';
class App{
  constructor(){
    this.Player = new Player();
    this.Poop = new Poop();
    this.init();
  }
  init(){

    this.Player.init();
  }

  
}
window.onload= function(){
  window.App= new App();
};

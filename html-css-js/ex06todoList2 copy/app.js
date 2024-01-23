class App {
  constructor() {
    this.listDom = document.querySelector("#list");
    // this.todoList = []; //작업들을 저장하는 배열
    this.todoList = [];
    this.titleInput = document.querySelector("#title");
    this.contentInput = document.querySelector("#content");
    this.garbage = document.querySelector("#garbage");
    this.msgBox = document.querySelector(".msg-box");

    this.idx = 0;

    this.init();
  }

  init() {

  }
  
  
  addItem(){
    const div = document.createElement('div');
  
  }

}
window.onload = function() {
  window.app = new App();

};
const start = document.querySelector('#start');
const  off = document.querySelector('.off');
const tds= [...document.querySelectorAll('td')];
const table =document.querySelector('table');
const winO =document.querySelector('winO');
const winX =document.querySelector('winX');
const draw= document.querySelector('draw');
let cnt =0;
let turn =1;
let game = 1;

function checkWinner() {

  for (let i = 0; i < 3; i++) {
    // 가로
    if (tds[i * 3].textContent !== "" && tds[i * 3].textContent === tds[i * 3 + 1].textContent && tds[i * 3].textContent === tds[i * 3 + 2].textContent) {
      return true;
    }
    // 세로
    if (tds[i].textContent !== "" && tds[i].textContent === tds[i + 3].textContent && tds[i].textContent === tds[i + 6].textContent) {
      return true;
    }
  }

  // 대각선
  if (tds[0].textContent !== "" && tds[0].textContent === tds[4].textContent && tds[0].textContent === tds[8].textContent) {
    return true;
  }
  if (tds[2].textContent !== "" && tds[2].textContent === tds[4].textContent && tds[2].textContent === tds[6].textContent) {
    return true;
  }

  return false;
}



function playturn(index){
  if(game==0){
    return;
  }
  if(tds[index].textContent!==""){
    alert("이미 선택된 위치입니다");
    return;
  }
  if(turn==1){
  tds[index].textContent="O";
  tds[index].classList.add('on');
  turn++;
  }
  else if(turn==2){
    tds[index].textContent="X";
    tds[index].classList.add('com');
    turn--;
  }
  if (checkWinner()) {
    game=0;
    if (turn == 1) {
      setTimeout(()=>{
        winX.classList.add('on');
       remove();
        table.classList.add('off');
    
         },2500);    
    } else { 
      game=0;
     setTimeout(()=>{
      winO.classList.add('on');
     remove();
      table.classList.add('off');
       },2500);    
  
    }
  } else if (!tds.some(td => td.textContent === "")) {
    game = 0;
    setTimeout(()=>{
    draw.classList.add('on');
    remove();
    table.classList.add('off');
    
  },2500);
  }
}

function remove(){
tds.forEach((td) =>{
  td.classList.remove('on');
  td.classList.remove('com');
  td.textContent="";
})
}
function stopgame(){
  tds.forEach((td)=>{
    td.classList.add('off');
  })
  winO.classList.remove('on')
  winX.classList.remove('on');
  draw.classList.remove('on');
}
function startgame(){
  turn=1;
tds.forEach((td) =>{
  td.classList.remove('off');
})
winO.classList.remove('on');
winX.classList.remove('on');
}



tds.forEach((td,index)=>{
  td.addEventListener('click', ()=>{
    playturn(index);
  })
})


start.addEventListener('click', ()=>{ 
  remove();
  table.classList.remove('off');
  startgame();
  game++;
})

off.addEventListener('click',()=>{
  remove();
  table.classList.add('off');
  stopgame();
    game=0;
})



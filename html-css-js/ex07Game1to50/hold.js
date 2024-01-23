
const time = document.querySelector('.timer');
const start= document.querySelector('.start');
const front =[...document.querySelectorAll('td')];  // 1 ~ 25
const table = document.querySelector('table');
let check =1;
let backNum=26;
let cnt=0;
let sec =0;
let min =0;
let mils=0;
let intervalId;

  function setClock(){
    mils+=1;
    if(mils>99){
      mils=0;
      sec++;
    }
    if(sec>=60){
      sec=0;
      min++;
    }
    // console.log(min + ":" + sec + ":" + mils);
    time.innerHTML= h(min) + ":" + h(sec) + ":" + mils;

  }
  function h(num) {
    return num < 10 ? "0" + num : num;
  }
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
function initializeGame() {
    const allNumbers = Array.from({ length: 25 }, (_, index) => index + 1);
    shuffleArray(allNumbers);

    for (let i = 0; i < 25; i++) {
        front[i].textContent = allNumbers[i];
  
    }
}

function gameWin(){
  table.classList.add('win');
  start.classList.remove('on');
  time.classList.add('on');

}
function gameStart(){
  check=1;
    backNum=26;
  cnt=0;
     sec =0;
     min =0;
    mils=0;
  table.classList.remove('win');
  start.classList.add('on');
  time.classList.remove('on');
  front.forEach((td)=>{
    td.classList.remove('on');
  })

}

function checkNum(index){
  if(check==50){
      gameWin();
  }
  if(check>25 && front[index].innerHTML==check){
    front[index].innerHTML="";
    front[index].classList.add('on');
    cnt++;
    check++;

  }
  if(front[index].innerHTML==check){
    front[index].innerHTML=backNum;
    backNum++;
    cnt++;
    check++;
  }
    hint();
  }

  

function hint(){
  for(let i=0; i<front.length; i++){
    if(front[i].innerHTML!=""){
      front[i].classList.remove('on'); 
    }
     if(front[i].innerHTML==""){
      front[i].classList.add('on'); 
    }
     if(front[i].innerHTML==check){
      setTimeout(()=> {
       front[i].classList.remove('c'); 
   
      },300);
      front[i].classList.add('c');
    }
  }

    }
start.addEventListener('click',()=>{
  
  clearInterval(intervalId);
  initializeGame()
  gameStart();
  intervalId = setInterval(setClock,10);
})

front.forEach((td,index)=>{
   td.addEventListener('click',()=>{
    checkNum(index);
   }) 
})
 



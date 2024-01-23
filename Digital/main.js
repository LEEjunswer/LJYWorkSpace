function setClock(){
  let dateInfo = new Date();
  let hour = modifyNumber(dateInfo.getHours());
  let min = modifyNumber(dateInfo.getMinutes());
  let sec = modifyNumber(dateInfo.getSeconds());
  let year = dateInfo.getFullYear();
  let month = dateInfo.getMonth()+1;
  let date = dateInfo.getDate();
  document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;
  document.getElementById('date').innerHTML = year + "년 " + month + "월 " +date +"일";
}
function modifyNumber(time){
  if(parseInt(time)<10){
      return "0"+time;
  }
  else{
    return time;
  }
}
window.onload = function (){
  setClock();
  setInterval(setClock,1000); //1초마다 setClock 함수 실행
}
// 콜백함수 callback() : 나중에 부른다
function sayHi(name){
  console.log('hellow~~',name ,'nice meet you!');
}
sayHi("이준영");

function introduce(lastName, firstName, callback){
  let fullName= lastName + firstName;
  callback(fullName);
}
// sayHi callback 함수가 된다 : introduce 가 대신 sayHi 호출 한다
introduce('이','준영',sayHi);


let array= [3,5,8,6,7,11,15,14,22];

let printAll = function(n){
  console.log(n);
}

// array.forEach(printAll);
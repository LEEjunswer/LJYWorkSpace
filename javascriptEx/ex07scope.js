// 스코프

let x = 100; {
  let y= 10; // 지역변수처럼 안에서만 사용가능하다
   console.log(x,"",y);
}

function test(){
  let z = 300;
  console.log('x = ', x);
  // consol.log('z = ' , z);
  // consol.log('y = ' , y);

  if (z ==300){
    let a = z -100;
    console.log('a = ', a);
  }
  // console.log('a = ', a);
}
test();

console.log('x', x);
// console.log('y', y);

// let , const => 블록스코프 : java 랑 동일하다
// var => 함수 스코프 가지고 있다   : java 17버전부터 var 자료형 타입 쓸 수 있다 : 자료형 타입 무관하게 사용가능


function printTest(){
  var test = 100;
}
// 배열의 함수들...

// 배열 자체를 수정하는가? 새로운 배열을 만든가?

let fruit =['바나나','사과','포도','딸기','샤인머스켓', '사과']; // new Array(['바나나','사과','포도','딸기','샤인머스켓'])

console.log(fruit.length);
console.log(fruit.indexOf('사과',2));
console.log(fruit.includes('용과')); // 배열안에 벨류값이 포함하고 있는지 없는지 참거짓으로 체크


// 배열 자체를 수정
fruit.push('파인애플');
console.log(fruit.push('파인애플'));
console.log(fruit);
console.log(fruit.push('수박','망고'));
console.log(fruit);
// console.log(fruit.push['멜론','귤','감','배']) // 배열은 집어 넣을 수없다
console.log(fruit);

// consol.log 와 consol.dir의 차이점은  .log는 html 구조 , .dir은 json 구조로 출력된다
console.dir(fruit); 
console.log(fruit.pop());
// pop은 무조건 맨 뒤에 있는걸 삭제시킨다.

// 앞에다가 추가
fruit.unshift('용과');
console.log(fruit);
console.log("=======================");
// 앞에거 삭제
fruit.shift();
console.log(fruit);


// 배열 자르기
// splice(시작인덱스 , 갯수)
fruit.splice(0,3);
console.log(fruit);
// 두번쨰 인자값이 없으면 배열 끝까지 삭제
fruit.splice(3);
console.log(fruit);


// 새로운 배열을 만드는 함수


console.log("====================================");
fruit = ['바나나', '사과', '포도', '딸기', '샤인머스켓', '사과'];


// 배열 추가
let moreFruit = ['망고','용과'];
// let newFruit = fruit.concat(moreFruit);
// console.log(newFruit);

// ...spread 연산자를 사용하면 쉽게 배열을 복사할 수 있다.
let newFruit = [...fruit, ...moreFruit];
console.log(newFruit);

let numbers=[1,9,7,5,2,4];
let copyNumbers = [...numbers].sort();
console.log(numbers);
console.log(copyNumbers);
// copuNumbers.sort((a,b) => a > b ? -1 : 1);
// console.log(copyNumbers);
copyNumbers.reverse();
console.log(copyNumbers);
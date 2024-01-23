class Person{
  #job;
  constructor(name, age, job){
    this.name=name;
    this.age=age;
    this.#job = job;
  }
  eat(){
    console.log('먹자!');
  }
  sleep(){
    console.log('자자');
  }
}

class Teacher extends Person{
  constructor(name,age,teacherNo){
    super(name, age); // new Person(name,age);
    this.teacherNo = teacherNo;
  }
  teach(){
    console.log('가르친다');
  }
}

class Student extends Person{
  constructor(name, age, stuNo, grade){
    super(name,age);
    this.stuNo=stuNo;
    this.grade=grade;
  }
  study(){
    console.log('공부한다');
  }
  // 오버라이딩 -> 부모의 메서드를 자식이 재정의 하는 것
  eat(){
    console.log('급식먹자');
  }
}

const lee = new Person('이씨', 20);
console.log(lee);
const choi = new Person('최씨', 25,123123214);
console.log(choi);
const kim = new Student('김씨',42,213123213,2);
console.log(kim);

lee.eat();
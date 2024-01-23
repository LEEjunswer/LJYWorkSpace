// 접근제어자 - 캡슐화 => private getter setter

// class Student(){ private int id; , private String name;}

// 프라이빗(private) -> 직접 접근이 불가능하다
class Student{
  static count=0;
  #id;
  #name;
  constructor(id,name){
    this.#id=id;
    this.#name=name;
    Student.count+=1;
  }

static fromObject(object){
  if(!!object?.id && !!object?.name){
    return new Student(object.id, object);
  }
}
static fromList(list){
  if(!Array.isArray(list)) return null;
  return new Student(list[0], list[1]);
}

// 프라이빗 메서드는 Student 안에서만 사용 가능하다
#getName = () => this.#name;

 get name(){
  return this.#name;
 }
 set name(name){
  this.#name=name;
 }
}

const stu1 = new Student(2019122104, 'Lee');
const stu2 = new Student(120123213, 'Choi');
const stu3 = new Student(21215125, 'How');

console.log(stu1);
console.log(stu1.name);  //get Name();
// console.log(stu1.getName());?
console.log(stu2.name);
// 프라이빗 변수를 set 없이 직접 변경을 시키면 적용 안됨 [주의!] 에러는 안띄운다!

stu2.name = '이준영'; // set name(name);

const stu4 =Student.fromObject({ name:'이준영', id:21313123123});
console.log(stu4 instanceof Student);
console.log(stu4);
const stu5 = Student.fromList([12341234, '둘리']);
console.log(stu5);
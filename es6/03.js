class Person {
  constructor() {
    this.x = 3;
  }
  sayHi() {
    console.log("hi");
  }
}

class Student extends Person {
  constructor() {
    super();
  }
  print() {
    console.log(this.x); //调用父类属性
  }
}

let s = new Student();
s.print();
s.sayHi();//调用父类方法

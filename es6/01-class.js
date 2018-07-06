class Point {
  // constructor 构造方法
  // 默认返回实例对象（即this）
  constructor(x, y) {
    // this 实例对象
    // x，y实例的属性
    this.x = x;
    this.y = y;
  }
  toString() {
    return "(" + this.x + ", " + this.y + ")";
  }
}

var p = new Point(2, 3); //必须new
var rs = p.toString();

//

let person = new class {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
}("tom");

person.sayName();

//

class Logger {
  constructor() {
    this.printName = this.printName.bind(this);//绑定函数，否则提取出来调用出现undefined
  }
  printName(name = "there") {
    this.print(`Hello ${name}`);
  }
  print(text) {
    console.log(text);
  }
}

const logger = new Logger();
const { printName } = logger;
printName();

//

class MyClass {
  constructor() {
    // ...
  }
  get prop() {
    return "getter";
  }
  set prop(value) {
    console.log("setter: " + value);
  }
}

let inst = new MyClass();

inst.prop = 123;
// setter: 123

inst.prop;
// 'getter'

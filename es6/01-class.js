//函数定义变量，方法
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
p.toString();

//定义匿名class，绑定变量
let person = new class {//创建匿名class，赋值给变量
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
}("tom");//相当于变量传入构造函数

person.sayName();

// binding this
class Logger {
  constructor() {
    this.printName = this.printName.bind(this);
    // 函数绑定this，提取函数出来调用时，如果函数使用this且没有进行绑定，就会出现undefined，找不到this
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

// set & get
class Teacher {
  constructor() {
    this.xcode;
  }
  get prop() {
    return this.xcode;
  }
  set prop(value) {
    this.xcode = value;
  }
}

let t = new Teacher();

t.prop = 'wtf';//调用set
t.prop//调用get

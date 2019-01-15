function test01() {
  class Point {
    constructor(x, y) {
      // this 实例对象
      this.x = x; //x实例的属性
      this.y = y;
    }
    print() {
      console.log("(" + this.x + ", " + this.y + ")");
    }
  }
  var p = new Point(2, 3);
  p.print();
}

//===绑定函数===
function test03() {
  class Person {
    constructor() {
      this.name = "tom";
      //函数的this与实例的this进行绑定
      this.print = this.print.bind(this);
    }
    print() {
      console.log(this.name);
    }
  }
  const p = new Person();
  const { print } = p;
  print();
}

//===set & get===
function test04() {
  class Person {
    constructor() {
      this.name;
      this.email;
    }
    get prop() {
      return this;
    }
    set prop(person) {
      this.name = person.name;
      this.email = person.email;
    }
  }

  let p = new Person();
  //set
  p.prop = {
    name: "tom",
    email: "tomeamil"
  };
  //get
  console.log(p.prop);
}

//===继承====
function test05() {
  class Father {
    constructor(x) {
      this.x = x;
    }
    fatherPrint() {
      console.log(this.x);
    }
  }

  class Son extends Father {
    constructor(x, y) {
      super(x); //调用父构造函数
      this.y = y;
    }
    //调用父函数
    toFatherPrint() {
      return this.fatherPrint();
    }
    //调用父属性x
    sonPrint() {
      console.log(this.y + this.x);
    }
  }

  const s = new Son("x1", "y1");
  s.toFatherPrint();
  s.sonPrint();
  s.fatherPrint(); //直接调用父类方法
}

test05();

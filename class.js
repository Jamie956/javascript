function test01() {
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    print() {
      console.log("(" + this.x + ", " + this.y + ")");
    }
  }
  var p = new Point(2, 3);
  p.print();
}

function test02() {
  class Person {
    constructor() {
      //bind使绑定的函数在改变作用域操作时仍然指向Person的this
      this.print = this.print.bind(this);
    }
    print() {
      console.log(this);
    }
  }
  const p = new Person();
  var print = p.print;//this -> window (if no bind)
  print();
}

//===set & get===
function test03() {
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

function test04() {
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
    invokeFatherPrint() {
      return this.fatherPrint();
    }
    //调用父属性x
    sonPrint() {
      console.log(this.y + this.x);
    }
  }

  const s = new Son("x1", "y1");
  s.invokeFatherPrint();
  s.sonPrint();
  s.fatherPrint(); //直接调用父类方法
}

test04();

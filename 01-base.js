//直接执行参数函数
function test01() {
  function foo(cb) {
    cb();
  }
  foo(() => {
    console.log("foo callback");
  });
}

//call执行参数函数
function test02() {
  function bar(cb) {
    cb.call(this);
  }
  bar(() => {
    console.log("bar callback");
  });
}

//apply劫持
function test03() {
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  function Student(name, age, grade) {
    //劫持另外一个对象的方法，继承另外一个对象的属性
    Person.apply(this, arguments);
    this.grade = grade;
  }
  var student = new Student("jamie", 18, "one");
  console.log(student);
}

//call调用实例
function test04() {
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  function Student(name, age, grade) {
    Person.call(this, name, age);
    this.grade = grade;
  }
  var student = new Student("jamie", 18, "one");
  console.log(student);
}

//===obj===

//prototype
function test06() {
  function Person() {}
  Person.prototype.name = "no name";
  Person.prototype.print = function() {
    console.log(this);
  };
  var p = new Person();
  p.name = "tom";
  p.print();
}

//函数实例
function test07() {
  function Person() {
    this.name = "";
    this.age = "";
    this.set = function(person) {
      this.name = person.name;
      this.age = person.age;
    };
    this.get = function() {
      return this;
    };
  }
  var p = new Person();
  p.set({ name: "tom", age: 18 });
  var rs = p.get();
  console.log(rs);
}

//停止当前循环，进入下一个循环
function test08() {
  var str = "";
  loop1: for (var i = 0; i < 5; i++) {
    if (i === 1) {
      continue loop1;
    }
    str += i;
  }
  console.log(str);
}

//throw error
function test09() {
  function factorial(x) {
    if (x < 0) throw new Error("x must not be negative");
    for (var f = 1; x > 1; f *= x, x--);
    return f;
  }
  factorial(-1);
  factorial(4);
}

//catch error
function test10() {
  function factorial(x) {
    if (x < 0) throw new Error("x must not be negative");
    for (var f = 1; x > 1; f *= x, x-- /* empty */);
    return f;
  }
  try {
    var f = factorial(-1);
    console.log(f);
  } catch (e) {
    console.log(e);
  }
}

//获取随机数
function test11() {
  var rs = Math.random();
  console.log(rs);
}

//生成n位随机数
function test12() {
  let getRandom = n =>
    Math.random()
      .toString()
      .slice(-n); // 截取倒数n位数
  var rs = getRandom(6);
  console.log(rs);
}

//生成n-m之间的随机数
function test13() {
  let randomNum = (n, m) => Math.floor(Math.random() * (m - n) + n);
  //以值小的n为基准，加上两数差的绝对值乘以0-1之间的随机数，取值区间为[n+|n-m|*0, n+|n-m|*1]，地板取整
  var rs = randomNum(2, 10);
  console.log(rs);
}

//短路运算符
function test14() {
  var rs;
  rs = "" && "1"; //第一个false就返回第一个
  console.log(rs);
  rs = "" || "2"; //第一个false就返回第二个
  console.log(rs);
}

//惰性载入函数
function test15() {
  function foo() {
    if (true) {
      foo = function() {
        console.log("aaa");
      };
    } else {
      foo = function() {
        console.log("bbb");
      };
    }
    return foo();
  }
  foo();
}

//一次性函数
function test16() {
  function sca() {
    console.log("msg");
    sca = function() {
      console.log("foo");
    };
  }
  sca();
  sca();
}

//通用表单校验
function test17() {
  const schema = {
    first: {
      required: true
    },
    last: {
      required: true
    }
  };

  const validate = (schema, values) => {
    for (field in schema) {
      if (schema[field].required) {
        if (!values[field]) {
          return false;
        }
      }
    }
    return true;
  };
  console.log(validate(schema, { first: "Bruce" })); // false
  console.log(validate(schema, { first: "Bruce", last: "Wayne" })); // true
}

test13();

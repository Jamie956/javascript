function test01() {
  "use strict";

  function foo() {
    //函数内定义的变量作用域是函数内
    var x = 1;
    x = x + 1;
  }

  x = x + 2; // ReferenceError
}

function test02() {
  "use strict";

  function foo() {
    var x = 1;
    function bar() {
      var y = x + 1; // bar可以访问foo的变量x
    }
    bar();
    var z = y + 1; // ReferenceError foo不可以访问bar的变量y
  }
  foo();
}

function test03() {
  "use strict";

  function foo() {
    //变量提升，执行代码时，会把所有变量定义了先
    var x = "Hello, " + y;
    console.log(x);
    var y = "Bob";
  }
  foo();
  //相当于执行
  // function foo() {
  //   var y;
  //   var x = "Hello, " + y;
  //   console.log(x);
  //   y = "Bob";
  // }
}

function test04() {
  "use strict";

  function foo() {
    //for内变量作用域是函数
    for (var i = 0; i < 10; i++) {
      //
    }
    console.log(i); //10
  }
  foo();
}

test04();

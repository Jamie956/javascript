// 闭包是能够读取其他函数内部变量的函数
function test01() {
  function f1() {
    var j = 4;
    function f2() {
      console.log(j);
    }
    return f2;
  }
  var result = f1();
  result();
}

function test02() {
  function foo() {
    //n保存在内存里
    var n = 999;
    //nAdd没有var定义，是全局变量，它的值是一个匿名函数，也是一个闭包
    nAdd = function() {
      n += 1;
    };
    //闭包函数print，依赖父函数foo
    function print() {
      console.log(n);
    }
    return print;
  }

  //print函数赋值给全局变量print
  var print = foo();
  print(); // 999
  nAdd();
  print(); // 1000
}

function test03() {
  function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }

  var add5 = makeAdder(5);
  var add10 = makeAdder(10);

  console.log(add5(2)); // 7
  console.log(add10(2)); // 12

  // 释放对闭包的引用
  add5 = null;
  add10 = null;
}

function test04() {
  //立即执行的匿名函数
  var Counter = (function() {
    //私有变量
    var privateCounter = 0;
    //私有函数
    function changeBy(val) {
      privateCounter += val;
    }
    //返回三个公共函数，共享同一个环境的闭包，提供访问私有属性，
    return {
      increment: function() {
        changeBy(1);
      },
      decrement: function() {
        changeBy(-1);
      },
      value: function() {
        return privateCounter;
      }
    };
  })();

  console.log(Counter.value()); /* logs 0 */
  Counter.increment();
  Counter.increment();
  console.log(Counter.value()); /* logs 2 */
  Counter.decrement();
  console.log(Counter.value()); /* logs 1 */
}

function test05() {
  var makeCounter = function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },
      decrement: function() {
        changeBy(-1);
      },
      value: function() {
        return privateCounter;
      }
    };
  };

  // counter1 和 counter2 各自独立
  var Counter1 = makeCounter();
  var Counter2 = makeCounter();
  console.log(Counter1.value()); /* logs 0 */
  Counter1.increment();
  Counter1.increment();
  console.log(Counter1.value()); /* logs 2 */
  Counter1.decrement();
  console.log(Counter1.value()); /* logs 1 */
  console.log(Counter2.value()); /* logs 0 */
}

function test06() {
  function count() {
    var arr = [];
    //i的值是共享的
    for (var i = 1; i <= 3; i++) {
      arr.push(function() {
        return i * i; //1, 4, 16
      });
    }
    //arr [fn,fn,fn]
    return arr;
  }

  var results = count();
  var f1 = results[0];
  var f2 = results[1];
  var f3 = results[2];

  console.log(f1()); //16
  console.log(f2()); //16
  console.log(f3()); //16
}

function test07() {
  "use strict";

  function make_pow(n) {
    return function(x) {
      return Math.pow(x, n);
    };
  }
  var pow2 = make_pow(2);
  var pow3 = make_pow(3);

  console.log(pow2(5)); // 25
  console.log(pow3(7)); // 343
}

function test08() {
  // 匿名函数最大的用途是创建闭包，并且还可以构建命名空间，以减少全局变量的使用。从而使用闭包模块化代码，减少全局变量的污染。
  var singleton = (function() {
    // 私有变量
    var age = 22;
    var speak = function() {
      console.log("speaking!!!");
    };

    // 公有属性和方法
    return {
      name: "percy",
      getAge: function() {
        return age;
      }
    };
  })();
  console.log(singleton.name);
}

function test09() {
  function fun(n, o) {
    console.log(o);
    return {
      fun: function(m) {
        return fun(m, n);
      }
    };
  }

  var a = fun(0); // undefined
  a.fun(1); // 0
  a.fun(2); // 0
  a.fun(3); // 0

  var b = fun(0)
    .fun(1)
    .fun(2)
    .fun(3); //undefined 0 1 2
  var c = fun(0).fun(1); // undefined 0
  c.fun(2); // 1
  c.fun(3); // 1
}

test09();

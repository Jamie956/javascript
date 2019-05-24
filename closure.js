// 读取函数内部变量
function test01() {
  function f1() {
    var j = 4;
    return function f2() {
      console.log(j);
    };
  }
  var result = f1();
  result();
}

// function test02() {
//   function makeAdder(x) {
//     return function(y) {
//       return x + y;
//     };
//   }

//   var add5 = makeAdder(5);
//   var add10 = makeAdder(10);

//   console.log(add5(2)); // 7
//   console.log(add10(2)); // 12

//   // 释放对闭包的引用
//   add5 = null;
//   add10 = null;
// }

function test03() {
  //立即执行的匿名函数
  var Counter = (function() {
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
  })();

  console.log(Counter.value()); //0
  Counter.increment();
  Counter.increment();
  console.log(Counter.value()); //2
  Counter.decrement();
  console.log(Counter.value()); //1
}

function test04() {
  var singleton = (function() {
    var age = 22;
    var speak = function() {
      console.log("speaking!!!");
    };

    return {
      name: "percy",
      getAge: function() {
        return age;
      }
    };
  })();
  console.log(singleton.name);
}

test01();

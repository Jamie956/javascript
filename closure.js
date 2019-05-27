// 读取函数内部变量
// 返回函数
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

function test02() {
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
      value: function() {
        return privateCounter;
      }
    };
  })();

  console.log(Counter.value()); //0
  Counter.increment();
  console.log(Counter.value()); //1
}

test01();

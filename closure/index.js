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

test02();

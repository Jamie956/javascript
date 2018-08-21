//限制用户连续点击
function throttle(fun) {
  if (fun.timeoutId) {
    clearTimeout(fun.timeoutId);
  }
  fun.timeoutId = setTimeout(function() {
    fun();
    fun.timeoutId = null;
  }, 1000);
}

//导出class
class Deer {}
module.exports = Deer;
//导入函数
var Deer = require("./Deer");

//导出带名函数
module.exports.foo = () => {};
//导入函数
var xx = require("./xx");
xx.foo();

//导出匿名函数
module.exports = function() {};
//导入函数
var xx = require("./xx");
xx();

// 导出数组
module.exports = ["a", "b", "c"];

// 导出多个函数
module.exports = {
  foo: () => {},
  bar: () => {}
};

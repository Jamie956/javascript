//栈，后进先出，LIFO
function Stack() {
  var items = [];
  //添加元素到栈顶，也就是末尾
  this.push = function(element) {
    items.push(element);
  };
  //移除栈顶元素
  this.pop = function() {
    return items.pop();
  };
  //获取栈顶元素
  this.peek = function() {
    return items[items.length - 1];
  };
  //是否为空
  this.isEmpty = function() {
    return items.length == 0;
  };
  //栈元素个数
  this.size = function() {
    return items.length;
  };
  //移除栈所有元素
  this.clear = function() {
    items = [];
  };
  this.print = function() {
    console.log(items.toString());
  };
}

var stack = new Stack();

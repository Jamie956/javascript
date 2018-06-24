function Stack() {
  var items = [];
  this.push = function(element) {
    items.push(element);
  };
  this.pop = function() {
    return items.pop();
  };
  this.peek = function() {
    return items[items.length - 1];
  };
  this.isEmpty = function() {
    return items.length == 0;
  };
  this.size = function() {
    return items.length;
  };
  this.clear = function() {
    items = [];
  };
  this.print = function() {
    console.log(items.toString());
  };
}

var stack = new Stack();
console.log(stack.isEmpty());

stack.push(5);
stack.push(8);

console.log(stack.peek()); //输出8
stack.push(11);
console.log(stack.size()); //输出3
console.log(stack.isEmpty()); //输出false

stack.push(15);

stack.pop();
stack.pop();
console.log(stack.size()); //输出2
stack.print(); //输出[5, 8]

function divideBy2(decNumber) {
  var remStack = new Stack(),
    rem,
    binaryString = "";
  while (decNumber > 0) {
    //{1}
    rem = Math.floor(decNumber % 2); //{2}
    remStack.push(rem); //{3}
    decNumber = Math.floor(decNumber / 2); //{4}
  }
  while (!remStack.isEmpty()) {
    //{5}
    binaryString += remStack.pop().toString();
  }
  return binaryString;
}

console.log(divideBy2(10));

function baseConverter(decNumber, base) {
  var remStack = new Stack(),
    rem,
    baseString = "",
    digits = "0123456789ABCDEF"; //{6}
  while (decNumber > 0) {
    rem = Math.floor(decNumber % base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base);
  }
  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()]; //{7}
  }
  return baseString;
}

console.log(baseConverter(100345, 2)); //输出11000011111111001
console.log(baseConverter(100345, 8)); //输出303771
console.log(baseConverter(100345, 16)); //输出187F9

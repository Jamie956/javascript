function test01() {
  "use strict";

  function add(x, y, f) {
    return f(x) + f(y);
  }

  console.log(add(-5, 6, Math.abs)); //11s
}

//map
function test02() {
  "use strict";
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var results = arr.map(function pow(value, index, array) {
    return value * value;
  }); // [1, 4, 9, 16, 25, 36, 49, 64, 81]
  console.log(results);
}

//reduce
function test03() {
  var ret = [1, 3, 5, 7, 9].reduce(function(previous, current, index, array) {
    return previous + current;
  });
  console.log(ret); // 25
}

//fliter
function test04() {
  var arr = [1, 2, 4, 5, 6, 9, 10, 15];
  arr.filter(function(x) {
    return x % 2 !== 0;
  });
  console.log(arr); // [1, 5, 9, 15]
}

function test05() {
  var arr = ["A", "B", "C"];
  var r = arr.filter(function(element, index, self) {
    console.log(element); // 依次打印'A', 'B', 'C'
    console.log(index); // 依次打印0, 1, 2
    console.log(self); // self就是变量arr
    return true;
  });
}

//sort
function test06() {
  "use strict";

  var arr = [10, 20, 1, 2];
  arr.sort(function(x, y) {
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });
  console.log(arr); // [1, 2, 10, 20]
}

function test07() {
  var arr = ["Google", "apple", "Microsoft"];
  arr.sort(function(s1, s2) {
    x1 = s1.toUpperCase();
    x2 = s2.toUpperCase();
    if (x1 < x2) {
      return -1;
    }
    if (x1 > x2) {
      return 1;
    }
    return 0;
  });
  console.log(arr); // ['apple', 'Google', 'Microsoft']
}

//forEach
function test08() {
  var sum = 0;

  [1, 2, 3, 4].forEach(function(item, index, array) {
    console.log(array[index] == item); // true
    sum += item;
  });

  console.log(sum);
}

function test09() {
  var db1 = {
    foo: function() {
      console.log("foo from db1");
    }
  };
  var db2 = {
    foo: function() {
      console.log("foo from db2");
    }
  };
  function handle() {
    this.foo();
  }
  // 接受一个可选的上下文参数（改变回调函数里面的this指向）
  ["a", "b", "c"].forEach(handle, db1);
}

//some
function test10() {
  var scores = [5, 8, 3, 10];
  var current = 7;

  function higherThanCurrent(score) {
    console.log(score);
    return score > current;
  }

  var ret = scores.some(higherThanCurrent);
  console.log(ret);
}

//every
function test11() {
  var scores = [5, 8, 3, 10];
  var current = 7;

  function higherThanCurrent(score) {
    console.log(score);
    return score > current;
  }

  var ret = scores.every(higherThanCurrent);
  console.log(ret);
}

test03();

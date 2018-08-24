//closure
function test01() {
  for (var i = 1; i <= 5; i++) {
    (function(j) {
      setTimeout(function timer() {
        console.log(j);
      }, j * 1000);
    })(i);
  }
}

// Shallow copy
function test02() {
  let a = {
    age: 1
  };
  let b = Object.assign({}, a);
  a.age = 2;
  console.log(b.age); // 1
}

// Shallow copy ...
function test03() {
  let a = {
    age: 1
  };
  let b = { ...a };
  a.age = 2;
  console.log(b.age); // 1
}

test03();

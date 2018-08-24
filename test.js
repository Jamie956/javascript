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

function test04() {
  function sleep() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("finish");
        resolve("sleep");
      }, 2000);
    });
  }
  async function test() {
    let value = await sleep();
    console.log("object");
  }
  test();
}

function test05() {
  var a = 0;
  var b = async () => {
    a = a + (await 10);
    console.log("2", a); // -> '2' 10
    a = (await 10) + a;
    console.log("3", a); // -> '3' 20
  };
  b();
  a++;
  console.log("1", a); // -> '1' 1
}
test05();

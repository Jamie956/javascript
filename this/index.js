function test01() {
  var obj = {
    x: 1,
    y: function foo() {
      //this是obj
      console.log(this.x);
    }
  };
  obj.y(); // 1
}

function test02() {
  var x = 2;
  function foo() {
    //this是构造的新对象
    this.x = 1;
  }

  var obj = new foo();
  console.log(obj.x); // 1
}

function test03() {
  var person = {
    name: "caibirdme",
    run: function(time) {
      console.log(this.name + "has been running for over " + time + " minutes");
    }
  };
  person.run(30);
  // 等价于
  person.run.call(person, 30);
}

test03();

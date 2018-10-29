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
  var obj = {
    x: 20,
    f: function() {
      console.log(this.x);
    },
    innerobj: {
      x: 30,
      f: function() {
        console.log(this.x);
      }
    }
  };
  obj.f(); //obj.f.call(obj) //20
  obj.innerobj.f(); //obj.innerobj.f.call(obj.innerobj) //30
}

function test04() {
  var person = {
    name: "caibirdme",
    run: function(time) {
      console.log(this.name + "has been running for over " + time + " minutes");
    }
  };
  person.run(30); //person.run.call(person, 30);
}

function test05() {
  var test = {
    a: 5,
    b: 6,
    sum: function(a, b) {
      var self = this;
      function getA() {
        return self.a;
      }
      function getB() {
        return self.b;
      }
      console.log(a);
      console.log(b);
      return getA() + getB();
    }
  };
  var obj = { a: 2, b: 3 };
  // console.log(test.sum.call(obj, 4, 5));// 4,5,5
  // console.log(test.sum.apply(obj, [6, 7]));// 6,7,5
  var sum = test.sum.bind(obj, 8);
  console.log(sum(9)); // 8,9,5
}

function test06() {
  const user = {
    name: "Tyler",
    greet() {
      console.log(this.name);
    }
  };
  user.greet();
}

test06();

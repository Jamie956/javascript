//continue
function test01() {
  var str = "";
  for (var i = 0; i < 5; i++) {
    if (i === 1) {
      continue;
    }
    str += i;
  }
  console.log(str);
}

//break
function test02() {
  var str = "";
  for (var i = 0; i < 5; i++) {
    if (i === 1) {
      break;
    }
    str += i;
  }
  console.log(str);
}

//prototype
function test03() {
  function Person() {}
  Person.prototype.name = "no name";
  Person.prototype.print = function() {
    console.log(this);
  };
  var p = new Person();
  p.name = "tom";
  p.print();
}

//函数实例
function test04() {
  function Person() {
    this.name = "";
    this.age = "";
    this.set = function(person) {
      this.name = person.name;
      this.age = person.age;
    };
    this.get = function() {
      return this;
    };
  }
  var p = new Person();
  p.set({ name: "tom", age: 18 });
  var rs = p.get();
  console.log(rs);
}

//catch error
function test05() {
  try {
    throw new Error("Oops");
  } catch (e) {
    console.log(e);
  }
}

//获取随机数
function test06() {
  var rs = Math.random();
  console.log(rs);
}

//生成n位随机数
function test07() {
  let getRandom = n =>
    Math.random()
      .toString()
      .slice(-n); // 截取倒数n位数
  var rs = getRandom(6);
  console.log(rs);
}

//生成n-m之间的随机数
function test08() {
  let randomNum = (n, m) => Math.floor(Math.random() * (m - n) + n);
  //以值小的n为基准，加上两数差的绝对值乘以0-1之间的随机数，取值区间为[n+|n-m|*0, n+|n-m|*1]，地板取整
  var rs = randomNum(2, 10);
  console.log(rs);
}

//短路运算符
function test09() {
  var rs;
  rs = "" && "1"; //第一个false就返回第一个
  console.log(rs);
  rs = "" || "2"; //第一个false就返回第二个
  console.log(rs);
}

//惰性载入函数
function test10() {
  function foo() {
    if (true) {
      foo = function() {
        console.log("aaa");
      };
    } else {
      foo = function() {
        console.log("bbb");
      };
    }
    return foo();
  }
  foo();
}

//一次性函数
function test11() {
  function sca() {
    console.log("msg");
    sca = function() {
      console.log("foo");
    };
  }
  sca();
  sca();
}

//通用表单校验
function test12() {
  const schema = {
    first: {
      required: true
    },
    last: {
      required: true
    }
  };

  const validate = (schema, values) => {
    //遍历schema
    for (field in schema) {
      //找出schema中为true的字段
      if (schema[field].required) {
        //判断改字段是否存在
        if (!values[field]) {
          return false;
        }
      }
    }
    return true;
  };
  console.log(validate(schema, { first: "Bruce" })); // false
  console.log(validate(schema, { first: "Bruce", last: "Wayne" })); // true
}

test02();

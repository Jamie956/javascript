//直接执行参数函数
function test01() {
  function foo(cb) {
    cb();
  }
  foo(() => {
    console.log("foo callback");
  });
}

//call执行参数函数
function test02() {
  function bar(cb) {
    cb.call(this);
  }
  bar(() => {
    console.log("bar callback");
  });
}

//apply劫持
function test03() {
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  function Student(name, age, grade) {
    //劫持另外一个对象的方法，继承另外一个对象的属性
    Person.apply(this, arguments);
    this.grade = grade;
  }
  var student = new Student("jamie", 18, "one");
  console.log(student);
}

//call调用实例
function test04() {
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  function Student(name, age, grade) {
    Person.call(this, name, age);
    this.grade = grade;
  }
  var student = new Student("jamie", 18, "one");
  console.log(student);
}

test04();

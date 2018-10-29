function test01() {
  function say(content) {
    console.log("From " + this + ": Hello " + content);
  }
  say.call("Bob", "World"); //From Bob: Hello World
}

function test02() {
  function person(name) {
    this.name = name;
  }
  var foo = new person("deen"); //new 语法糖
  console.log(foo);
  //等价于
  var bar = (function(name) {
    var _newObj = {
      constructor: person,
      __proto__: person.prototype
    };
    _newObj.constructor(name);
    _newObj.constructor.call(_newObj, name);
    return _newObj;
  })("deer");
  console.log(bar);
}

function test03() {
  var s1 = { color: "blue" };
  function print() {
    console.log(this.color);
  }
  //this -> s1
  print.call(s1);
}

function test04() {
  var s1 = { color: "blue" };
  function print(name) {
    console.log(name + " " + this.color);
  }
  //this -> s1
  print.call(s1, "Tom");
}

test02();

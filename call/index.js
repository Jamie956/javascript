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

test02();

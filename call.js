function test01() {
  function say(content) {
    console.log("From " + this + ": Hello " + content);
  }
  say.call("Bob", "World"); //From Bob: Hello World
}

function test02() {
  var s1 = { color: "blue" };
  function print() {
    console.log(this.color);
  }
  //this -> s1
  print.call(s1);
}

function test03() {
  var s1 = { color: "blue" };
  function print(name) {
    console.log(name + " " + this.color);
  }
  //this -> s1
  print.call(s1, "Tom");
}

test02();

function test01() {
  var s1 = { color: "blue" };
  function print() {
    console.log(this.color);
  }
  //this -> s1
  print.apply(s1);
}

function test02() {
  var s1 = { color: "blue" };
  function print(name) {
    console.log(name + " " + this.color);
  }
  //this -> s1
  print.apply(s1, ["Tom"]);
}

function test03() {
  function Animal(name) {
    this.name = name;
  }
  function Dog(name) {
    //Animal this -> this
    Animal.apply(this, arguments);
    console.log(this.name);
  }
  new Dog("Tom");
}

test03();

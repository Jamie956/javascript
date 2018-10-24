function test01() {
  //对象 s1
  var s1 = { color: "blue" };
  //print对象
  function print() {
    console.log(this.color);
  }
  //print对象 -> s1对象，即this就是s1
  print.call(s1);
}

function test02() {
  var s1 = { color: "blue" };
  function print(name) {
    console.log(name + " " + this.color);
  }
  print.call(s1, "Tom");
}

function test03() {
  var s1 = { color: "blue" };
  function print() {
    console.log(this.color);
  }
  print.apply(s1);
}

function test04() {
  var s1 = { color: "blue" };
  function print(name) {
    console.log(name + " " + this.color);
  }
  print.apply(s1, ['Tom']);
}

function test05() {
  function Animal(name) {
    this.name = name;
  }
  function Dog(name) {
    //Animal对象 -> this对象，即this就是Animal
    console.log(this.name);
    Animal.apply(this, arguments);
    console.log(this.name);
  }
  new Dog("Tom");
}


test04();

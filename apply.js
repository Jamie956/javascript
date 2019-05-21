function test01() {
  var user = { name: "tom" };
  function greet() {
    console.log(this.name);
  }
  //greet.this -> user
  greet.apply(user);
}

function test02() {
  var user = { name: "tom" };
  function greet(word) {
    console.log(this.name + " " + word);
  }
  //greet.this -> user
  greet.apply(user, ["say hi"]);
}

test02();

function test01() {
  function say(content) {
    console.log("From " + this + ": Hello " + content);
  }
  say.call("Bob", "World"); //From Bob: Hello World
}

function test02() {
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

test02();
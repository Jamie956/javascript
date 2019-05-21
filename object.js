//altered
function test1() {
  var obj = { x: "old" };
  obj.x = "new";
  console.log(obj.x);
}

//object unique
function test2(){
  console.log({} === {});
}

//same address
function test3(){
  var obj = {};
  console.log(obj === obj);
}

test3();

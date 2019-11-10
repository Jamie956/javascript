//by value
function test1() {
  var a = 3;
  var b;

  b = a;
  a = 2;
  console.log(a);
  console.log(b);
}

//by reference
//d->c=Hello->Halo
function test2() {
  var c = { greeting: "Hello" };
  var d;
  d = c;

  c.greeting = "Hola";

  console.log(c);
  console.log(d);
}

test2();

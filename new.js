function _new(constructor, params) {
  var args = [].slice.call(arguments);
  // constructor
  var constructor = args.shift();
  //create new object, prototype same with constructor
  var context = Object.create(constructor.prototype);
  // constructor.this -> context
  var result = constructor.apply(context, args);
  return typeof result === "object" && result != null ? result : context;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

var p = _new(Person, "tom", 28);
console.log(p);
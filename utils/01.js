function isString(o) {
  //是否字符串
  return Object.prototype.toString.call(o).slice(8, -1) === "String";
}

var foo = "aaaa";
console.log(typeof foo)

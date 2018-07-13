//let 只在区块内生效
for (let index = 0; index < array.length; index++) {
  const element = array[index];
}

//定义区块
{
}

//箭头函数
v => v + 1;
v => ({ k: v });
(x, y) => x + y;
z => {};

//参数赋值
function f(x, y = 7) {}

//传入剩余参数
function f(x, y, ...a) {}

//...传参
var params = ["hello", true, 7];
var other = [1, 2, ...params];
var str = "foo";
var chars = [...str];

//模板取值
var customer = { name: "Foo" };
var message = `Hello ${customer.name}`;

//定义对象
var x = 0;
var y = 0;
obj = { x, y };

//对象内定义函数格式
obj = {
  foo(a, b) {},
  bar(x, y) {}
};

//数组赋值
var list = [1, 2, 3];
var [a, , b] = list;
[b, a] = [a, b];

//对象赋值
var { op, lhs, rhs } = getASTNode();

//  lib/math.js
export function sum(x, y) {
  return x + y;
}
export var pi = 3.141593;
//  someApp.js
import * as math from "lib/math";
console.log("2π = " + math.sum(math.pi, math.pi));
//  otherApp.js
import { sum, pi } from "lib/math";
console.log("2π = " + sum(pi, pi));

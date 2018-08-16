//指定位置添加数组元素
function test01() {
  var arr = ["a", "b", "c", "d"];
  arr.splice(2, 0, "x");
  console.log(arr);
}

//指定位置替换数组元素
function test02() {
  var arr = ["a", "b", "c", "d"];
  arr.splice(2, 1, "x");
  console.log(arr);
}

//是否是数组
function test03() {
  var arr = ["a", "b", "c", "d"];
  var rs = Array.isArray(arr);
  console.log(rs);
}

//增删元素
function test04() {
  var arr = ["a", "b", "c", "d"];
  arr.unshift("x"); //首位插入元素
  console.log(arr);
  arr.push("e"); //末尾插入元素
  console.log(arr);
  arr.shift(); //移除数组首位元素
  console.log(arr);
  arr.pop(); //移除数组末尾元素
  console.log(arr);
}

//倒序
function test05() {
  var arr = ["a", "b", "c", "d"];
  arr.reverse();
  console.log(arr);
}

//裁剪数组
function test06() {
  var arr = ["a", "b", "c", "d"];
  var rs = arr.slice(1, 3);
  console.log(rs);
}

//根据元素获取索引
function test07() {
  var arr = ["a", "b", "c", "d"];
  var rs = arr.indexOf("b");
  console.log(rs);
  rs = arr.lastIndexOf("c");
  console.log(rs);
}

//数组转字符串
function test08() {
  var arr = ["a", "b", "c", "d"];
  var rs = arr.toString();
  console.log(rs);
}

//删除数组指定位置的元素，该位置会留下空字符串
function test09() {
  delete arr[2];
}

//连接数组
function test10() {
  arr1.concat(arr2);
}

// 遍历数组索引
function test11() {
  for (index in arr) {
  }
}

// 遍历数组元素
function test12() {
  for (item of items) {
  }
}

//排序
function test13() {
  arr.sort();
}

//以指定符号分割数组元素
function test14() {
  arr.join(" - ");
}

test08();

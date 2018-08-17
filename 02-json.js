//根据key获取json某个元素
function test08() {
  var json = { name: "tom", age: 18 };
  var rs = json.name;
  console.log(rs);
  rs = json["name"];
  console.log(rs);
}

//string与json转换
function test09() {
  //json转字符串
  var rs = JSON.stringify({ name: "tom", age: 18 });
  console.log(rs);
  //字符串转json
  rs = JSON.parse('{ "name": "tom", "age": 18 }');
  console.log(rs);
}

//根据key添加或更新元素
function test10() {
  var json = { name: "tom", age: 18 };
  //往json添加新元素
  json["sex"] = "man";
  console.log(json);
  //更新json指定元素
  json["age"] = 19;
  console.log(json);
}

//根据key删除json里的某个元素
function test11() {
  var json = { name: "tom", age: 18 };

  delete json["age"];
  console.log(json);
}

//遍历json，把json的key赋值给定义变量key
function test12() {
  var json = { name: "tom", age: 18 };

  for (key in json) {
    console.log("k: " + key, "v: " + json[key]);
  }
}

//把json的key存入数组a
function test13() {
  var json = { name: "tom", age: 18 };
  var a = [],
    i = 0;
  for (a[i++] in json);
  console.log(a);
}